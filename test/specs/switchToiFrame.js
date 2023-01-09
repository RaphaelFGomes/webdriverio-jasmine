describe('Validate Switch to iFrame', () => {
    it('1 - Should switch to iframe', async () => {
        await browser.url('https://webdriver.io');
        await browser.switchToFrame('docusaurus_skipToContent_fallback"]/main/section[3]/div/div/div[1]/iframe');
        await browser.pause(10000);
    });
});