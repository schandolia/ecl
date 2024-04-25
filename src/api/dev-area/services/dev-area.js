'use strict';

/**
 * dev-area service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dev-area.dev-area');
