var express = require('express');
var router = express.Router();
const csvToJson = require("csvtojson");
const Details = require("../model/details");

const { generateMailForSignup } = require("../emailService/mailer");
const mailer = require("../emailService/mailhelper")
const csvFilePath = "/home/phawazzzy/Documents/projects/DSCMAILER/studygrop.csv"
const checkTrack = (track) => {
  if (track == "Frontend web development") {
    return "https://chat.whatsapp.com/Is393RqDf8oCUavQE460QB"
  } else if (track == "Backend Technologies with NodeJS") {
    return "https://chat.whatsapp.com/IVgSX0WVdjkH3a8k1DoVtn"

  } else if (track == "Android (Kotlin)") {
    return "https://chat.whatsapp.com/IkoWQkpwiV94C0EsBwIbwh"

  } else if (track == "Flutter") {
    return "https://chat.whatsapp.com/F5uhk59gUep9ttPKk4wbAP"

  } else if (track == "Google Cloud Technologies") {
    return "https://chat.whatsapp.com/JuIQGcodXU10LmuPl37LF8"

  } else if (track == "Backend Technologies with Python (Django)") {
    return "https://chat.whatsapp.com/DUNV5FsGW434erKBAt0MzH"

  } else if (track == "Software Testing") {
    return "https://chat.whatsapp.com/G7nuQopxYVXJHWyChE2ekT"

  } else {
    return "https://chat.whatsapp.com/FV4AG973vbSCNiR0k76Rh7"

  }
}


function operation() {
  // get the entries from csv file
  const jsonArray = await csvToJson().fromFile(csvFilePath);
  // map out the needed info
  const payload = jsonArray.map((doc) => {
    return {
      email: doc.Email,
      studygroup: checkTrack(doc.track),
      studygroupName: doc.track,
      Fullname: doc.FullName,
    }
  });
  console.log(payload);

  // populate the DB with the info
  await Details.create(payload)
}


// route to send the mail
router.get('/', async (req, res, next) => {
  try {
    // get the info from DB
    const all = await Details.find()
    console.log(all)

    // Loop through the info
    for (let i = 0; i < all.length; i++) {
      // console.log("hi",all[i])
      // this was intended to buy time for mailing service to rest for 3mins after sending a mail
      setInterval(async () => {
        console.log("waiting......")
        // get on user info
        const all2 = await Details.findOne({ email: all[i].email });
        console.log(all2)

        // populate the person info into the mail
        const options = {
          receiver: all2.email,
          subject: "CONGRATULATIONS!!!, you are in",
          text: "you have been accepted in for the study group",
          output: generateMailForSignup(all2.studygroup, all2.Fullname, all2.studygroupName)
        };

        let mail = await mailer(options);
        if (mail === "Mail sent") console.log("mail sent")
      }, 3 * 60 * 1000)

    }
    return res.status(200).json({ response: "Success" })

  } catch (error) {
    return res.status(500).json({ error })
  }

});

module.exports = router;
