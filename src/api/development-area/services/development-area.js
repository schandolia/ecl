'use strict';

/**
 * development-area service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::development-area.development-area');
