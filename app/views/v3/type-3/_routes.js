//define routes for version 2 of the prototype in a way I can import them into app/routes.js
// External dependencies
const express = require('express')

const router = express.Router()

// Set version so I can use it in this file
const version = 'v3';
const type = 'type-3';

// Add your version 3 routes here - above the module.exports line

router.get(`/${version}/${type}/batch/:id`, function (req, res) {
  const data = req.session.data;
  const batchStatus = req.params.id;
  data.v3t3.currentBatch = batchStatus;

  // Set active nav states
  data.v3t3.user.navigation.items.forEach(navItem => {
    navItem.active = navItem.href.includes(batchStatus) ? true : false;
  });

  res.render(`${version}/${type}/batch`, { batchStatus: batchStatus });
});

router.get(`/${version}/${type}/batch-details/:id`, function (req, res) {
  const batchId = req.params.id;
  res.render(`${version}/${type}/batch-details`, {
    batchId: batchId,
    ...req.query
  });
});

// Member search ---------------------------------------------------------------
router.get(`/${version}/${type}/search`, function (req, res) {
  const data = req.session.data;
  const query = req.query;

  // Set active nav states
  data.v3t3.user.navigation.items.forEach(navItem => {
    navItem.active = navItem.href.includes("search") ? true : false;
  });
  res.render(`${version}/${type}/search`, { ...query });
});

module.exports = router
