//define routes for version 2 of the prototype in a way I can import them into app/routes.js
// External dependencies
const express = require('express')

const router = express.Router()

//set version so I can use it this file
const version = 'v2';
const type = 'type-1';

// Add your version 2 routes here - above the module.exports line
router.get(`/${version}/${type}/batch-details/:id`, function (req, res) {
  const batchId = req.params.id;
  res.render(`${version}/${type}/batch-details`, { batch: batchId });
});

router.get(`/${version}/${type}/search`, function (req, res) {
  const query = req.query;
  res.render(`${version}/${type}/search`, { ...query });
});

router.get(`/${version}/${type}/record`, function (req, res) {
  const query = req.query;
  res.render(`${version}/${type}/record`, { ...query });
});

router.get(`/${version}/${type}/edit-record-set/:id`, function (req, res) {
  console.log('Editing record set');
  const recordSetId = req.params.id;

  //pre-validate the records in this set
  const data = req.session.data;
  const schema = data.v2t1.record[recordSetId].items;

  const errors = {};
  const errorsList = [];

  for (const [recordId, record] of Object.entries(schema)) {
    if (record.required && !record.value) {
      errorsList.push({ text: record.error || `${record.title} is required`, href: `#${recordId}` });
      errors[recordId] = record.error || `${record.title} is required`;
    }
  }

  res.render(`${version}/${type}/edit-record-set`, {
    recordSet: recordSetId,
    errors: errors,
    errorsList: (errorsList.length > 0) ? errorsList : null
  });
});

router.post(`/${version}/${type}/edit-record-set/:id`, (req, res) => {
  const submitted = req.body;
  const recordSetId = req.params.id;

  const errors = {};
  const errorsList = [];

  // look up the schema for the current record set
  const data = req.session.data;
  const schema = data.v2t1.record[recordSetId].items;

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
    res.render(`${version}/${type}/edit-record-set`, {
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
      res.redirect(`/${version}/${type}/warn-about-record-set/${recordSetId}`);
    } else {
      // no warnings, go back to the batch details page
      res.redirect(`/${version}/${type}/record?complete=${recordSetId}`);
    }
  }
});



router.post(`/${version}/${type}/split-benefit`, function (req, res) {
  //process the form submission
  const submitted = req.body;

  //generate a simple unique id for the new record set
  const newId = `splitBenfit${Date.now()}`;

  //log all submitted values
  console.log(submitted);

  const newSplitBenefit = {
    title: `${submitted['scheme'] || 'Option A'} split benefit`,
    id: newId,
    canDelete: true,
    items: {}
  }

  newSplitBenefit.items['protectedPayAmount'] = {
    title: 'Protected Pay Amount',
    value: submitted['protected-pay-amount'],
    type: 'currency'
  };

  newSplitBenefit.items['protectedPayDate'] = {
    title: 'Protected Pay Date',
    value: `${submitted['protected-pay-date']['year']}-${submitted['protected-pay-date']['month']}-${submitted['protected-pay-date']['day']}`,
    type: 'date'
  };

  newSplitBenefit.items['pension'] = {
    title: 'Pension',
    value: submitted['pension'],
    type: 'currency'
  };

  newSplitBenefit.items['lumpSum'] = {
    title: 'Lump Sum',
    value: submitted['lump-sum'],
    type: 'currency'
  };

  newSplitBenefit.items['deemedDate'] = {
    title: 'Deemed Date',
    value: `${submitted['deemed-date']['year']}-${submitted['deemed-date']['month']}-${submitted['deemed-date']['day']}`,
    type: 'date'
  };

  //store the new record set in the session data
  const data = req.session.data;
  data.v2t1.record[newId] = newSplitBenefit;

  //redirect to the record page, indicating the new record set is complete
  res.redirect(`/${version}/${type}/record?newSplit=${newId}`);

});

router.get(`/${version}/${type}/warn-about-record-set/:id`, function (req, res) {
  const recordSetId = req.params.id;
  res.render(`${version}/${type}/warn-about-record-set`, {
    recordSet: recordSetId,
    ...req.query
  });
});
module.exports = router
