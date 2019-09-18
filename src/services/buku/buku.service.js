// Initializes the `buku` service on path `/buku`
const createService = require('feathers-mongoose');
const createModel = require('../../models/buku.model');
const hooks = require('./buku.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/buku', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('buku');

  service.hooks(hooks);
};
