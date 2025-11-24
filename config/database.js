// MongoDB database connection configuration
const mongoose = require('mongoose');

// Function to connect to MongoDB Atlas
const connectDB = async () => {
    try {
        // Connection using the connection string from .env file
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('✅ MongoDB Connected Successfully');
    } catch (error) {
        console.error('❌ MongoDB Connection Error:', error.message);
    
        process.exit(1);
    }
};

module.exports = connectDB;