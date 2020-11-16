describe('Application', () => {
  beforeEach(async () => {
    try {
      await element(by.label('Allow')).atIndex(1).tap()
    }
    catch (e) { }
  });

  it('is expected to display location information', async () => {
    let expectedText = 'You are at 57.71 lat and 11.96 long'
    await waitFor(element(by.id('weatherInfo'))).toBeVisible().withTimeout(2000);
    await expect(
      element(by.id('weatherInfo'))
    ).toHaveLabel(expectedText);
  });

});
