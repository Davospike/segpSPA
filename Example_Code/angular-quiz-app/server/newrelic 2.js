"use strict";

exports.config = {
  app_name: ['hueapp'],
  license_key: process.env.NEW_RELIC_LICENSE_KEY,
  logging: {
    level: 'info',
    filepath: process.env.NEW_RELIC_LOG
  }
}
