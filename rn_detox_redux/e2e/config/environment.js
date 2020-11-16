import { cleanup, init } from "detox";
import adapter from "detox/runners/jest/adapter";
import { reloadApp } from 'detox-expo-helpers';
import { exec } from "child-process-promise";
import mockServer from './mockServer'
let server
jest.setTimeout(120000);
jasmine.getEnv().addReporter(adapter);

beforeAll(async () => {
  server = mockServer.open(3000)
  await init()
});

beforeEach(async () => {
  await adapter.beforeEach();
  await reloadApp({
    permissions: { location: 'inuse' },
  })
  // Göteborg
  //exec('set-simulator-location -c 57.7132122 11.96223453')
  // Stenkullen
  // exec('set-simulator-location -c 57.791900 12.309550')
  // Burlington, Iowa 40.810589
  exec('set-simulator-location -c 40.810589 -91.101280')
});


afterAll(async () => {
  mockServer.close(server)
  await adapter.afterAll();
  await cleanup();
});
