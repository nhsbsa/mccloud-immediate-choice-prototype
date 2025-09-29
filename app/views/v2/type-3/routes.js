//define routes for version 2 of the prototype in a way I can import them into app/routes.js
// External dependencies
const express = require('express')

const router = express.Router()

//set version so I can use it this file
const version = 'v2/type-3';

// Add your version 2 routes here - above the module.exports line
router.get(`/${version}/batch/:id`, function (req, res) {
  const batchStatus = req.params.id;
  res.render(`${version}/batch`, { batchStatus: batchStatus });
});

router.get(`/${version}/batch-details/:id`, function (req, res) {
  const batchId = req.params.id;
  res.render(`${version}/batch-details`, {
    batchId: batchId,
    ...req.query
  });
});

router.get(`/${version}/search`, function (req, res) {
  const query = req.query;
  res.render(`${version}/search`, { ...query });
});

module.exports = router
