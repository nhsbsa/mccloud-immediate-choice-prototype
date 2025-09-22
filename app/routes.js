// External dependencies
const express = require('express')

const router = express.Router()

// Add your routes here - above the module.exports line
router.get('/version-2/batch-details/:id', function (req, res) {
  const batchId = req.params.id;
  res.render('version-2/batch-details', { batch: batchId });
});

router.get('/version-2/record', function (req, res) {
  const query = req.query;
  res.render('version-2/record', { ...query } );
});

router.get('/version-2/edit-record-set/:id', function (req, res) {
  const recordSetId = req.params.id;

  //pre-validate the records in this set
  const data = req.session.data;
  const schema = data.v2.record[recordSetId].items;

  const errors = {};
  const errorsList = [];

  for (const [recordId, record] of Object.entries(schema)) {
    if (record.required && !record.value) {
      errorsList.push({ text: record.error || `${record.title} is required`, href: `#${recordId}` });
      errors[recordId] = record.error || `${record.title} is required`;
    }
  }

  res.render('version-2/edit-record-set', { 
    recordSet: recordSetId,
    errors: errors,
    errorsList: (errorsList.length > 0) ? errorsList : null
  });
});

router.post('/version-2/edit-record-set/:id', (req, res) => {
  const submitted = req.body; 
  const recordSetId = req.params.id;

  const errors = {};
  const errorsList = [];

  // look up the schema for the current record set
  const data = req.session.data;
  const schema = data.v2.record[recordSetId].items;

  for (const [recordId, record] of Object.entries(schema)) {
    
    const userValue = (submitted[recordId] || '').trim();

    if (record.required && !userValue) {
      errorsList.push({ text: record.error || `${record.title} is required`, href: `#${recordId}` });
      errors[recordId] = record.error || `${record.title} is required`;
    }
    //if the user has provided a value, mark it as valid
    if (userValue) {
      record.value = userValue;
      record.valid = true;
    }
  }

  if (Object.keys(errors).length > 0) {
    res.render('version-2/edit-record-set', {
      recordSet: recordSetId,
      errors: errors,
      errorsList: errorsList
    });
  } else {
    // work out if any of the records have warnings
    let hasWarnings = false;
    for (const record of Object.values(schema)) {
      if (record.warning) {
        hasWarnings = true;
        break;
      }
    }

    if (hasWarnings) {
      // redirect to a warning page
      res.redirect(`/version-2/warn-about-record-set/${recordSetId}`);
    } else {
      // no warnings, go back to the batch details page
      res.redirect(`/version-2/record?complete=${recordSetId}`);
    }
  }
});





router.get('/version-2/warn-about-record-set/:id', function (req, res) {
  const recordSetId = req.params.id;
  res.render('version-2/warn-about-record-set', { 
    recordSet: recordSetId,
    ...req.query
  });
});

module.exports = router
