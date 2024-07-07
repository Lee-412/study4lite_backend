'use strict';

/**
 * student-test service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::student-test.student-test');
