import chromedriver from 'chromedriver';
import faker from 'faker';

module.exports = {

    faker,

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
