const { FALSE } = require("sass-embedded");

module.exports = {
  v1t1: {
    user: {
      name: 'Alex Pearson (Pension Administrator)',
      navigation: null
    }
  },
  v1t2: {
    user: {
      name: 'Alex Pearson (Pension Administrator)',
      navigation: null
    }
  },
  v2t1: {
    user: {
      name: 'Alex Pearson (Pension Administrator)',
      navigation: null
    },
    batches: {
      outstanding: {
        1: {name: 'Batch 001', date: '2025-09-27T11:08', count: 328 },
        2: {name: 'Batch 002', date: '2025-09-26T14:22', count: 145 },
        3: {name: 'Batch 003', date: '2025-09-25T09:15', count: 289 },
        4: {name: 'Batch 004', date: '2025-09-24T16:45', count: 512 },
        5: {name: 'Batch 005', date: '2025-09-23T10:30', count: 76  }
      }
    },
    pensioners: {
      Tv1hWbn38UirIROgNeb4oQ: { name: 'Mr J Smith', membershipNumber: '12345678', dob: '1955-06-15' },
      Xy2jXcn49VjsJSPgOef5pR: { name: 'Mrs A Johnson', membershipNumber: '87654321', dob: '1960-11-22' },
      Yz3kYdo50WktKQTgPfg6qS: { name: 'Ms L Brown', membershipNumber: '11223344', dob: '1970-03-30' },
      Za4lZep61XluLURgQgh7rT: { name: 'Mr M Taylor', membershipNumber: '44332211', dob: '1958-08-05' },
      Ab5mAfq72YmvMVSgRhi8sU: { name: 'Mrs S Wilson', membershipNumber: '55667788', dob: '1965-12-12' },
      Bc6nBgr83ZnwNWTgSij9tV: { name: 'Ms K Davis', membershipNumber: '99887766', dob: '1975-04-18' },
      Cd7oChs94AoxOXUgTjk0uW: { name: 'Mr P Moore', membershipNumber: '66778899', dob: '1952-09-09' },
      De8pDit05BpyPYVhUkl1vX: { name: 'Mrs R Jackson', membershipNumber: '33445566', dob: '1968-01-25' },
      Ef9qEju16CqzQZWjVlm2wY: { name: 'Ms T White', membershipNumber: '22113344', dob: '1972-07-14' },
      Fg0rFkv27Dr0RAXkWmn3xZ: { name: 'Mr G Harris', membershipNumber: '44556677', dob: '1959-10-03' },
      Gh1sGlw38Es1SBYlXno4y0: { name: 'Mrs L Martin', membershipNumber: '77889900', dob: '1963-05-21' }
    },
    pensioner: {
      name: 'Mr J Smith',
      membershipNumber: '12345678',
      dob: '1955-06-15'
    },
    record: {
      address: {
        title: 'Address',
        id: 'address',
        items: {
          line1: {
            title: 'Line 1',
            value: '123 Example Street',
            required: true,
            type: 'text'
          },
          line2: {
            title: 'Line 2',
            value: 'Example District',
            required: false,
            type: 'text'
          },
          line3: {
            title: 'Line 3',
            value: '',
            required: false,
            type: 'text'
          },
          line4: {
            title: 'Line 4',
            value: 'Exampletown',
            required: false,
            type: 'text'
          },
          line5: {
            title: 'Line 5',
            value: '',
            required: false,
            type: 'text'
          },
          addresseeName: {
            title: 'Addressee name',
            value: 'Mr J Smith',
            required: true,
            type: 'text'
          },
          postcode: {
            title: 'Postcode',
            value: 'EX4 3PL',
            required: true,
            type: 'text'
          },
          country: {
            title: 'Country',
            value: 'United Kingdom',
            required: true,
            type: 'text'
          }
        }
      },
      schemeDetails: {
        title: 'Scheme details',
        id: 'schemeDetails',
        items: {
          legacyScheme: {
            title: 'Legacy scheme',
            value: '1955',
            required: true,
            type: 'text'
          },
          protectionType: {
            title: 'Protection type',
            value: 'full',
            required: false,
            type: 'text'
          }
        }
      },
      currentLegacySchemeBenefit: {
        title: 'Current legacy scheme benefit',
        id: 'currentLegacySchemeBenefit',
        items: {
          reasonForRetirement: {
            title: 'Reason for retirement',
            value: '',
            required: true,
            type: 'text',
            valid: false,
            error: 'Reason for retirement cannot be blank'
          },
          pension: {
            title: 'Pension',
            value: '',
            required: true,
            type: 'currency',
            valid: false,
            error: 'Pension must be a valid amount'
          },
          lumpSum: {
            title: 'Lump sum',
            value: '198373.98',
            required: false,
            type: 'currency',
            warning: 'Lump sum should be less than £120,000'
          },
          adultDependantPension: {
            title: 'Adult dependant pension',
            value: '0.00',
            required: false,
            type: 'currency'
          },
          payableDate: {
            title: 'Payable date',
            value: '2025-09-27',
            required: false,
            type: 'date',
            error: 'Payable date must be a valid date'
          },
          deemedDate: {
            title: 'Deemed date',
            value: '2025-09-27',
            required: false,
            type: 'date'
          },
          benefitScheme: {
            title: 'Benefit scheme',
            value: '',
            required: true,
            type: 'text',
            valid: false,
            error: 'Benefit scheme cannot be blank'
          },
          commutationType: {
            title: 'Commutation type',
            value: 'maximum',
            required: false,
            type: 'text'
          },
          commutationAmount: {
            title: 'Commutation amount',
            value: '198373.98',
            required: false,
            type: 'currency'
          },
          LTABCEDate: {
            title: 'LTA BCE date',
            value: '2025-09-27',
            required: false,
            type: 'date'
          },
          LTA: {
            title: 'LTA',
            value: '1073100',
            required: false,
            type: 'currency'
          },
          trivialLumpSumTaxable: {
            title: 'Trivial lump sum taxable',
            value: '0.00',
            required: false,
            type: 'currency'
          },
          trivialLumpSumTaxFree: {
            title: 'Trivial lump sum non-taxable',
            value: '0.00',
            required: false,
            type: 'currency'
          },
          ageAtPayable: {
            title: 'Age at payable date',
            value: '',
            required: true,
            valid: false,
            type: 'number',
            error: 'Age at payable date must be a number between 55 and 75'
          }
        }
      },
      optionALegacySchemeBenefit: {
        title: 'Option A legacy scheme benefit',
        id: 'optionALegacySchemeBenefit',
        items: {
          reasonForRetirement: {
            title: 'Reason for retirement',
            value: 'Age',
            required: true,
            type: 'text'
          },
          pension: {
            title: 'Pension',
            value: '19837.98',
            required: true,
            type: 'currency'
          },
          lumpSum: {
            title: 'Lump sum',
            value: '198373.98',
            required: false,
            type: 'currency'
          },
          adultDependantPension: {
            title: 'Adult dependant pension',
            value: '',
            required: true,
            type: 'currency',
            valid: false,
            error: 'Dependant pension should be greater than 50% of lump sum'
          },
          payableDate: {
            title: 'Payable date',
            value: '2025-09-27',
            required: false,
            type: 'date'
          },
          deemedDate: {
            title: 'Deemed date',
            value: '2025-09-27',
            required: false,
            type: 'date'
          },
          benefitScheme: {
            title: 'Benefit scheme',
            value: '1955',
            required: true,
            type: 'text'
          },
          commutationType: {
            title: 'LTA BCE date',
            value: '2018-04-05',
            required: false,
            type: 'date'
          },
          pensionablePay: {
            title: 'Pensionable pay',
            value: '550000000',
            required: false,
            type: 'currency',
            warning: 'Pensionable pay should be between £10,000 and £120,000'
          },
          ageAtPayable: {
            title: 'Age at payable date',
            value: '70',
            required: true,
            type: 'number'
          },
          reckonableMembership: {
            title: 'Reckonable membership',
            value: '101-10',
            required: false,
            type: 'daysAndYears'
          },
          dynamisingPay: {
            title: 'Dynamising pay',
            value: '60500',
            required: false,
            type: 'currency'
          },
          splitBenefitPay: {
            title: 'Split benefit pay',
            value: '0.00',
            required: false,
            type: 'currency'
          }
        }
      }
    }
  },
  v2t2: {
    user: {
      name: 'Jamie Lee (Quality Coach)',
      navigation: null
    },
    batches: {
      outstanding: {
        1: {name: 'Batch 001', date: '2025-09-27T11:08', count: 328 },
        2: {name: 'Batch 002', date: '2025-09-26T14:22', count: 145 },
        3: {name: 'Batch 003', date: '2025-09-25T09:15', count: 289 },
        4: {name: 'Batch 004', date: '2025-09-24T16:45', count: 512 },
        5: {name: 'Batch 005', date: '2025-09-23T10:30', count: 76  }
      }
    },
    pensioners: {
      Tv1hWbn38UirIROgNeb4oQ: { name: 'Mr J Smith', membershipNumber: '12345678', dob: '1955-06-15' },
      Xy2jXcn49VjsJSPgOef5pR: { name: 'Mrs A Johnson', membershipNumber: '87654321', dob: '1960-11-22' },
      Yz3kYdo50WktKQTgPfg6qS: { name: 'Ms L Brown', membershipNumber: '11223344', dob: '1970-03-30' },
      Za4lZep61XluLURgQgh7rT: { name: 'Mr M Taylor', membershipNumber: '44332211', dob: '1958-08-05' },
      Ab5mAfq72YmvMVSgRhi8sU: { name: 'Mrs S Wilson', membershipNumber: '55667788', dob: '1965-12-12' },
      Bc6nBgr83ZnwNWTgSij9tV: { name: 'Ms K Davis', membershipNumber: '99887766', dob: '1975-04-18' },
      Cd7oChs94AoxOXUgTjk0uW: { name: 'Mr P Moore', membershipNumber: '66778899', dob: '1952-09-09' },
      De8pDit05BpyPYVhUkl1vX: { name: 'Mrs R Jackson', membershipNumber: '33445566', dob: '1968-01-25' },
      Ef9qEju16CqzQZWjVlm2wY: { name: 'Ms T White', membershipNumber: '22113344', dob: '1972-07-14' },
      Fg0rFkv27Dr0RAXkWmn3xZ: { name: 'Mr G Harris', membershipNumber: '44556677', dob: '1959-10-03' },
      Gh1sGlw38Es1SBYlXno4y0: { name: 'Mrs L Martin', membershipNumber: '77889900', dob: '1963-05-21' }
    },
    pensioner: {
      name: 'Mr J Smith',
      membershipNumber: '12345678',
      dob: '1955-06-15'
    },
    record: {
      address: {
        title: 'Address',
        id: 'address',
        items: {
          line1: {
            title: 'Line 1',
            value: '123 Example Street',
            required: true,
            type: 'text'
          },
          line2: {
            title: 'Line 2',
            value: 'Example District',
            required: false,
            type: 'text'
          },
          line3: {
            title: 'Line 3',
            value: '',
            required: false,
            type: 'text'
          },
          line4: {
            title: 'Line 4',
            value: 'Exampletown',
            required: false,
            type: 'text'
          },
          line5: {
            title: 'Line 5',
            value: '',
            required: false,
            type: 'text'
          },
          addresseeName: {
            title: 'Addressee name',
            value: 'Mr J Smith',
            required: true,
            type: 'text'
          },
          postcode: {
            title: 'Postcode',
            value: 'EX4 3PL',
            required: true,
            type: 'text'
          },
          country: {
            title: 'Country',
            value: 'United Kingdom',
            required: true,
            type: 'text'
          }
        }
      },
      schemeDetails: {
        title: 'Scheme details',
        id: 'schemeDetails',
        items: {
          legacyScheme: {
            title: 'Legacy scheme',
            value: '1955',
            required: true,
            type: 'text'
          },
          protectionType: {
            title: 'Protection type',
            value: 'full',
            required: false,
            type: 'text'
          }
        }
      },
      currentLegacySchemeBenefit: {
        title: 'Current legacy scheme benefit',
        id: 'currentLegacySchemeBenefit',
        items: {
          reasonForRetirement: {
            title: 'Reason for retirement',
            value: '',
            required: true,
            type: 'text',

            error: 'Reason for retirement cannot be blank'
          },
          pension: {
            title: 'Pension',
            value: '',
            required: true,
            type: 'currency',

            error: 'Pension must be a valid amount'
          },
          lumpSum: {
            title: 'Lump sum',
            value: '198373.98',
            required: false,
            type: 'currency',
            warning: 'Lump sum should be less than £120,000'
          },
          adultDependantPension: {
            title: 'Adult dependant pension',
            value: '0.00',
            required: false,
            type: 'currency'
          },
          payableDate: {
            title: 'Payable date',
            value: '2025-09-27',
            required: false,
            type: 'date',
            error: 'Payable date must be a valid date'
          },
          deemedDate: {
            title: 'Deemed date',
            value: '2025-09-27',
            required: false,
            type: 'date'
          },
          benefitScheme: {
            title: 'Benefit scheme',
            value: '',
            required: true,
            type: 'text'
          },
          commutationType: {
            title: 'Commutation type',
            value: 'maximum',
            required: false,
            type: 'text'
          },
          commutationAmount: {
            title: 'Commutation amount',
            value: '198373.98',
            required: false,
            type: 'currency'
          },
          LTABCEDate: {
            title: 'LTA BCE date',
            value: '2025-09-27',
            required: false,
            type: 'date'
          },
          LTA: {
            title: 'LTA',
            value: '1073100',
            required: false,
            type: 'currency'
          },
          trivialLumpSumTaxable: {
            title: 'Trivial lump sum taxable',
            value: '0.00',
            required: false,
            type: 'currency'
          },
          trivialLumpSumTaxFree: {
            title: 'Trivial lump sum non-taxable',
            value: '0.00',
            required: false,
            type: 'currency'
          },
          ageAtPayable: {
            title: 'Age at payable date',
            value: '',
            required: true,

            type: 'number',
            error: 'Age at payable date must be a number between 55 and 75'
          }
        }
      },
      optionALegacySchemeBenefit: {
        title: 'Option A legacy scheme benefit',
        id: 'optionALegacySchemeBenefit',
        items: {
          reasonForRetirement: {
            title: 'Reason for retirement',
            value: 'Age',
            required: true,
            type: 'text'
          },
          pension: {
            title: 'Pension',
            value: '19837.98',
            required: true,
            type: 'currency'
          },
          lumpSum: {
            title: 'Lump sum',
            value: '198373.98',
            required: false,
            type: 'currency'
          },
          adultDependantPension: {
            title: 'Adult dependant pension',
            value: '',
            required: true,
            type: 'currency',

            error: 'Dependant pension should be greater than 50% of lump sum'
          },
          payableDate: {
            title: 'Payable date',
            value: '2025-09-27',
            required: false,
            type: 'date'
          },
          deemedDate: {
            title: 'Deemed date',
            value: '2025-09-27',
            required: false,
            type: 'date'
          },
          benefitScheme: {
            title: 'Benefit scheme',
            value: '1955',
            required: true,
            type: 'text'
          },
          commutationType: {
            title: 'LTA BCE date',
            value: '2018-04-05',
            required: false,
            type: 'date'
          },
          pensionablePay: {
            title: 'Pensionable pay',
            value: '550000000',
            required: false,
            type: 'currency',
            warning: 'Pensionable pay should be between £10,000 and £120,000'
          },
          ageAtPayable: {
            title: 'Age at payable date',
            value: '70',
            required: true,
            type: 'number'
          },
          reckonableMembership: {
            title: 'Reckonable membership',
            value: '109-10',
            required: false,
            type: 'daysAndYears'
          },
          dynamisingPay: {
            title: 'Dynamising pay',
            value: '60500',
            required: false,
            type: 'currency'
          },
          splitBenefitPay: {
            title: 'Split benefit pay',
            value: '0.00',
            required: false,
            type: 'currency'
          }
        }
      }
    }
  },
  v2t3: {
    user: {
      name: 'Sam Taylor (Manager)',
      navigation: {
        items: [
          { text: "Outstanding", href: "/v2/type-3/batch/outstanding" },
          { text: "Awaiting approval", href: "/v2/type-3/batch/awaitingApproval" },
          { text: "Rejected", href: "/v2/type-3/batch/rejected" },
          { text: "Completed", href: "/v2/type-3/batch/completed" },
          { text: "Find a pensioner", href: "/v2/type-3/search" }
        ]
      }
    },
    tags: {
      // batch tags
      1: { name: 'Sent for approval', colour: 'green' },
      2: { name: 'Awaiting approval', colour: 'green' },
      3: { name: 'Outstanding records', colour: 'orange' },
      4: { name: 'Ready to submit', colour: 'blue'},
      5: { name: 'Sent to print', colour: 'green'},
      6: { name: 'Rejected', colour: 'red'},
      // record tags
      7: { name: 'Invalid data', colour: 'orange' },
      8: { name: 'Data complete', colour: 'blue' },
      9: { name: 'Rejected', colour: 'red'},
      10: { name: 'Cannot be processed', colour: 'grey' },
    },
    batches: {
      outstanding: {
        title: "Outstanding batches",
        items: {
          1: {name: 'Batch 001', date: '2025-09-27T11:08', count: 328, tag: 3 },
          2: {name: 'Batch 002', date: '2025-09-26T14:22', count: 145, tag: 3 },
          3: {name: 'Batch 003', date: '2025-09-25T09:15', count: 289, tag: 3 },
          4: {name: 'Batch 004', date: '2025-09-24T16:45', count: 512, tag: 3 },
          5: {name: 'Batch 005', date: '2025-09-23T10:30', count: 76, tag: 3 }
        }
      },
      awaitingApproval: {
        title: "Batches awaiting approval",
        items: {
          6: {name: 'Batch 006', date: '2025-09-22T11:08', count: 210, tag: 2 },
          7: {name: 'Batch 007', date: '2025-09-21T14:22', count: 98, tag: 2 }
        }
      },
      rejected: {
        title: "Rejected batches",
        items: {
          8: {name: 'Batch 008', date: '2025-09-20T09:15', count: 45, tag: 6 },
          9: {name: 'Batch 009', date: '2025-09-19T16:45', count: 123, tag: 6 }
        }
      },
      completed: {
        title: "Completed batches",
        items: {
          10: {name: 'Batch 010', date: '2025-09-18T10:30', count: 300, tag: 5 },
          11: {name: 'Batch 011', date: '2025-09-17T11:45', count: 150, tag: 5 },
          12: {name: 'Batch 012', date: '2025-09-16T14:00', count: 275, tag: 4  },
          13: {name: 'Batch 013', date: '2025-09-15T09:30', count: 400, tag: 4  }
        }
      }
    },
    pensioners: {
      Tv1hWbn38UirIROgNeb4oQ: { name: 'Mr J Smith', membershipNumber: '12345678', dob: '1955-06-15' },
      Xy2jXcn49VjsJSPgOef5pR: { name: 'Mrs A Johnson', membershipNumber: '87654321', dob: '1960-11-22' },
      Yz3kYdo50WktKQTgPfg6qS: { name: 'Ms L Brown', membershipNumber: '11223344', dob: '1970-03-30' },
      Za4lZep61XluLURgQgh7rT: { name: 'Mr M Taylor', membershipNumber: '44332211', dob: '1958-08-05' },
      Ab5mAfq72YmvMVSgRhi8sU: { name: 'Mrs S Wilson', membershipNumber: '55667788', dob: '1965-12-12' },
      Bc6nBgr83ZnwNWTgSij9tV: { name: 'Ms K Davis', membershipNumber: '99887766', dob: '1975-04-18' },
      Cd7oChs94AoxOXUgTjk0uW: { name: 'Mr P Moore', membershipNumber: '66778899', dob: '1952-09-09' },
      De8pDit05BpyPYVhUkl1vX: { name: 'Mrs R Jackson', membershipNumber: '33445566', dob: '1968-01-25' },
      Ef9qEju16CqzQZWjVlm2wY: { name: 'Ms T White', membershipNumber: '22113344', dob: '1972-07-14' },
      Fg0rFkv27Dr0RAXkWmn3xZ: { name: 'Mr G Harris', membershipNumber: '44556677', dob: '1959-10-03' },
      Gh1sGlw38Es1SBYlXno4y0: { name: 'Mrs L Martin', membershipNumber: '77889900', dob: '1963-05-21' }
    },
    pensioner: {
      name: 'Mr J Smith',
      membershipNumber: '12345678',
      dob: '1955-06-15'
    },
    record: {
      address: {
        title: 'Address',
        id: 'address',
        items: {
          line1: {
            title: 'Line 1',
            value: '123 Example Street',
            required: true,
            type: 'text'
          },
          line2: {
            title: 'Line 2',
            value: 'Example District',
            required: false,
            type: 'text'
          },
          line3: {
            title: 'Line 3',
            value: '',
            required: false,
            type: 'text'
          },
          line4: {
            title: 'Line 4',
            value: 'Exampletown',
            required: false,
            type: 'text'
          },
          line5: {
            title: 'Line 5',
            value: '',
            required: false,
            type: 'text'
          },
          addresseeName: {
            title: 'Addressee name',
            value: 'Mr J Smith',
            required: true,
            type: 'text'
          },
          postcode: {
            title: 'Postcode',
            value: 'EX4 3PL',
            required: true,
            type: 'text'
          },
          country: {
            title: 'Country',
            value: 'United Kingdom',
            required: true,
            type: 'text'
          }
        }
      },
      schemeDetails: {
        title: 'Scheme details',
        id: 'schemeDetails',
        items: {
          legacyScheme: {
            title: 'Legacy scheme',
            value: '1955',
            required: true,
            type: 'text'
          },
          protectionType: {
            title: 'Protection type',
            value: 'full',
            required: false,
            type: 'text'
          }
        }
      },
      currentLegacySchemeBenefit: {
        title: 'Current legacy scheme benefit',
        id: 'currentLegacySchemeBenefit',
        items: {
          reasonForRetirement: {
            title: 'Reason for retirement',
            value: '',
            required: true,
            type: 'text',

            error: 'Reason for retirement cannot be blank'
          },
          pension: {
            title: 'Pension',
            value: '',
            required: true,
            type: 'currency',

            error: 'Pension must be a valid amount'
          },
          lumpSum: {
            title: 'Lump sum',
            value: '198373.98',
            required: false,
            type: 'currency',
            warning: 'Lump sum should be less than £120,000'
          },
          adultDependantPension: {
            title: 'Adult dependant pension',
            value: '0.00',
            required: false,
            type: 'currency'
          },
          payableDate: {
            title: 'Payable date',
            value: '2025-09-27',
            required: false,
            type: 'date',
            error: 'Payable date must be a valid date'
          },
          deemedDate: {
            title: 'Deemed date',
            value: '2025-09-27',
            required: false,
            type: 'date'
          },
          benefitScheme: {
            title: 'Benefit scheme',
            value: '',
            required: true,
            type: 'text'
          },
          commutationType: {
            title: 'Commutation type',
            value: 'maximum',
            required: false,
            type: 'text'
          },
          commutationAmount: {
            title: 'Commutation amount',
            value: '198373.98',
            required: false,
            type: 'currency'
          },
          LTABCEDate: {
            title: 'LTA BCE date',
            value: '2025-09-27',
            required: false,
            type: 'date'
          },
          LTA: {
            title: 'LTA',
            value: '1073100',
            required: false,
            type: 'currency'
          },
          trivialLumpSumTaxable: {
            title: 'Trivial lump sum taxable',
            value: '0.00',
            required: false,
            type: 'currency'
          },
          trivialLumpSumTaxFree: {
            title: 'Trivial lump sum non-taxable',
            value: '0.00',
            required: false,
            type: 'currency'
          },
          ageAtPayable: {
            title: 'Age at payable date',
            value: '',
            required: true,

            type: 'number',
            error: 'Age at payable date must be a number between 55 and 75'
          }
        }
      },
      optionALegacySchemeBenefit: {
        title: 'Option A legacy scheme benefit',
        id: 'optionALegacySchemeBenefit',
        items: {
          reasonForRetirement: {
            title: 'Reason for retirement',
            value: 'Age',
            required: true,
            type: 'text'
          },
          pension: {
            title: 'Pension',
            value: '19837.98',
            required: true,
            type: 'currency'
          },
          lumpSum: {
            title: 'Lump sum',
            value: '198373.98',
            required: false,
            type: 'currency'
          },
          adultDependantPension: {
            title: 'Adult dependant pension',
            value: '',
            required: true,
            type: 'currency',

            error: 'Dependant pension should be greater than 50% of lump sum'
          },
          payableDate: {
            title: 'Payable date',
            value: '2025-09-27',
            required: false,
            type: 'date'
          },
          deemedDate: {
            title: 'Deemed date',
            value: '2025-09-27',
            required: false,
            type: 'date'
          },
          benefitScheme: {
            title: 'Benefit scheme',
            value: '1955',
            required: true,
            type: 'text'
          },
          commutationType: {
            title: 'LTA BCE date',
            value: '2018-04-05',
            required: false,
            type: 'date'
          },
          pensionablePay: {
            title: 'Pensionable pay',
            value: '550000000',
            required: false,
            type: 'currency',
            warning: 'Pensionable pay should be between £10,000 and £120,000'
          },
          ageAtPayable: {
            title: 'Age at payable date',
            value: '70',
            required: true,
            type: 'number'
          },
          reckonableMembership: {
            title: 'Reckonable membership',
            value: '109-10',
            required: false,
            type: 'daysAndYears'
          },
          dynamisingPay: {
            title: 'Dynamising pay',
            value: '60500',
            required: false,
            type: 'currency'
          },
          splitBenefitPay: {
            title: 'Split benefit pay',
            value: '0.00',
            required: false,
            type: 'currency'
          }
        }
      }
    }
  },
  v3t1: {
    user: {
      name: 'Alex Pearson (Pension Administrator)',
      navigation: null
    },
    batches: {
      outstanding: {
        1: {name: 'Batch 001', date: '2025-09-27T11:08', count: 328 },
        2: {name: 'Batch 002', date: '2025-09-26T14:22', count: 145 },
        3: {name: 'Batch 003', date: '2025-09-25T09:15', count: 289 },
        4: {name: 'Batch 004', date: '2025-09-24T16:45', count: 512 },
        5: {name: 'Batch 005', date: '2025-09-23T10:30', count: 76  }
      }
    },
    pensioners: [
      { id: 'Tv1hWbn38UirIROgNeb4oQ', name: 'Mr J Smith', membershipNumber: '12345678', dob: '1955-06-15' },
      { id: 'Xy2jXcn49VjsJSPgOef5pR', name: 'Mrs A Johnson', membershipNumber: '87654321', dob: '1960-11-22' },
      { id: 'Yz3kYdo50WktKQTgPfg6qS', name: 'Ms L Brown', membershipNumber: '11223344', dob: '1970-03-30' },
      { id: 'Za4lZep61XluLURgQgh7rT', name: 'Mr M Taylor', membershipNumber: '44332211', dob: '1958-08-05' },
      { id: 'Ab5mAfq72YmvMVSgRhi8sU', name: 'Mrs S Wilson', membershipNumber: '55667788', dob: '1965-12-12' },
      { id: 'Bc6nBgr83ZnwNWTgSij9tV', name: 'Ms K Davis', membershipNumber: '99887766', dob: '1975-04-18' },
      { id: 'CsTfxaXmoSBybYCAvZWvfJ', name: 'Mrs A Johnson', membershipNumber: '87654321', dob: '1960-11-22' },
      { id: 'Cd7oChs94AoxOXUgTjk0uW', name: 'Mr P Moore', membershipNumber: '66778899', dob: '1952-09-09' },
      { id: 'De8pDit05BpyPYVhUkl1vX', name: 'Mrs R Jackson', membershipNumber: '33445566', dob: '1968-01-25' },
      { id: 'Ef9qEju16CqzQZWjVlm2wY', name: 'Ms T White', membershipNumber: '22113344', dob: '1972-07-14' },
      { id: 'Fg0rFkv27Dr0RAXkWmn3xZ', name: 'Mr G Harris', membershipNumber: '44556677', dob: '1959-10-03' },
      { id: 'Gh1sGlw38Es1SBYlXno4y0', name: 'Mrs L Martin', membershipNumber: '77889900', dob: '1963-05-21' }
    ],
    pensioner: {
      name: 'Mr J Smith',
      membershipNumber: '12345678',
      dob: '1955-06-15'
    },
    record: {
      address: {
        title: 'Address',
        id: 'address',
        items: {
          line1: {
            title: 'Line 1',
            value: '123 Example Street',
            required: true,
            type: 'text'
          },
          line2: {
            title: 'Line 2',
            value: 'Example District',
            required: false,
            type: 'text'
          },
          line3: {
            title: 'Line 3',
            value: '',
            required: false,
            type: 'text'
          },
          line4: {
            title: 'Line 4',
            value: 'Exampletown',
            required: false,
            type: 'text'
          },
          line5: {
            title: 'Line 5',
            value: '',
            required: false,
            type: 'text'
          },
          addresseeName: {
            title: 'Addressee name',
            value: 'Mr J Smith',
            required: true,
            type: 'text'
          },
          postcode: {
            title: 'Postcode',
            value: 'EX4 3PL',
            required: true,
            type: 'text'
          },
          country: {
            title: 'Country',
            value: 'United Kingdom',
            required: true,
            type: 'text'
          }
        }
      },
      schemeDetails: {
        title: 'Scheme details',
        id: 'schemeDetails',
        items: {
          legacyScheme: {
            title: 'Legacy Scheme',
            value: '1995',
            required: true,
            type: 'radios',
            options: [
              { text: '1995', value: '1995' },
              { text: '2008', value: '2008' }
            ]
          },
          protectionType: {
            title: 'Protection type',
            value: 'fullProtection',
            required: false,
            type: 'radios',
            options: [
              { text: 'No protection', value: 'noProtection' },
              { text: 'Tapered protection', value: 'taperedProtection' },
              { text: 'Full protection', value: 'fullProtection' }
            ]
          },
        }
      },
      currentLegacySchemeBenefit: {
        title: 'Current legacy scheme benefit',
        id: 'currentLegacySchemeBenefit',
        items: {
          reasonForRetirement: {
            title: 'Reason for retirement',
            value: '',
            required: true,
            type: 'select',
            valid: false,
            error: 'Reason for retirement cannot be blank',
            options: [
              { text: '', value: '' },
              { text: 'Age', value: 'age' },
              { text: 'Actuarially reduced', value: 'actuariallyReduced' },
              { text: 'Early payment of preserved (Act Red)', value: 'earlyPaymentOfPreservedActRed' },
              { text: 'Ill health - Tier 1 benefits', value: 'illHealthTier_1Benefits' },
              { text: 'Ill health - Tier 2 benefits', value: 'illHealthTier_2Benefits' },
              { text: 'Incapacity', value: 'incapacity' },
              { text: 'Partial retirement', value: 'partialRetirement' },
              { text: 'Preserved into payment', value: 'preservedIntoPayment' },
              { text: 'Redundancy', value: 'redundancy' },
              { text: 'Trivial commutation', value: 'trivialCommutation' }
            ]
          },
          pension: {
            title: 'Pension',
            value: '',
            required: true,
            type: 'currency',
            valid: false,
            error: 'Pension must be a valid amount'
          },
          lumpSum: {
            title: 'Lump sum',
            value: '198373.98',
            required: false,
            type: 'currency',
            warning: 'Lump sum should be less than £120,000'
          },
          adultDependantPension: {
            title: 'Adult dependant pension',
            value: '0.00',
            required: false,
            type: 'currency'
          },
          payableDate: {
            title: 'Payable date',
            value: '2025-09-27',
            required: false,
            type: 'date',
            error: 'Payable date must be a valid date'
          },
          deemedDate: {
            title: 'Deemed date',
            value: '2025-09-27',
            required: false,
            type: 'date'
          },
          benefitScheme: {
            title: 'Benefit scheme',
            value: '',
            required: true,
            type: 'radios',
            valid: false,
            error: 'Benefit scheme cannot be blank',
            options: [
              { text: '1995', value: '1995' },
              { text: '2008', value: '2008' },
              { text: '2015', value: '2015' }
            ]
          },
          commutationType: {
            title: 'Commutation type',
            value: 'maximum',
            required: false,
            type: 'radios',
            options: [
              {
                text: 'None',
                value: 'none'
              },
              {
                text: 'Maximum',
                value: 'maximum'
              },
              {
                value: "specific",
                text: "Specific",
                conditional: {
                  html: "<label class=\"nhsuk-label\" for=\"commutationAmount\">Commutation amount</label><div class=\"nhsuk-input-wrapper\"><div class=\"nhsuk-input__prefix\" aria-hidden=\"true\">£</div><input class=\"nhsuk-input nhsuk-input--width-5\" id=\"commutationAmount\" name=\"commutationAmount\" type=\"text\" value=\"\"></div>"
                }
              }
            ]
          },
          LTABCEDate: {
            title: 'LTA BCE date',
            value: '2025-09-27',
            required: false,
            type: 'date'
          },
          LTA: {
            title: 'LTA',
            value: '105.34',
            required: false,
            type: 'percent'
          },
          trivialLumpSumTaxable: {
            title: 'Trivial lump sum taxable',
            value: '0.00',
            required: false,
            type: 'currency'
          },
          trivialLumpSumTaxFree: {
            title: 'Trivial lump sum non-taxable',
            value: '0.00',
            required: false,
            type: 'currency'
          },
          ageAtPayable: {
            title: 'Age at payable date',
            value: '',
            required: true,
            valid: false,
            type: 'number',
            error: 'Age at payable date must be a number between 55 and 75'
          }
        }
      },
      optionALegacySchemeBenefit: {
        title: 'Option A legacy scheme benefit',
        id: 'optionALegacySchemeBenefit',
        items: {
          reasonForRetirement: {
            title: 'Reason for retirement',
            value: 'Age',
            required: true,
            type: 'text'
          },
          pension: {
            title: 'Pension',
            value: '19837.98',
            required: true,
            type: 'currency'
          },
          lumpSum: {
            title: 'Lump sum',
            value: '198373.98',
            required: false,
            type: 'currency'
          },
          adultDependantPension: {
            title: 'Adult dependant pension',
            value: '',
            required: true,
            type: 'currency',
            valid: false,
            error: 'Dependant pension should be greater than 50% of lump sum'
          },
          payableDate: {
            title: 'Payable date',
            value: '2025-09-27',
            required: false,
            type: 'date'
          },
          deemedDate: {
            title: 'Deemed date',
            value: '2025-09-27',
            required: false,
            type: 'date'
          },
          benefitScheme: {
            title: 'Benefit scheme',
            value: '1955',
            required: true,
            type: 'text'
          },
          commutationType: {
            title: 'LTA BCE date',
            value: '2018-04-05',
            required: false,
            type: 'date'
          },
          pensionablePay: {
            title: 'Pensionable pay',
            value: '550000000',
            required: false,
            type: 'currency',
            warning: 'Pensionable pay should be between £10,000 and £120,000'
          },
          ageAtPayable: {
            title: 'Age at payable date',
            value: '70',
            required: true,
            type: 'number'
          },
          reckonableMembership: {
            title: 'Reckonable membership',
            value: '101-10',
            required: false,
            type: 'daysAndYears'
          },
          dynamisingPay: {
            title: 'Dynamising pay',
            value: '60500',
            required: false,
            type: 'currency'
          },
          splitBenefitPay: {
            title: 'Split benefit pay',
            value: '0.00',
            required: false,
            type: 'currency'
          }
        }
      },
      splitBenefit: {
        canDelete: false,
        title: "Option A split benefit",
        id: "splitBenefit",
        items: {
          deemedDate: {
            title: "Deemed Date",
            type: "date",
            value: "2025-02-02",
            required: false
          },
          lumpSum: {
            title: "Lump Sum",
            type: "currency",
            value: "1234",
            required: true
          },
          pension: {
            title: "Pension",
            type: "currency",
            value: "5432",
            required: true
          },
          protectedPayAmount: {
            title: "Protected Pay Amount",
            type: "currency",
            value: "9876",
            required: true
          },
          protectedPayDate: {
            title: "Protected Pay Date",
            type: "date",
            value: "2025-01-01",
            required: false
          }
        }
      }
    }
  },
  v3t2: {
    user: {
      name: 'Jamie Lee (Quality Coach)',
      navigation: null
    },
    batches: {
      outstanding: {
        1: {name: 'Batch 001', date: '2025-09-27T11:08', count: 328 },
        2: {name: 'Batch 002', date: '2025-09-26T14:22', count: 145 },
        3: {name: 'Batch 003', date: '2025-09-25T09:15', count: 289 },
        4: {name: 'Batch 004', date: '2025-09-24T16:45', count: 512 },
        5: {name: 'Batch 005', date: '2025-09-23T10:30', count: 76  }
      }
    },
    pensioners: [
      { id: 'Tv1hWbn38UirIROgNeb4oQ', name: 'Mr J Smith', membershipNumber: '12345678', dob: '1955-06-15' },
      { id: 'Xy2jXcn49VjsJSPgOef5pR', name: 'Mrs A Johnson', membershipNumber: '87654321', dob: '1960-11-22' },
      { id: 'Yz3kYdo50WktKQTgPfg6qS', name: 'Ms L Brown', membershipNumber: '11223344', dob: '1970-03-30' },
      { id: 'Za4lZep61XluLURgQgh7rT', name: 'Mr M Taylor', membershipNumber: '44332211', dob: '1958-08-05' },
      { id: 'Ab5mAfq72YmvMVSgRhi8sU', name: 'Mrs S Wilson', membershipNumber: '55667788', dob: '1965-12-12' },
      { id: 'Bc6nBgr83ZnwNWTgSij9tV', name: 'Ms K Davis', membershipNumber: '99887766', dob: '1975-04-18' },
      { id: 'CsTfxaXmoSBybYCAvZWvfJ', name: 'Mrs A Johnson', membershipNumber: '87654321', dob: '1960-11-22' },
      { id: 'Cd7oChs94AoxOXUgTjk0uW', name: 'Mr P Moore', membershipNumber: '66778899', dob: '1952-09-09' },
      { id: 'De8pDit05BpyPYVhUkl1vX', name: 'Mrs R Jackson', membershipNumber: '33445566', dob: '1968-01-25' },
      { id: 'Ef9qEju16CqzQZWjVlm2wY', name: 'Ms T White', membershipNumber: '22113344', dob: '1972-07-14' },
      { id: 'Fg0rFkv27Dr0RAXkWmn3xZ', name: 'Mr G Harris', membershipNumber: '44556677', dob: '1959-10-03' },
      { id: 'Gh1sGlw38Es1SBYlXno4y0', name: 'Mrs L Martin', membershipNumber: '77889900', dob: '1963-05-21' }
    ],
    pensioner: {
      name: 'Mr J Smith',
      membershipNumber: '12345678',
      dob: '1955-06-15'
    },
    record: {
      address: {
        title: 'Address',
        id: 'address',
        items: {
          line1: {
            title: 'Line 1',
            value: '123 Example Street',
            required: true,
            type: 'text'
          },
          line2: {
            title: 'Line 2',
            value: 'Example District',
            required: false,
            type: 'text'
          },
          line3: {
            title: 'Line 3',
            value: '',
            required: false,
            type: 'text'
          },
          line4: {
            title: 'Line 4',
            value: 'Exampletown',
            required: false,
            type: 'text'
          },
          line5: {
            title: 'Line 5',
            value: '',
            required: false,
            type: 'text'
          },
          addresseeName: {
            title: 'Addressee name',
            value: 'Mr J Smith',
            required: true,
            type: 'text'
          },
          postcode: {
            title: 'Postcode',
            value: 'EX4 3PL',
            required: true,
            type: 'text'
          },
          country: {
            title: 'Country',
            value: 'United Kingdom',
            required: true,
            type: 'text'
          }
        }
      },
      schemeDetails: {
        title: 'Scheme details',
        id: 'schemeDetails',
        items: {
          legacyScheme: {
            title: 'Legacy scheme',
            value: '1955',
            required: true,
            type: 'text'
          },
          protectionType: {
            title: 'Protection type',
            value: 'full',
            required: false,
            type: 'text'
          }
        }
      },
      currentLegacySchemeBenefit: {
        title: 'Current legacy scheme benefit',
        id: 'currentLegacySchemeBenefit',
        items: {
          reasonForRetirement: {
            title: 'Reason for retirement',
            value: '',
            required: true,
            type: 'text',

            error: 'Reason for retirement cannot be blank'
          },
          pension: {
            title: 'Pension',
            value: '',
            required: true,
            type: 'currency',

            error: 'Pension must be a valid amount'
          },
          lumpSum: {
            title: 'Lump sum',
            value: '198373.98',
            required: false,
            type: 'currency',
            warning: 'Lump sum should be less than £120,000'
          },
          adultDependantPension: {
            title: 'Adult dependant pension',
            value: '0.00',
            required: false,
            type: 'currency'
          },
          payableDate: {
            title: 'Payable date',
            value: '2025-09-27',
            required: false,
            type: 'date',
            error: 'Payable date must be a valid date'
          },
          deemedDate: {
            title: 'Deemed date',
            value: '2025-09-27',
            required: false,
            type: 'date'
          },
          benefitScheme: {
            title: 'Benefit scheme',
            value: '',
            required: true,
            type: 'text'
          },
          commutationType: {
            title: 'Commutation type',
            value: 'maximum',
            required: false,
            type: 'text'
          },
          commutationAmount: {
            title: 'Commutation amount',
            value: '198373.98',
            required: false,
            type: 'currency'
          },
          LTABCEDate: {
            title: 'LTA BCE date',
            value: '2025-09-27',
            required: false,
            type: 'date'
          },
          LTA: {
            title: 'LTA',
            value: '1073100',
            required: false,
            type: 'currency'
          },
          trivialLumpSumTaxable: {
            title: 'Trivial lump sum taxable',
            value: '0.00',
            required: false,
            type: 'currency'
          },
          trivialLumpSumTaxFree: {
            title: 'Trivial lump sum non-taxable',
            value: '0.00',
            required: false,
            type: 'currency'
          },
          ageAtPayable: {
            title: 'Age at payable date',
            value: '',
            required: true,

            type: 'number',
            error: 'Age at payable date must be a number between 55 and 75'
          }
        }
      },
      optionALegacySchemeBenefit: {
        title: 'Option A legacy scheme benefit',
        id: 'optionALegacySchemeBenefit',
        items: {
          reasonForRetirement: {
            title: 'Reason for retirement',
            value: 'Age',
            required: true,
            type: 'text'
          },
          pension: {
            title: 'Pension',
            value: '19837.98',
            required: true,
            type: 'currency'
          },
          lumpSum: {
            title: 'Lump sum',
            value: '198373.98',
            required: false,
            type: 'currency'
          },
          adultDependantPension: {
            title: 'Adult dependant pension',
            value: '',
            required: true,
            type: 'currency',

            error: 'Dependant pension should be greater than 50% of lump sum'
          },
          payableDate: {
            title: 'Payable date',
            value: '2025-09-27',
            required: false,
            type: 'date'
          },
          deemedDate: {
            title: 'Deemed date',
            value: '2025-09-27',
            required: false,
            type: 'date'
          },
          benefitScheme: {
            title: 'Benefit scheme',
            value: '1955',
            required: true,
            type: 'text'
          },
          commutationType: {
            title: 'LTA BCE date',
            value: '2018-04-05',
            required: false,
            type: 'date'
          },
          pensionablePay: {
            title: 'Pensionable pay',
            value: '550000000',
            required: false,
            type: 'currency',
            warning: 'Pensionable pay should be between £10,000 and £120,000'
          },
          ageAtPayable: {
            title: 'Age at payable date',
            value: '70',
            required: true,
            type: 'number'
          },
          reckonableMembership: {
            title: 'Reckonable membership',
            value: '109-10',
            required: false,
            type: 'daysAndYears'
          },
          dynamisingPay: {
            title: 'Dynamising pay',
            value: '60500',
            required: false,
            type: 'currency'
          },
          splitBenefitPay: {
            title: 'Split benefit pay',
            value: '0.00',
            required: false,
            type: 'currency'
          }
        }
      }
    }
  },
  v3t3: {
    user: {
      name: 'Sam Taylor (Manager)',
      navigation: {
        items: [
          { text: "Outstanding", href: "/v3/type-3/batch/outstanding" },
          { text: "Awaiting approval", href: "/v3/type-3/batch/awaitingApproval" },
          { text: "Rejected", href: "/v3/type-3/batch/rejected" },
          { text: "Completed", href: "/v3/type-3/batch/completed" },
          { text: "Find a pensioner", href: "/v3/type-3/search" }
        ]
      }
    },
    tags: {
      // batch tags
      1: { name: 'Sent for approval', colour: 'green' },
      2: { name: 'Awaiting approval', colour: 'green' },
      3: { name: 'Outstanding records', colour: 'orange' },
      4: { name: 'Ready to submit', colour: 'blue'},
      5: { name: 'Sent to print', colour: 'green'},
      6: { name: 'Rejected', colour: 'red'},
      // record tags
      7: { name: 'Invalid data', colour: 'orange' },
      8: { name: 'Data complete', colour: 'blue' },
      9: { name: 'Rejected', colour: 'red'},
      10: { name: 'Cannot be processed', colour: 'grey' },
      11: { name: 'Excluded', colour: 'red' },
      12: { name: 'Sent to print', colour: 'green'}
    },
    batches: {
      outstanding: {
        title: "Outstanding batches",
        items: {
          1: {name: 'Batch 001', date: '2025-09-27T11:08', count: 328, tag: 3 },
          2: {name: 'Batch 002', date: '2025-09-26T14:22', count: 145, tag: 3 },
          3: {name: 'Batch 003', date: '2025-09-25T09:15', count: 289, tag: 3 },
          4: {name: 'Batch 004', date: '2025-09-24T16:45', count: 512, tag: 3 },
          5: {name: 'Batch 005', date: '2025-09-23T10:30', count: 76, tag: 3 }
        }
      },
      awaitingApproval: {
        title: "Batches awaiting approval",
        items: {
          6: {name: 'Batch 006', date: '2025-09-22T11:08', count: 210, tag: 2 },
          7: {name: 'Batch 007', date: '2025-09-21T14:22', count: 98, tag: 2 }
        }
      },
      rejected: {
        title: "Rejected batches",
        items: {
          8: {name: 'Batch 008', date: '2025-09-20T09:15', count: 45, tag: 6 },
          9: {name: 'Batch 009', date: '2025-09-19T16:45', count: 123, tag: 6 }
        }
      },
      completed: {
        title: "Completed batches",
        items: {
          10: {name: 'Batch 010', date: '2025-09-18T10:30', count: 300, tag: 5 },
          11: {name: 'Batch 011', date: '2025-09-17T11:45', count: 150, tag: 5 },
          12: {name: 'Batch 012', date: '2025-09-16T14:00', count: 275, tag: 5  },
          13: {name: 'Batch 013', date: '2025-09-15T09:30', count: 400, tag: 5  }
        }
      }
    },
    pensioners: [
      { id: 'Tv1hWbn38UirIROgNeb4oQ', name: 'Mr J Smith', membershipNumber: '12345678', dob: '1955-06-15' },
      { id: 'Xy2jXcn49VjsJSPgOef5pR', name: 'Mrs A Johnson', membershipNumber: '87654321', dob: '1960-11-22' },
      { id: 'Yz3kYdo50WktKQTgPfg6qS', name: 'Ms L Brown', membershipNumber: '11223344', dob: '1970-03-30' },
      { id: 'Za4lZep61XluLURgQgh7rT', name: 'Mr M Taylor', membershipNumber: '44332211', dob: '1958-08-05' },
      { id: 'Ab5mAfq72YmvMVSgRhi8sU', name: 'Mrs S Wilson', membershipNumber: '55667788', dob: '1965-12-12' },
      { id: 'Bc6nBgr83ZnwNWTgSij9tV', name: 'Ms K Davis', membershipNumber: '99887766', dob: '1975-04-18' },
      { id: 'CsTfxaXmoSBybYCAvZWvfJ', name: 'Mrs A Johnson', membershipNumber: '87654321', dob: '1960-11-22' },
      { id: 'Cd7oChs94AoxOXUgTjk0uW', name: 'Mr P Moore', membershipNumber: '66778899', dob: '1952-09-09' },
      { id: 'De8pDit05BpyPYVhUkl1vX', name: 'Mrs R Jackson', membershipNumber: '33445566', dob: '1968-01-25' },
      { id: 'Ef9qEju16CqzQZWjVlm2wY', name: 'Ms T White', membershipNumber: '22113344', dob: '1972-07-14' },
      { id: 'Fg0rFkv27Dr0RAXkWmn3xZ', name: 'Mr G Harris', membershipNumber: '44556677', dob: '1959-10-03' },
      { id: 'Gh1sGlw38Es1SBYlXno4y0', name: 'Mrs L Martin', membershipNumber: '77889900', dob: '1963-05-21' }
    ],
    pensioner: {
      name: 'Mr J Smith',
      membershipNumber: '12345678',
      dob: '1955-06-15'
    },
    record: {
      address: {
        title: 'Address',
        id: 'address',
        items: {
          line1: {
            title: 'Line 1',
            value: '123 Example Street',
            required: true,
            type: 'text'
          },
          line2: {
            title: 'Line 2',
            value: 'Example District',
            required: false,
            type: 'text'
          },
          line3: {
            title: 'Line 3',
            value: '',
            required: false,
            type: 'text'
          },
          line4: {
            title: 'Line 4',
            value: 'Exampletown',
            required: false,
            type: 'text'
          },
          line5: {
            title: 'Line 5',
            value: '',
            required: false,
            type: 'text'
          },
          addresseeName: {
            title: 'Addressee name',
            value: 'Mr J Smith',
            required: true,
            type: 'text'
          },
          postcode: {
            title: 'Postcode',
            value: 'EX4 3PL',
            required: true,
            type: 'text'
          },
          country: {
            title: 'Country',
            value: 'United Kingdom',
            required: true,
            type: 'text'
          }
        }
      },
      schemeDetails: {
        title: 'Scheme details',
        id: 'schemeDetails',
        items: {
          legacyScheme: {
            title: 'Legacy scheme',
            value: '1955',
            required: true,
            type: 'text'
          },
          protectionType: {
            title: 'Protection type',
            value: 'full',
            required: false,
            type: 'text'
          }
        }
      },
      currentLegacySchemeBenefit: {
        title: 'Current legacy scheme benefit',
        id: 'currentLegacySchemeBenefit',
        items: {
          reasonForRetirement: {
            title: 'Reason for retirement',
            value: '',
            required: true,
            type: 'text',

            error: 'Reason for retirement cannot be blank'
          },
          pension: {
            title: 'Pension',
            value: '',
            required: true,
            type: 'currency',

            error: 'Pension must be a valid amount'
          },
          lumpSum: {
            title: 'Lump sum',
            value: '198373.98',
            required: false,
            type: 'currency',
            warning: 'Lump sum should be less than £120,000'
          },
          adultDependantPension: {
            title: 'Adult dependant pension',
            value: '0.00',
            required: false,
            type: 'currency'
          },
          payableDate: {
            title: 'Payable date',
            value: '2025-09-27',
            required: false,
            type: 'date',
            error: 'Payable date must be a valid date'
          },
          deemedDate: {
            title: 'Deemed date',
            value: '2025-09-27',
            required: false,
            type: 'date'
          },
          benefitScheme: {
            title: 'Benefit scheme',
            value: '',
            required: true,
            type: 'text'
          },
          commutationType: {
            title: 'Commutation type',
            value: 'maximum',
            required: false,
            type: 'text'
          },
          commutationAmount: {
            title: 'Commutation amount',
            value: '198373.98',
            required: false,
            type: 'currency'
          },
          LTABCEDate: {
            title: 'LTA BCE date',
            value: '2025-09-27',
            required: false,
            type: 'date'
          },
          LTA: {
            title: 'LTA',
            value: '1073100',
            required: false,
            type: 'currency'
          },
          trivialLumpSumTaxable: {
            title: 'Trivial lump sum taxable',
            value: '0.00',
            required: false,
            type: 'currency'
          },
          trivialLumpSumTaxFree: {
            title: 'Trivial lump sum non-taxable',
            value: '0.00',
            required: false,
            type: 'currency'
          },
          ageAtPayable: {
            title: 'Age at payable date',
            value: '',
            required: true,

            type: 'number',
            error: 'Age at payable date must be a number between 55 and 75'
          }
        }
      },
      optionALegacySchemeBenefit: {
        title: 'Option A legacy scheme benefit',
        id: 'optionALegacySchemeBenefit',
        items: {
          reasonForRetirement: {
            title: 'Reason for retirement',
            value: 'Age',
            required: true,
            type: 'text'
          },
          pension: {
            title: 'Pension',
            value: '19837.98',
            required: true,
            type: 'currency'
          },
          lumpSum: {
            title: 'Lump sum',
            value: '198373.98',
            required: false,
            type: 'currency'
          },
          adultDependantPension: {
            title: 'Adult dependant pension',
            value: '',
            required: true,
            type: 'currency',

            error: 'Dependant pension should be greater than 50% of lump sum'
          },
          payableDate: {
            title: 'Payable date',
            value: '2025-09-27',
            required: false,
            type: 'date'
          },
          deemedDate: {
            title: 'Deemed date',
            value: '2025-09-27',
            required: false,
            type: 'date'
          },
          benefitScheme: {
            title: 'Benefit scheme',
            value: '1955',
            required: true,
            type: 'text'
          },
          commutationType: {
            title: 'LTA BCE date',
            value: '2018-04-05',
            required: false,
            type: 'date'
          },
          pensionablePay: {
            title: 'Pensionable pay',
            value: '550000000',
            required: false,
            type: 'currency',
            warning: 'Pensionable pay should be between £10,000 and £120,000'
          },
          ageAtPayable: {
            title: 'Age at payable date',
            value: '70',
            required: true,
            type: 'number'
          },
          reckonableMembership: {
            title: 'Reckonable membership',
            value: '109-10',
            required: false,
            type: 'daysAndYears'
          },
          dynamisingPay: {
            title: 'Dynamising pay',
            value: '60500',
            required: false,
            type: 'currency'
          },
          splitBenefitPay: {
            title: 'Split benefit pay',
            value: '0.00',
            required: false,
            type: 'currency'
          }
        }
      }
    }
  }
}
