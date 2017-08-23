describe('show clear value function', () => {
    let mainPage;

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

    it('should clear entry field', (browser) => {
        mainPage = browser.page.mainPage();
        browser.url('http://www.polish.hostelworld.com/')
        mainPage.waitForElementVisible('@homeSearch', 5000);
        mainPage.setValue('@homeSearch', 'aaa');
        browser.pause(2000);
        mainPage.clearValue('@homeSearch');
        browser.pause(2000);
    });
});
