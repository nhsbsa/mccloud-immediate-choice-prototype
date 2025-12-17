//define routes for version 2 of the prototype in a way I can import them into app/routes.js
// External dependencies
const express = require('express')

const router = express.Router()

// Set version so I can use it in this file
const version = 'v3';
const type = 'type-2';

// Member search ---------------------------------------------------------------

router.get(`/${version}/${type}/search`, function (req, res) {
  const query = req.query;
  res.render(`${version}/${type}/search`, { ...query });
});

// Search results --------------------------------------------------------------

router.get(`/${version}/${type}/search-results`, function (req, res) {
  delete req.session.data.searchErrors;
  const data = req.session.data;
  const query = req.query; // Is this used?

  memberSearch = data.memberSearch;
  const searchErrors = data.searchErrors || [];

  if (!memberSearch) {
    // No membership number provided
    searchErrors.push('empty');
  } else if (memberSearch.length != 8 && isNaN(memberSearch)) {
    // Invalid member number length
    searchErrors.push('lengthAndNan');
  } else if (memberSearch.length != 8) {
    // Invalid member number length
    searchErrors.push('length');
  } else if (isNaN(memberSearch)) {
    // Invalid member number format
    searchErrors.push('nan');
  }

  if (searchErrors.length > 0) {
    data.searchErrors = searchErrors;
    res.redirect(`/${version}/${type}/search`);
    return;
  }

  // Search the pensioners data for the given membership number
  const matches = data.v3t1.pensioners.filter((pensioner) => pensioner.membershipNumber === memberSearch) || [];

  if (matches.length == 0) {
    // No matches found – go back to search with no results error?
    searchErrors.push('not-found');
    data.searchErrors = searchErrors;
    res.redirect(`/${version}/${type}/search`);
    return;
  } else if (matches.length == 1) {
    // One match found - redirect to pensioner record
    data.matches = matches;
    data.v3t2.record.address.items.addresseeName.value = matches[0].name; // Replace record name with matched member name
    res.redirect(`/${version}/${type}/record/${matches[0].id}`);
    return;
  } else {
    // Multiple matches found - show search results page
    data.matches = matches; // And pass to render
    data.v3t2.record.address.items.addresseeName.value = matches[0].name; // Replace record name with matched member name
    res.render(`${version}/${type}/search-results`, { matches });
  }

});

// Member record ---------------------------------------------------------------

router.get(`/${version}/${type}/record/:id`, function (req, res) {
  const data = req.session.data;
  const member = data.v3t2.pensioners.filter((pensioner) => pensioner.id === req.params.id)[0] || [];
  data.member = member;
  res.render(`${version}/${type}/record`, { member });
});

// Batch details ---------------------------------------------------------------

router.get(`/${version}/${type}/batch-details/:id`, function (req, res) {
  const batchId = req.params.id;
  res.render(`${version}/${type}/batch-details`, { batch: batchId });
});

// Edit record -----------------------------------------------------------------

router.get(`/${version}/${type}/edit-record-set/:id`, function (req, res) {
  console.log('Editing record set');
  const recordSetId = req.params.id;

  //pre-validate the records in this set
  const data = req.session.data;
  const schema = data.v3t2.record[recordSetId].items;

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
  const schema = data.v3t2.record[recordSetId].items;

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

// Split benefit ---------------------------------------------------------------

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
    value: `${submitted['protected-pay-date']['days']}-${submitted['protected-pay-date']['years']}`,
    type: 'daysAndYears'
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
    value: `${submitted['deemed-date']['days']}-${submitted['deemed-date']['years']}`,
    type: 'daysAndYears'
  };

  //store the new record set in the session data
  const data = req.session.data;
  data.v3t2.record[newId] = newSplitBenefit;

  //redirect to the record page, indicating the new record set is complete
  res.redirect(`/${version}/${type}/record?newSplit=${newId}`);

});

// Warn about record -----------------------------------------------------------

router.get(`/${version}/${type}/warn-about-record-set/:id`, function (req, res) {
  const recordSetId = req.params.id;
  res.render(`${version}/${type}/warn-about-record-set`, {
    recordSet: recordSetId,
    ...req.query
  });
});

// -----------------------------------------------------------------------------

module.exports = router
