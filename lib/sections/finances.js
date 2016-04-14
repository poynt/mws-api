'use strict';

const _ = require('lodash');
const Enum = require('../enum');

const requestDefaults = {
    name: 'Finances',
    group: 'Finances',
    path: '/Finances/2015-05-01',
    version: '2015-05-01'
};

const enums = {
    ItemConditions: function () {
        return new mws.Enum(['New', 'Used', 'Collectible', 'Refurbished', 'Club']);
    }
};

const requests = {
    GetServiceStatus: {},

    ListFinancialEventGroups: {
        params: {
            MaxResultsPerPage: {},
            FinancialEventGroupStartedAfter: { required: true, type: 'Timestamp' },
            FinancialEventGroupStartedBefore: { type: 'Timestamp' }
        }
    },

    ListFinancialEventGroupsByNextToken: {
        params: {
            NextToken: { required: true }
        }
    },

    ListFinancialEvents: {
        params: {
            MaxResultsPerPage: {},
            AmazonOrderId: { name: 'AmazonOrderId' },
            FinancialEventGroupId: { name: 'FinancialEventGroupId' },
            PostedAfter: { type: 'Timestamp' },
            PostedBefore: { type: 'Timestamp' }
        }
    },

    ListFinancialEventsByNextToken: {
        params: {
            NextToken: { required: true }
        }
    }
};

module.exports = {
    enums,
    requestDefaults,
    requests
};