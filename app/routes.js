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
  req.session.data.versionUrl = `/v${versionNumber[1]}`;

  res.redirect(`/v${versionNumber[1]}/login`);
});

//import routes from /version-2/routes.js
const v2t1Routes = require('./views/v2/type-1/routes');
router.use('/', v2t1Routes);

//version-3 routes
const v2t2Routes = require('./views/v2/type-2/routes');
router.use('/', v2t2Routes);

//version-4 routes
const v2t3Routes = require('./views/v2/type-3/routes');
router.use('/', v2t3Routes);

module.exports = router
