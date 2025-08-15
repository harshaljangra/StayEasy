const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });
const Listing = require("../models/listing.js");
const mongoose = require("mongoose");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

async function geocodeExistingListings() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to database");

    // Find all listings that don't have geometry or coordinates
    const listingsWithoutCoords = await Listing.find({
      $or: [
        { geometry: { $exists: false } },
        { "geometry.coordinates": { $exists: false } },
        { "geometry.coordinates": { $size: 0 } }
      ]
    });

    console.log(`Found ${listingsWithoutCoords.length} listings without coordinates`);

    for (let listing of listingsWithoutCoords) {
      try {
        console.log(`Geocoding: ${listing.title} - ${listing.location}`);
        
        let response = await geocodingClient
          .forwardGeocode({
            query: listing.location,
            limit: 1,
          })
          .send();

        if (response.body.features.length > 0) {
          listing.geometry = response.body.features[0].geometry;
          await listing.save();
          console.log(`✓ Updated coordinates for: ${listing.title}`);
        } else {
          console.log(`✗ No coordinates found for: ${listing.title}`);
        }

        // Add a small delay to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 100));
      } catch (error) {
        console.log(`Error geocoding ${listing.title}:`, error.message);
      }
    }

    console.log("Geocoding completed!");
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected from database");
  }
}

// Run the script if called directly
if (require.main === module) {
  geocodeExistingListings();
}

module.exports = geocodeExistingListings;