describe('Validate timeouts', () => {
    it('1 - Should return and set timeouts', async () => {
        await browser.url('https://webdriver.io');
        console.log('Time out returned as: ', await browser.getTimeouts());

        await browser.setTimeout({
            'pageLoad': 10000,
            'script': 60000
        });
        console.log('Time out returned after set: ', await browser.getTimeouts());
    });
});