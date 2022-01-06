'use strict';

/**
 * stand service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::stand.stand');
