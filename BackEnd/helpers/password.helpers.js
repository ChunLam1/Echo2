var jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const config = require("../config/auth.config");

//Generate a reset token
function generateResetToken(user) {
  var resetToken = jwt.sign({ id: user._id }, config.secret, {
    expiresIn: 864000000, // 24 hours
  });
  return resetToken;
}

async function sendResetPasswordEmail(email, resetToken) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PWD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: "Password Reset",
    text:
      "You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n" +
      "Please click on the following link, or paste this into your browser to complete the process:\n\n" +
      process.env.APP_BASE_URL +
      "/reset-password/" +
      resetToken +
      "\n\n" +
      "If you did not request this, please ignore this email and your password will remain unchanged.\n",
  };

  await transporter.sendMail(mailOptions);
}

module.exports = {
  generateResetToken,
  sendResetPasswordEmail,
};
