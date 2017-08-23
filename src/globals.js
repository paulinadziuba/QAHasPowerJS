import chromedriver from 'chromedriver';
import faker from 'faker';

module.exports = {

    faker,

    before (done) {
        chromedriver.start();
        done();
    },

    after (done) {
        chromedriver.stop();
        done();
    },

    beforeEach (done) {
        done();
    },

    afterEach (done) {
        done();
    },
};
