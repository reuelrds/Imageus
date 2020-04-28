const config = require("./../config/var.config")
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(config.SENDGRID_API_KEY);

exports.sendEmail = (req, res, next) => {
  const msg = {
    to: 'reuel678@gmail.com',
    from: config.SENDGRID_EMAIL_ID,
    subject: 'Sending with SendGrid is Fun',
    templateId: config.SENDGRID_TEMPLATE_ID,
    dynamic_template_data: false
  };
  sgMail.send(msg);
  console.log("Done")
  res.send("Email sent");
};