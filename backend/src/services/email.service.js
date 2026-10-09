import nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

const sendContactEmail = async (contactData) => {
  const { name, email, subject, message } = contactData;
  const info = await transporter.sendMail({
    from: process.env.MAIL_USER,
    to: process.env.MAIL_USER,
    subject: `New Contact Message: ${subject}`,
    text: `
    Name: ${name}
    Email: ${email}
    Subject: ${subject}

    Message: ${message}`,
  });
  return info;
};

export default transporter;
export { sendContactEmail };
