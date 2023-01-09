describe('Validate Window Handlers', () => {
    it('1 - Should have the right title', async () => {
        await browser.url('https://webdriver.io');
        console.log('Title of the page is: ', await browser.getTitle());
        console.log('Browser session ID is: ', await browser.getWindowHandle());
        await browser.createWindow('window');
        console.log('Multiple windows present: ', await browser.getWindowHandles());
        let handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[1]);
        console.log('Browser session ID after switch: ', await browser.getWindowHandle());
        await browser.closeWindow();
        console.log('Window closed');
        console.log('Browser session ID after close window: ', await browser.getWindowHandles());
    });
});