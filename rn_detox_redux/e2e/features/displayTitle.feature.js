
describe('Application', () => {

  it('is expected to display title on welcome screen', async () => {
    await expect(
      element(by.label('MOBILE WEATHER')).atIndex(1)
    ).toBeVisible();
  });

  

});
