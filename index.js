// index.js
const express = require('express');
const app = express();
const PORT = 3886;

// Middleware for logging
const loggerMiddleware = (req, res, next) => {
    console.log(`[${new Date().toUTCString()}] ${req.method} ${req.url}`);
    next();
};

// Middleware for parsing incoming requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(loggerMiddleware);

// Import route files
const ecommerceRoutes = require('./ecommerceRoutes');
const passwordStrengthRoutes = require('./passwordStrengthRoutes');

// Mount the route files
app.use('/ecommerceRoutes', ecommerceRoutes);
app.use('/passwordstrengthroutes', passwordStrengthRoutes);

// Starting the server
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
