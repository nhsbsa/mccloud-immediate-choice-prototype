// External dependencies
const express = require('express')

const router = express.Router()

// Add your routes here - above the module.exports line
router.get('/version-2/batch-details/:id', function (req, res) {
  const batchId = req.params.id;
  res.render('version-2/batch-details', { batch: batchId });
});

router.get('/version-2/record/:id', function (req, res) {
  const recordId = req.params.id;
  const batchId = req.query.batch;
  // Pass the batch ID to the template if needed  
  res.render('version-2/record', { record: recordId, batch: batchId });
});

router.get('/version-2/edit-record-set/:id', function (req, res) {
  const recordSetId = req.params.id;
  res.render('version-2/edit-record-set', { 
    recordSet: recordSetId,
    ...req.query
  });
});


router.get('/version-2/warn-about-record-set/:id', function (req, res) {
  const recordSetId = req.params.id;
  res.render('version-2/warn-about-record-set', { 
    recordSet: recordSetId,
    ...req.query
  });
});

module.exports = router
