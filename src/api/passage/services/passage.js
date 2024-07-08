'use strict';

/**
 * passage service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::passage.passage');
