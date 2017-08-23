describe('open page', () => {
    let page1;

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
        page1 = browser.page.mainPage();
        browser.url('http://www.polish.hostelworld.com/')
            .pause(3000);
        page1.waitForElementVisible('@homeSearch', 5000);
        page1.setValue('@homeSearch', 'aaa');
    });
});
