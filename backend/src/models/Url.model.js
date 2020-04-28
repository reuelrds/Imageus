const mongoose = require('mongoose');

const urlSchema = mongoose.Schema({
  raw: { type: String },
  full: { type: String },
  small: { type: String },
  thumb: { type: String },
  url_id: { type: String, unique: true },
  regular: { type: String },
  image_id: { type: String, unique: true },
}, {
  collection: "Url"
});

module.exports = mongoose.model('Url', urlSchema);