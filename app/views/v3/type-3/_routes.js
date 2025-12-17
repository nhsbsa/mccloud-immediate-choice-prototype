//define routes for version 2 of the prototype in a way I can import them into app/routes.js
// External dependencies
const express = require('express')

const router = express.Router()

// Set version so I can use it in this file
const version = 'v3';
const type = 'type-3';

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
  const matches = data.v3t3.pensioners.filter((pensioner) => pensioner.membershipNumber === memberSearch) || [];

  if (matches.length == 0) {
    // No matches found – go back to search with no results error?
    searchErrors.push('not-found');
    data.searchErrors = searchErrors;
    res.redirect(`/${version}/${type}/search`);
    return;
  } else if (matches.length == 1) {
    // One match found - redirect to pensioner record
    data.matches = matches;
    data.v3t3.record.address.items.addresseeName.value = matches[0].name; // Replace record name with matched member name
    res.redirect(`/${version}/${type}/record/${matches[0].id}`);
    return;
  } else {
    // Multiple matches found - show search results page
    data.matches = matches; // And pass to render
    data.v3t3.record.address.items.addresseeName.value = matches[0].name; // Replace record name with matched member name
    res.render(`${version}/${type}/search-results`, { matches });
  }

});

// Member record ---------------------------------------------------------------

router.get(`/${version}/${type}/record/:id`, function (req, res) {
  const data = req.session.data;
  const member = data.v3t3.pensioners.filter((pensioner) => pensioner.id === req.params.id)[0] || [];
  data.member = member;
  res.render(`${version}/${type}/record`, { member });
});

// Batch -----------------------------------------------------------------------

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

// Batch details ---------------------------------------------------------------

router.get(`/${version}/${type}/batch-details/:id`, function (req, res) {
  const batchId = req.params.id;
  res.render(`${version}/${type}/batch-details`, {
    batchId: batchId,
    ...req.query
  });
});

// -----------------------------------------------------------------------------

module.exports = router
