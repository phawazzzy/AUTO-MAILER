# MAILER

### This project was inspired by the spirit of automation.
So i wanted to send mail to different people who registered for a study groups in my Developer Student clubs.
There are 8 different study groups, each having its information (whatapp group link).I dont want to send one after the other because i have up to 70 entries.

I downloaded the csv file from google slides(as the entries were gotten from using google forms). 
Converted to Array of objects 
mapped out the each users email, name, and study group they registerd.
There was an HTML template designed [@Robogeek95](https://github.com/Robogeek95) so i wanted to send this mail with contents specified for each user.
I used nodemailer to send the mail.


ALL I WANTED TO DO WAS AUTOMATE THE PROCESS.

## Current Issue
This works fine but i had an issue with SMTP server for the mail, I used gmail, but gmail doesnt allow me to send multiple within a specific time i guess.
I was about to send up to 30+ mails out of 70

A solution for this issue might be to use MESSAGE QUEUE, but i recently just checked it out and i dont know how to apply the knowledge to this problem yet.

## CONTRIBUTE
 Your contribution is appreciated 😁

This is a Node.js project, hopefully you have Node.js installed or visit [here](https://nodejs.org/en/download/)


**Option 1 - Simple Typo Fixes**
For small issues, like a typo or broken link, use Github's inline file editor to make the fix and submit a pull request.

**Option 2 - Work on your own Fork**
For more complex contributions, new features or issue, you should work on the project on your local system

###### First, fork your copy of this repo on Github and clone it.

```terminal
git clone <your-forked-repo>
```

###### install your dependencies, and start your node server
```terminal
npm install
npm run dev
```

###### Send us your fix
```terminal
git checkout -b my-fix
# fix some code...

git commit -m "fix: corrected a typo"
git push origin my-fix
```
Lastly, open a pull request on Github. Once merged, your changes will automatically become live 🚀

Gracies
## Mail screenshot
![screenshot](https://github.com/phawazzzy/AUTO-MAILER/blob/main/studygroup%20template.jpeg)
