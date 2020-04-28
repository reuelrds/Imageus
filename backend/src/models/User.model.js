const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

  name: { type: String },
  link: { type: String },
  user_id: { type: String, unique: true },
  image_id: { type: String, unique: true },
  username: { type: String },
  profile_image: { type: String },

}, {
  collection: "User"
});

module.exports = mongoose.model('User', userSchema);