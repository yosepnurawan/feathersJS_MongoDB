const assert = require('assert');
const app = require('../../src/app');

describe('\'buku\' service', () => {
  it('registered the service', () => {
    const service = app.service('buku');

    assert.ok(service, 'Registered the service');
  });
});
