'use strict';

/**
 * user-schema service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-schema.user-schema');
