/*
 * Dynamically override nightwatch.json config for BrowserStack.
 */

require('babel-core/register');
var _ = require('lodash');

module.exports = (function(settings) {
    return settings;
})(require('./nightwatch.json'));
