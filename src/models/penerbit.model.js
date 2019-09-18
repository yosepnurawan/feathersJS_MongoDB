// penerbit-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const penerbit = new Schema({
    nama_penerbit: { type: String, required: true },
    telepon: { type: String },
    alamat: { type: String }
  }, {
    timestamps: true
  });

  return mongooseClient.model('penerbit', penerbit);
};
