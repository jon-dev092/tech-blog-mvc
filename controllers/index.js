const router = require('express').Router();

// Import the apiRoutes and homeRoutes sub-routers
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
