const _ = require("lodash");

const Image = require("./../models/Image.model");
const Url = require("./../models/Url.model");
const User = require("./../models/User.model");

exports.getImages = async (req, res, next) => {
  try {
    const imageData = await Image.find();
    const urlData = await Url.find();
    const userData = await User.find();

    const data = _.zipWith(imageData, urlData, userData, (image, url, user) => {
      return {
        "alt_description": image.alt_description,
        "description": image.description,
        "full": url.full,
        "likes": image.likes,
        "link": user.link,
        "name": user.name,
        "photo_id": image.photo_id,
        "profile_image": user.profile_image,
        "raw": url.raw,
        "regular": url.regular,
        "small": url.small,
        "tags": image.tags,
        "thumb": url.thumb,
        "username": user.username,
      }
    }); 


    res.send(_.shuffle(data));
  } catch(error) {
    res.status(404).json({
      message: "User Data Not Found"
    });
  }
};