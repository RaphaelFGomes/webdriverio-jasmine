describe('Parent suite', () => {

    beforeAll(function() {
        console.log('In before all ...')
    });

    beforeEach(function() {
        console.log('In before each ...')
    });

    afterEach(function() {
        console.log('In after each ...')
    });

    afterAll(function() {
        console.log('In after all ...')
    });

describe('A suite 1', () => {
    it('1 - Contains spec with an expectation', async () => {
        console.log('Test step 1');
       expect(true).toBe(true);
    });

    it('2 - My test step 2', async () => {
        console.log('Test step 2');
        expect(true).toBe(true);
     });

     it('3 - My test step 3', async () => {
        expect(true).toBe(true);
     });

     it('4 - My test step 4', async () => {
        expect(true).toBe(true);
     });
});

describe('A suite 2', () => {
    it('1 - Contains spec with an expectation', async () => {
       expect(true).toBe(true);
    });

    it('2 - My test step 2', async () => {
        expect(true).toBe(true);
     });

     it('3 - My test step 3', async () => {
        expect(true).toBe(true);
     });

     it('4 - My test step 4', async () => {
        expect(true).toBe(true);
     });
});

});