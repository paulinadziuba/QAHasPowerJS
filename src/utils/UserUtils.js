class UserUtils {
    constructor (browser) {
        this.browser = browser;
    }

    fakeFirstName () {
        return this.browser.globals.faker.name.firstName();
    }

}
module.exports = UserUtils;
