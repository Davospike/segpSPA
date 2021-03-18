var base = require('./base');

if (process.argv.indexOf('dev') !== -1) {
  module.exports = Object.assign({}, base, require('./dev'));
} else {
  module.exports = Object.assign({}, base, require('./prod'));
}
