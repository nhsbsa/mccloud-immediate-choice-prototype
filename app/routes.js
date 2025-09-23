// External dependencies
const express = require('express')

const router = express.Router()

// Add your routes here - above the module.exports line

//import routes from /version-2/routes.js
const version2Routes = require('./views/version-2/routes');
router.use('/', version2Routes);

//version-3 routes
const version3Routes = require('./views/version-3/routes');
router.use('/', version3Routes);

module.exports = router
