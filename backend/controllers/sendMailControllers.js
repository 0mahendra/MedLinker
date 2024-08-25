const nodemailer = require("nodemailer");
const asyncHandler = require("express-async-handler");
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,

  
    auth: {
        user: 'mahendra0902001@gmail.com',
        pass: 'sbdiogeprxkvkngf'
    },
  });
  

  const sendMail = asyncHandler(async (req, res) => {
    const {name , email , msg} = req.body;
    console.log(msg);
    
    var mailOptions = {
        from :"mahendra0902001@gmail.com",
        to:"mahendra0902001@gmail.com",
        subject:name,
        text:`this mail has been send by : ${email} and the message is : ${msg}`,
    };

    transporter.sendMail(mailOptions, function(error , info){
        if(error){
            console.log(error);
        }else{
            console.log("email has been sent");
        }
    })
    res.json("msg has been send")
 
  
  });

  module.exports = {sendMail};