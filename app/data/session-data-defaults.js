const { FALSE } = require("sass-embedded");

module.exports = {
  v2: {
    users: {
      type1: {
        name: 'Alex Pearson (Pension Administrator)',
        navigation: null
      }
      
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
    record: {
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
            valid: false,
            error: 'Lump sum should be less than £120,000'
          },
          adultDependantPension: {
            title: 'Adult dependant pension',
            value: '0.00',
            required: false,
            type: 'currency'
          },
          payableDate: {
            title: 'Payable date',
            value: '',
            required: true,
            type: 'date',
            valid: false,
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
            type: 'number'
          }
        }
      }
    }
  }
}