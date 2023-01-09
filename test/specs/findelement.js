describe('Validate Find Element', () => {
    it('1 - Should find the elements', async () => {
        await browser.url('https://testrigor.com/blog/how-to-automate-testing-tables/');
        let tableObj = await browser.findElement('xpath', '//*[@id="content"]/div[2]/div[2]/div/div[4]/table');
        console.log('Table obj is: ', tableObj);
        let tableColumns = await browser.findElements('xpath', '//*[@id="content"]/div[2]/div[2]/div/div[4]/table/tbody/tr/td');
        console.log('Table column is: ', tableColumns);
        let struct = await browser.findElementsFromElement(tableObj.toString(), 'xpath', '//thead/tr/td[1]');
        console.log('Text returned as: ', struct.getText());
    });
});