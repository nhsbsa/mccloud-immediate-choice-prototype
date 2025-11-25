// External dependencies
const express = require('express')

const router = express.Router()

router.use((req, res, next) => {
  // console.log(`In ${version} ${type} routes`);
  console.log(`--- app/routes.js ---`);
  next();
});

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
  // req.session.data.versionUrl = `/${version}/${type}`;

  // res.redirect(`/v${versionNumber[1]}/login`);
  if (version == 'v1') {
    res.redirect(`/${version}/${type}/outstanding-batches`);
  } else {
    res.redirect(`/${version}/${type}/login`);
  }
});

// Import routes accordingly from /{version}/{type}/routes.js
// router.use('/:version/:type', function (req, res) {
//   const vRoutes = require('./views/' + req.params.version + '/' + req.params.type + '/_routes');
//   console.log(`Loaded routes: ./views/${req.params.version}/${req.params.type}/_routes.js`);
//   router.use('/', vRoutes);
// })

// Import routes from /v2/type-1/routes.js
const v2t1Routes = require('./views/v2/type-1/_routes');
console.log(`Loaded routes: ./views/v2/type-1/_routes.js`);
router.use('/', v2t1Routes);

// Import routes from /v2/type-2/routes.js
const v2t2Routes = require('./views/v2/type-2/_routes');
console.log(`Loaded routes: ./views/v2/type-2/_routes.js`);
router.use('/', v2t2Routes);

// Import routes from /v2/type-3/routes.js
const v2t3Routes = require('./views/v2/type-3/_routes');
console.log(`Loaded routes: ./views/v2/type-3/_routes.js`);
router.use('/', v2t3Routes);

// Import routes from /v3/type-1/routes.js
const v3t1Routes = require('./views/v3/type-1/_routes');
console.log(`Loaded routes: ./views/v3/type-1/_routes.js`);
router.use('/', v3t1Routes);

// Import routes from /v3/type-2/routes.js
const v3t2Routes = require('./views/v3/type-2/_routes');
console.log(`Loaded routes: ./views/v3/type-2/_routes.js`);
router.use('/', v3t2Routes);

// Import routes from /v3/type-3/routes.js
const v3t3Routes = require('./views/v3/type-3/_routes');
console.log(`Loaded routes: ./views/v3/type-3/_routes.js`);
router.use('/', v3t3Routes);

// Import routes from /v3/type-1/routes.js
// router.use(/.*\/v3\/type-1\/.*/, function (req, res) {
//   const v3t1Routes = require('./views/v3/type-1/_routes');
//   console.log(`Loaded routes: ./views/v3/type-1/_routes.js`);
//   router.use('/', v3t1Routes);
// })

// // Import routes from /v3/type-2/routes.js
// router.use('v3/type-1', function (req, res) {
//   const v3t2Routes = require('./views/v3/type-2/_routes');
//   console.log(`Loaded routes: ./views/v3/type-2/_routes.js`);
//   router.use('/', v3t2Routes);
// })

// // Import routes from /v3/type-2/routes.js
// router.use('/v3/type-2', function (req, res) {
//   const v3t2Routes = require('./views/v3/type-2/_routes');
//   console.log(`Loaded routes: ./views/v3/type-2/_routes.js`);
//   router.use('/', v3t2Routes);
// })

// // Import routes from /v3/type-3/routes.js
// router.use('/v3/type-3', function (req, res) {
//   const v3t3Routes = require('./views/v3/type-3/_routes');
//   console.log(`Loaded routes: ./views/v3/type-3/_routes.js`);
//   router.use('/', v3t3Routes);
// })

module.exports = router
