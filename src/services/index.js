const buku = require('./buku/buku.service.js');
const penerbit = require('./penerbit/penerbit.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(buku);
  app.configure(penerbit);
};
