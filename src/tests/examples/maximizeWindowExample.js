describe('show maximizeWindow function', () => {

    before((browser, done) => {
        done();
    });

    after((browser, done) => {
        browser.end(() => {
            done();
        });
    });

    it('should set browser window to fullscreen', (browser) => {
        browser
            .url('http://www.polish.hostelworld.com/')
            .maximizeWindow()
            .pause(2000);
    });
});
