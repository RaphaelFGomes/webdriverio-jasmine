describe('Validate Browser navigation', () => {

    it('1 - Should navigate', async () => {
        await browser.url('https://webdriver.io');
        console.log('My current URL is: ', await browser.getUrl());
        await browser.navigateTo('https://www.google.com');
        console.log('My current URL is: ', await browser.getUrl());
        await browser.back();
        console.log('My current URL is: ', await browser.getUrl());
        await browser.forward();
        console.log('My current URL is: ', await browser.getUrl());
        await browser.refresh();
        console.log('Page refrehed successfully ...');
    });

});