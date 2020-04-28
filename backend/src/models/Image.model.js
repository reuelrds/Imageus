const mongoose = require('mongoose');

const imageSchema = mongoose.Schema({
  tags: { type: String },
  likes: { type: Number },
  photo_id: { type: String, unique: true },
  description: { type: String },
  alt_description: { type: String },
}, {
  collection: "Photo"
});

module.exports = mongoose.model("Image", imageSchema);