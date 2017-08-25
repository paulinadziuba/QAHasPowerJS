describe('show pause function', () => {

    before((browser, done) => {
        done();
    });

    after((browser, done) => {
        browser.end(() => {
            done();
        });
    });

    it('should  browser after doing a request', (browser) => {
        browser
            .url('http://www.polish.hostelworld.com/')
            .pause(2000);
    });
});
