import { cleanup, init } from "detox";
import adapter from "detox/runners/jest/adapter";
// const { mockServer } = require('./mockServer')

let server
jest.setTimeout(120000);
jasmine.getEnv().addReporter(adapter);

beforeAll(async () => {
  // server = mockServer.open(3000)
  await init();
});

beforeEach(async () => {
  await adapter.beforeEach();
});


afterAll(async () => {
  // mockServer.close(server)
  await adapter.afterAll();
  await cleanup();
});
