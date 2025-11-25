// Main Application File
require('dotenv').config(); 

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const methodOverride = require('method-override');
const connectDB = require('./config/database');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Connection to MongoDB
connectDB();

// Set view engine
app.set('view engine', 'ejs');
app.set('views', './views');


app.use(expressLayouts);
app.set('layout', 'layout');

// Middleware
app.use(express.static('public')); 
app.use(express.urlencoded({ extended: true })); // Parse form data
app.use(express.json()); // Parse JSON data
app.use(methodOverride('_method')); 

// Routes
app.use('/', taskRoutes);

// 404 Error handler
app.use((req, res) => {
    res.status(404).render('error', {
        title: 'Page Not Found',
        message: 'The page you are looking for does not exist',
        error: { status: 404 }
    });
});

// Start server
app.listen(PORT, () => {
    console.log(` Server is running on http://localhost:${PORT}`);
    console.log(` To-Do List Tracker is ready!`);
});