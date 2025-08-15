const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });
const Listing = require("../models/listing.js");
const { listingSchema } = require("../schema.js");

module.exports.index = async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
};

module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({ path: "reviews", populate: { path: "author" } })
    .populate("owner");
  if (!listing) {
    req.flash("error", "Listing you requested for does not exist!");
    res.redirect("/listings");
  }
  console.log(listing);
  res.render("listings/show.ejs", { listing });
};

module.exports.createListing = async (req, res, next) => {
  let response = await geocodingClient
    .forwardGeocode({
      query: req.body.listing.location,
      limit: 1,
    })
    .send();

  const uploadedFileUrl = req.file ? req.file.path : null;
  const uploadedFileName = req.file ? req.file.filename : null;
  let result = listingSchema.validate(req.body);
  console.log(result);

  const listingData = { ...req.body.listing };
  if (listingData && (listingData.image === "" || listingData.image == null)) {
    delete listingData.image;
  }

  const newListing = new Listing(listingData);

  if (uploadedFileUrl && uploadedFileName) {
    newListing.image = { url: uploadedFileUrl, filename: uploadedFileName };
  } else if (listingData && listingData.image && listingData.image.url) {
    newListing.image = { url: listingData.image.url, filename: "" };
  }

  newListing.owner = req.user._id;

  newListing.geometry = response.body.features[0].geometry;

  await newListing.save();
  req.flash("success", "New Listing Created");
  res.redirect("/listings");
};

module.exports.editListing = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing you requested for does not exist!");
    res.redirect("/listings");
  }

  let originalImageUrl = listing.image.url;
  originalImageUrl = originalImageUrl.replace("/upload", "/upload/h_300,w_250");
  res.render("listings/edit.ejs", { listing, originalImageUrl });
};

module.exports.updateListing = async (req, res) => {
  let { id } = req.params;
  const uploadedFileUrl = req.file ? req.file.path : null;
  const uploadedFileName = req.file ? req.file.filename : null;

  const listingData = { ...req.body.listing };
  if (listingData && (listingData.image === "" || listingData.image == null)) {
    delete listingData.image;
  }

  if (uploadedFileUrl && uploadedFileName) {
    listingData.image = { url: uploadedFileUrl, filename: uploadedFileName };
  } else if (listingData && listingData.image && listingData.image.url) {
    listingData.image = { url: listingData.image.url, filename: "" };
  }

  await Listing.findByIdAndUpdate(id, listingData);
  req.flash("success", "Listing Edited");
  res.redirect(`/listings/${id}`);
};

module.exports.deleteListing = async (req, res) => {
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  req.flash("success", "Listing Deleted");
  console.log(deletedListing);
  res.redirect("/listings");
};
