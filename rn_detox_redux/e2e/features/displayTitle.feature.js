
describe('Application', () => {

  it('is expected to display title on welcome screen', async () => {
    await element(by.label('Deny')).atIndex(1).tap()
    await expect(
      element(by.label('MOBILE WEATHER')).atIndex(1)
    ).toBeVisible();
  });



});
