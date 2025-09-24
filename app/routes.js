// External dependencies
const express = require('express')

const router = express.Router()


// Starting point - choose version
router.get('/start/:version', function (req, res) {
  const version = req.params.version;
  // put version in session so we can use it later
  req.session.data.version = version;

  //translate between version and url, eg `v2` === `version-2`
  const versionNumber = version.split('');

  res.redirect(`/version-${versionNumber[1]}/login`);
});

//import routes from /version-2/routes.js
const version2Routes = require('./views/version-2/routes');
router.use('/', version2Routes);

//version-3 routes
const version3Routes = require('./views/version-3/routes');
router.use('/', version3Routes);

module.exports = router
