const nodemailer = require("nodemailer");
let transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'webspiderstestmeghnad',
    pass: 'test@test.com'
  }
});

const sendEmail = (email) => {
  transporter.sendMail({
    from: 'webspiderstestmeghnad@gmail.com',
    to: email ? email : 'meghnadsamaddar@gmail.com',
    subject: 'Meghnad Task!',
    text: 'hello from meghnad!'
  });
}
module.exports = { sendEmail }