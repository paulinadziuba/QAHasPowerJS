/*
 * Dynamically override nightwatch.json config for BrowserStack.
 */

require('babel-core/register');
var _ = require('lodash');

module.exports = (function(settings) {
    if (process.env.RUN_ON_BSTACK != 'true') {
        return settings;
    }

    var host = 'hub-cloud.browserstack.com';
    var port = 80;
    var globals = settings['test_settings']['default']['globals'];
    var test_runner = settings['test_settings']['default']['test_runner'];
    // Blank all the defaults BrowserStack doesn't like
    settings['test_settings']['default'] = {
	test_runner: test_runner,
        desiredCapabilities: {},
        globals: globals
    };

    ci_settings = {
        selenium: {
            start_process: false,
            host: host,
            port: port
        },
        test_settings: {
            default: {
                selenium_host: host,
                selenium_port: port,
                desiredCapabilities: {
                    os: 'windows',
                    os_version: '10',
                    browser: 'chrome',
                    build: (process.env.CIRCLE_BRANCH || 'master') + '#' + (process.env.CIRCLE_BUILD_NUM || ''),
                    project: process.env.CIRCLE_PROJECT_REPONAME || 'root',
                },
                globals: {
                    waitForConditionTimeout: 20000,
                    longWaitForCondition: 30000
                }
            }
        }
    };
    _.merge(settings, ci_settings);

    return settings;
})(require('./nightwatch.json'));
