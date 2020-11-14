import { reloadApp } from 'detox-expo-helpers';

describe('Example', () => {
  beforeEach(async () => {
    await reloadApp()
  });

  it('is expected to display title on welcome screen', async () => {
    await expect(element(by.label('Mobile Weather')).atIndex(1)).toBeVisible();
  });

});
