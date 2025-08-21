# 🏠 StayEasy - Vacation Rental Platform

A full-stack web application for vacation rental listings where property owners can list their properties and users can find and book accommodations according to their preferences.

![StayEasy](https://img.shields.io/badge/StayEasy-Vacation%20Rental%20Platform-blue)
![Node.js](https://img.shields.io/badge/Node.js-22.14.0-green)
![Express](https://img.shields.io/badge/Express-5.1.0-orange)
![MongoDB](https://img.shields.io/badge/MongoDB-6.18.0-green)
![EJS](https://img.shields.io/badge/EJS-3.1.10-yellow)

## ✨ Features

### 🔐 User Authentication & Authorization

- User registration and login system
- Password authentication using Passport.js
- Session management with MongoDB store
- Protected routes for authenticated users
- Owner-only access for listing management

### 🏡 Property Listings

- Create, read, update, and delete (CRUD) property listings
- Image upload and management using Cloudinary
- Property details including title, description, price, location, and country
- Geographic coordinates using Mapbox Geocoding API
- Responsive image handling with default fallbacks

### 💬 Review System

- User reviews and ratings for properties
- Review management (create, edit, delete)
- Populated reviews with author information
- Automatic review cleanup when listings are deleted

### 🗺️ Location Services

- Mapbox integration for geocoding
- Geographic data storage for properties
- Location-based property search capabilities

### 🎨 User Interface

- Modern, responsive design using EJS templates
- Bootstrap-based styling
- Interactive forms with validation
- Flash messages for user feedback
- Social media integration links

### 🔒 Security Features

- Input validation using Joi schema validation
- CSRF protection
- Secure session management
- File upload security with Multer
- Environment variable configuration

## 🛠️ Tech Stack

### Backend

- **Node.js** (v22.14.0) - JavaScript runtime
- **Express.js** (v5.1.0) - Web application framework
- **MongoDB** (v6.18.0) - NoSQL database
- **Mongoose** (v8.15.0) - MongoDB object modeling
- **Passport.js** - Authentication middleware
- **Express Session** - Session management
- **Connect Mongo** - MongoDB session store

### Frontend

- **EJS** (v3.1.10) - Template engine
- **EJS Mate** (v4.0.0) - EJS layout helper
- **Bootstrap** - CSS framework
- **Font Awesome** - Icon library

### External Services

- **Cloudinary** - Cloud image storage and management
- **Mapbox** - Geocoding and mapping services
- **MongoDB Atlas** - Cloud database hosting

### Development Tools

- **Multer** - File upload handling
- **Joi** - Data validation
- **Connect Flash** - Flash message middleware
- **Method Override** - HTTP method override
- **Dotenv** - Environment variable management

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v22.14.0 or higher)
- **npm** (Node Package Manager)
- **MongoDB** (local installation or MongoDB Atlas account)
- **Git** (for cloning the repository)

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd mega-project
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Configuration

Create a `.env` file in the root directory with the following variables:

```env
# Database Configuration
ATLASDB_URL=your_mongodb_atlas_connection_string

# Session Configuration
SECRET=your_session_secret_key

# Mapbox Configuration
MAP_TOKEN=your_mapbox_access_token

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

### 4. Database Setup

- Set up a MongoDB database (local or MongoDB Atlas)
- Update the `ATLASDB_URL` in your `.env` file
- The application will automatically create collections on first run

### 5. External Services Setup

#### Mapbox

1. Create a Mapbox account at [mapbox.com](https://mapbox.com)
2. Generate an access token
3. Add the token to your `.env` file as `MAP_TOKEN`

#### Cloudinary

1. Create a Cloudinary account at [cloudinary.com](https://cloudinary.com)
2. Get your cloud name, API key, and API secret
3. Add them to your `.env` file

### 6. Run the Application

```bash
npm start
```

## 📁 Project Structure

```
mega-project/
├── controllers/          # Route controllers
│   ├── listing.js       # Listing CRUD operations
│   ├── reviews.js       # Review management
│   └── users.js         # User authentication
├── models/              # Database models
│   ├── listing.js       # Property listing schema
│   ├── review.js        # Review schema
│   └── user.js          # User schema
├── routes/              # Express routes
│   ├── listing.js       # Listing routes
│   ├── review.js        # Review routes
│   └── user.js          # User routes
├── views/               # EJS templates
│   ├── layouts/         # Layout templates
│   ├── listings/        # Listing pages
│   ├── users/           # User pages
│   └── includes/        # Reusable components
├── public/              # Static assets
├── utils/               # Utility functions
├── middleware.js        # Custom middleware
├── schema.js           # Joi validation schemas
├── cloudConfig.js      # Cloudinary configuration
├── app.js              # Main application file
└── package.json        # Dependencies and scripts
```

## 🌐 Deployment

This application is designed to be deployed on various platforms:

### Render

1. Connect your GitHub repository to Render
2. Set environment variables in Render dashboard
3. Deploy as a Node.js application

### Heroku

1. Create a Heroku app
2. Connect your GitHub repository
3. Set environment variables in Heroku dashboard
4. Deploy the application

### Vercel

1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy as a Node.js application

## 🔐 Environment Variables

Make sure to set these environment variables in your deployment platform:

- `ATLASDB_URL` - MongoDB connection string
- `SECRET` - Session secret key
- `MAP_TOKEN` - Mapbox access token
- `CLOUDINARY_CLOUD_NAME` - Cloudinary cloud name
- `CLOUDINARY_API_KEY` - Cloudinary API key
- `CLOUDINARY_API_SECRET` - Cloudinary API secret

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 🙏 Acknowledgments

- [Express.js](https://expressjs.com/) - Web framework
- [MongoDB](https://mongodb.com/) - Database
- [Mapbox](https://mapbox.com/) - Mapping services
- [Cloudinary](https://cloudinary.com/) - Image management
- [Bootstrap](https://getbootstrap.com/) - CSS framework



⭐ If you find this project helpful, please give it a star!
