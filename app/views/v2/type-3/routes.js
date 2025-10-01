//define routes for version 2 of the prototype in a way I can import them into app/routes.js
// External dependencies
const express = require('express')

const router = express.Router()

// Set version so I can use it in this file
const version = 'v2';
const type = 'type-3';

router.all('/v2/type-3', function (req, res, next) {
  const data = req.session.data;
  data.username = data.v2t3.user.name;
  next()
});

// Add your version 2 routes here - above the module.exports line
router.get(`/${version}/${type}/batch/:id`, function (req, res) {
  const batchStatus = req.params.id;
  res.render(`${version}/${type}/batch`, { batchStatus: batchStatus });
});

router.get(`/${version}/${type}/batch-details/:id`, function (req, res) {
  const batchId = req.params.id;
  res.render(`${version}/${type}/batch-details`, {
    batchId: batchId,
    ...req.query
  });
});

router.get(`/${version}/${type}/search`, function (req, res) {
  const query = req.query;
  res.render(`${version}/${type}/search`, { ...query });
});

module.exports = router
