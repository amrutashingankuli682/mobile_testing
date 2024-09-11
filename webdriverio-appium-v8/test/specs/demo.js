describe('Testsuite', () => {
  it('Test', async () => {
    await driver.pause(5000)
    
  });
  
  it('Test case',async () =>{
    const app =await $('~App');
    await app.click();
    // const actionbar = await $('~Action Bar');
    // await expect(actionbar).toBeExisting();
  });
});