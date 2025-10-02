// External dependencies
const express = require('express')

const router = express.Router()

// Starting point - choose version
router.get('/start/:version/:type', function (req, res) {
  const version = req.params.version; // v2
  const type = req.params.type; // type-1
  let vt = version + 't' + type.slice(-1); // v2t1

  // put version and type in session so we can use it later
  req.session.data.version = version;
  req.session.data.type = type;
  req.session.data.vt = vt;

  // This is used by original v1 path. Need to test/reinstate
  //translate between version and url, eg `v2` === `version-2`
  // const versionNumber = version.split('');
  // req.session.data.versionUrl = `/v${versionNumber[1]}`;

  // res.redirect(`/v${versionNumber[1]}/login`);
  res.redirect(`/${version}/${type}/login`);
});

// Import routes from /v2/type-1/routes.js
// router.all('/v2/type-1', function (req, res) {
//   const v2t1Routes = require('./views/v2/type-1/routes');
//   router.use('/', v2t1Routes);
// })

// Import routes from /v2/type-1/routes.js
const v2t1Routes = require('./views/v2/type-1/routes');
router.use('/', v2t1Routes);

// Import routes from /version-2/type-2/routes.js
const v2t2Routes = require('./views/v2/type-2/routes');
router.use('/', v2t2Routes);

// Import routes from /version-2/type-3/routes.js
const v2t3Routes = require('./views/v2/type-3/routes');
router.use('/', v2t3Routes);

module.exports = router
