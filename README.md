# MAILER

### This project was inspired by the spirit of automation.
So i wanted to send mail to different people who registered for a study groups in my Developer Student clubs.
There are 8 different study groups, each having its information (whatapp group link).I dont want to send one after the other because i have up to 70 entries.

I downloaded the csv file from google slides(as the entries were gotten from using google forms). 
Converted to Array of objects 
mapped out the each users email, name, and study group they registerd.
There was an HTML template designed @Robogeek95 so i wanted to send this mail with contents specified for each user.
I used nodemailer to send the mail.


ALL I WANTED TO DO WAS AUTOMATE THE PROCESS.

This works fine but i had an issue with SMTP server for the mail, I used gmail, but gmail doesnt allow me to send multiple within a specific time i guess.

A solution for that might be to use MESSAGE QUEUE, but i recently just cjecked it out and i dont know how to apply the knowledge to this problem yet.

## CONTRIBUTE
 Fork the project and send a PR i will definately check and approve it

## Mail screenshot
![screenshot](https://github.com/phawazzzy/AUTO-MAILER/blob/main/studygroup%20template.jpeg)
