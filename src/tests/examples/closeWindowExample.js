describe('show closeWindow function', () => {

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

    it('should close browser window', (browser) => {
        browser.url('http://www.polish.hostelworld.com/')
        browser.closeWindow();
    });
});
