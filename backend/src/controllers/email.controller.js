const config = require("./../config/var.config");
const sgMail = require("@sendgrid/mail");

const _ = require("lodash");

const Image = require("./../models/Image.model");
const Url = require("./../models/Url.model");
const User = require("./../models/User.model");

exports.sendEmail = async (req, res, next) => {
  email = req.body.email;
  ids = req.body.ids;

  if (config.USE_SENDGRID  === "false") {
    return res.status(200).send({
      message: "Couldn't send the E-Mail. SendGrid API Key not available"
    });
  }

  try {
    let imageData = await Image.find(
      { photo_id: { $in: ids } },
      "photo_id description alt_description"
    ).sort("photo_id");

    let urlData = await Url.find(
      { photo_id: { $in: ids } },
      "photo_id thumb"
    ).sort("photo_id");

    let userData = await User.find(
      { photo_id: { $in: ids } },
      "photo_id name"
    ).sort("photo_id");

    const data = _.zipWith(imageData, urlData, userData, (image, url, user) => {
      return {
        alt_description: image.alt_description,
        description: image.description,
        name: user.name,
        photo_id: image.photo_id,
        thumb: url.thumb,
      };
    });

    template_data = {
      photos: data,
    };

    const msg = {
      to: email,
      from: config.SENDGRID_EMAIL_ID,
      templateId: config.SENDGRID_TEMPLATE_ID,
      dynamic_template_data: template_data,
    };

    sgMail.setApiKey(config.SENDGRID_API_KEY);
    sgMail.send(msg);

    res.status(200).json({
      message: "E-mail Sent",
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });

    console.log(error);
  }
};
