describe( "open page", (browser) => {

    before((browser, done) => {
        done();
    });

    after((browser, done) => {
      done();
      browser.end();
    })

    it('should open startup page', (browser) => {
        browser.url("https://www.google.com/");
        browser.pause(3000);
    });
});
