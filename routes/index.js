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
// console.log(checkTrack())
/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    //   const jsonArray = await csvToJson().fromFile(csvFilePath);
    // const payload = jsonArray.map((doc) => {
    //   return {
    //     email: doc.Email,
    //     studygroup: checkTrack(doc.track),
    //     studygroupName: doc.track,
    //     Fullname: doc.FullName,
    //   }
    // });
    // // // console.log(payload);

    // // await Details.create(payload)

    // const array = [...payload]
    // // console.log(array);
    // console.log(array.length)

    const alll = await Details.find()
    const all = alll
    console.log(all)

    // setInterval(async() => {

    // }, 2*60*100)
    let options;
    for (let i = 0; i < all.length; i++) {
      // console.log("hi",all[i])
      setInterval(async () => {
        console.log("waiting......")
        // const all2 = await Details.findOne({ email: all[i].email });
        // console.log(all2)

        // const options = {
        //   receiver: all2.email,
        //   subject: "CONGRATULATIONS!!!, you are in",
        //   text: "you have been accepted in for the study group",
        //   output: generateMailForSignup(all2.studygroup, all2.Fullname, all2.studygroupName)
        // };
        // let mail = await mailer(options);
        // if (mail ==="Mail sent") console.log("mail sent")
      }, 1 *60 * 1000)
      //   const all2 = await Details.findOne({ email: all[i].email });
      //   console.log(all2)

      //  const options = {
      //     receiver: all2.email,
      //     subject: "CONGRATULATIONS!!!, you are in",
      //     text: "you have been accepted in for the study group",
      //     output: generateMailForSignup(all2.studygroup, all2.Fullname, all2.studygroupName)
      //   };
      // console.log("option",options);

      // // function to send the mail
      // setTimeout(async() => {
      // let mail = await mailer(options);
      // if(mail) array.pop();
      // console.log(array.length)

      // }, 3*60*1000)
      // // await mailer(options);

    }
    // res.render('index', { title: 'Express', all2 });
    return res.status(200).json({ response: "Success" })


  } catch (error) {
    return res.status(500).json({ error })
  }

});

module.exports = router;
