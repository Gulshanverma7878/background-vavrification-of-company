const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port:587,
  secure: false,
  auth: {
    user: "gamerronak9@gmail.com",
    pass: "dhjq cche edjn fcto",
  },
});

// Optional: Verify the connection configuration
transporter.verify((error, success) => {
  if (error) {
    console.log("Error:", error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

module.exports = transporter;