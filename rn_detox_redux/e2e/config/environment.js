import { cleanup, init } from "detox";
import adapter from "detox/runners/jest/adapter";
import { reloadApp } from 'detox-expo-helpers';
import MockServer from './mockServer'
import Simulator from './simulator'
// import { exec } from "child-process-promise";

let server
jest.setTimeout(120000);
jasmine.getEnv().addReporter(adapter);

beforeAll(async () => {
  await init()
  server = MockServer.open(3000)
});

beforeEach(async () => {
  await adapter.beforeEach();
  await reloadApp({
    permissions: { location: 'inuse' },
  })
  // Göteborg
  Simulator.setLocation({lat: 57.7132122, long: 11.96223453})
  // Stenkullen  57.791900 12.309550
  // Burlington, Iowa  40.810589 -91.101280
});


afterAll(async () => {
  MockServer.close(server)
  await adapter.afterAll();
  await cleanup();
  // exec(`xrun simctl shutdown ${device.id}`)
});
