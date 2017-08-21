var chromedriver = require('chromedriver');

module.exports = {
    before : function (done) {
        chromedriver.start();
        done();
    },

    after : function (done) {
        chromedriver.stop();
        done();
    },

    beforeEach : function (done) {
        done();
    },

    afterEach : function (done) {
        done();
    },
}
