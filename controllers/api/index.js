// Import the userRoutes and blogRoutes routers
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogRoutes = require('./blogRoutes');

// Define routes for the /users and /blogs endpoints
router.use('/users', userRoutes);
router.use('/blogs', blogRoutes);

module.exports = router;
