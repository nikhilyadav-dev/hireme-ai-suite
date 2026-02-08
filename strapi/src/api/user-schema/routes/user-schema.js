'use strict';

/**
 * user-schema router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::user-schema.user-schema');
