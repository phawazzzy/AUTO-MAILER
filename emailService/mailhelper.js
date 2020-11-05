/* eslint-disable no-console */
const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");

const {
    MAIL_FROM_ADDRESS, MAIL_USERNAME
} = process.env;

const mailingService = async (options) => {
    const mailer = await nodemailer.createTransport(smtpTransport({
        pool: true,
        maxConnection: 10,
        maxMessaes:5,
        service: "gmail",
        host: "smtp.gmail.com",
        auth: {
            user: "dsclasu@gmail.com", // gmail created just for testing purposes
            pass: "DSCLASU2020" // for testing purposes
        }
    }));

    const mailOptions = {
        from: "dsclasu@gmail.com",
        to: Array.isArray(options.receiver) ? options.receiver.join() : options.receiver,
        subject: options.subject,
        text: options.text,
        html: options.output
    };
    // NOTE!!!
    //  this is for any developer in the future, info is the second parameter of the callback
    //  after error, i had to remove it since i wasnt using it currently to fix some codacy issue
        await mailer.sendMail(mailOptions, (error) => {
            // console.log(mailOptions);
            if (error) {
                throw error;
                // console.log(error);
            }
            console.log("mail sent");
            return "Mail sent";
        });

            

};

module.exports = mailingService;
