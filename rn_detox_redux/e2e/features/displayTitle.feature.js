

describe('Application', () => {
  beforeEach(async () => {
    try {
      await element(by.label('Allow')).atIndex(1).tap()
    }
    catch (e) { }
  });

  it('is expected to display th application title', async () => {
    await expect(
      element(by.label('MOBILE WEATHER')).atIndex(1)
    ).toBeVisible();
  });
});
