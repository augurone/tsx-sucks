const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: 'smtp.dreamhost.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: 'no-reply@thelema.org',
        pass: '', // Use the actual password
    },
});

let mailOptions = {
    from: '"Test" <no-reply@thelema.org>',
    to: '312624@gmail.com', // Use a test Gmail address
    subject: 'Hello from Node',
    text: 'This is a test email.',
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
