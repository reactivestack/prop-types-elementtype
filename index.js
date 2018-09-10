// Polyfill until https://github.com/facebook/prop-types/pull/211 is merged
// and you can use PropTypes.elementType
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./production');
} else {
  module.exports = require('./development');
}