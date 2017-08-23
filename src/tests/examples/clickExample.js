describe('show click function', () => {
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

    it('should click \'Chodzmy\' button', (browser) => {
        mainPage = browser.page.mainPage();
        browser.url('http://www.polish.hostelworld.com/')
        mainPage.waitForElementVisible('@homeSearch', 5000);
        mainPage.click('@searchButton');
        browser.pause(2000);
    });
});
