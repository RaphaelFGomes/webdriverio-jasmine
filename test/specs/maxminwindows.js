describe('Validate Max and Min Windows', () => {
    it('1 - Should Max and Min the Window', async () => {
        await browser.url('https://webdriver.io');
        await browser.maximizeWindow();
        await browser.pause(5000);
        await browser.fullscreenWindow();
        await browser.pause(5000);
        await browser.minimizeWindow();
        await browser.pause(5000);
    });
});