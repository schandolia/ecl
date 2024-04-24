'use strict';

/**
 * development-area router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::development-area.development-area');
