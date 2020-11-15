import { cleanup, init } from "detox";
import adapter from "detox/runners/jest/adapter";
import { reloadApp } from 'detox-expo-helpers';
import { exec } from "child-process-promise";
// const { mockServer } = require('./mockServer')
let server
jest.setTimeout(120000);
jasmine.getEnv().addReporter(adapter);

beforeAll(async () => {
  // server = mockServer.open(3000)
  await init()
});

beforeEach(async () => {
  await adapter.beforeEach();
  // await reloadApp({
  //   permissions: { location: 'inuse' },
  // })
  exec('xcrun simctl privacy booted grant location-always host.exp.Exponent')
  await reloadApp()
  // exec('set-simulator-location -q Gothenburg, Sweden')
  exec('set-simulator-location -c 57.7132122 11.96223453')

  // await device.launchApp({
  //   permissions: { location: 'always' },
  // })
  // await reloadApp()
});


afterAll(async () => {
  // mockServer.close(server)
  await adapter.afterAll();
  await cleanup();
});
