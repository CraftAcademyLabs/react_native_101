describe('Application', () => {
  beforeEach(async () => {
    try {
      await element(by.label('Allow')).atIndex(1).tap()
    }
    catch (e) { }
  });

  it('is expected to display location information', async () => {
    let expectedText = 'Göteborg'
    await waitFor(element(by.id('locationInfo'))).toBeVisible().withTimeout(2000);
    await expect(
      element(by.id('locationInfo'))
    ).toHaveLabel(expectedText);
  });

  it('is expected to display weather information', async () => {
    let expectedText = '12℃'
    await waitFor(element(by.id('weatherInfo'))).toBeVisible().withTimeout(2000);
    await expect(
      element(by.id('weatherInfo'))
    ).toHaveLabel(expectedText);
  });

});
