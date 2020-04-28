// Configuration File: It Contains values for various variables
const dotenv = require("dotenv");

dotenv.config();

const config = {
  PORT: process.env.PORT || "3000",
  mongodb: {
    url: `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB}`,
  },
  SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
  SENDGRID_EMAIL_ID: process.env.SENDGRID_EMAIL_ID,
  SENDGRID_TEMPLATE_ID: process.env.SENDGRID_TEMPLATE_ID
};

module.exports = config;
