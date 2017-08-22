import UserUtils from 'utils/UserUtils';

describe( "open page", (browser) => {
    let UserUtilsObj;

    before((browser, done) => {
        done();
    });

    afterEach((browser, done) => {
        browser.end(() => {
            done();
        });
    });
    after((browser, done) => {
        browser.end(() => {
            done();
        });
    });

    it('should open startup page', (browser) => {
        browser.url("https://www.google.com/")
            .pause(3000);
        UserUtilsObj = new UserUtils(browser);
        let randomName = UserUtilsObj.fakeFirstName();
        console.log(randomName);
    });
});
