describe('Validate Elements properties', () => {

    it('1 - Should check the elements properties', async () => {
        await browser.url('https://practicetestautomation.com/practice-test-login/');
        let username = await $('username').isDisplayed();
        console.log('isDisplayed ? ', username);
        let enable = await $('password').isEnabled();
        console.log('isEnabled ? ', enable);
        let selected = await $('submit').isSelected();
        console.log('isSelected ? ', selected);
        let exist = await $('submit').isExisting();
        console.log('isExisting ? ', exist);
    });

});