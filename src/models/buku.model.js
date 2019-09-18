// buku-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const buku = new Schema({
    judul: { type: String, required: true },
    sinopsis: { type: String },
    pengarang: { type: String }
  }, {
    timestamps: true
  });

  return mongooseClient.model('buku', buku);
};
