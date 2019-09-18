const assert = require('assert');
const app = require('../../src/app');

describe('\'penerbit\' service', () => {
  it('registered the service', () => {
    const service = app.service('penerbit');

    assert.ok(service, 'Registered the service');
  });
});
