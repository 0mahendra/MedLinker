const asyncHandler = require("express-async-handler");
// const User = require("../Models/userModel");

const generateToken = require("../config/generateToken");

const Med = require("../Models/MedModel");

 // to get request  
const authReq = asyncHandler (async(req,res)=>{
  const {email} = req.body;
  // console.log("request is called");
//  console.log(email);


try {
  
  const doctors = await Med.find({emailD : email});
  // console.log(doctors);
  if (doctors.length <= 0) {
   
    console.log('No doctors found');
    // Send an appropriate response if no request found
    res.status(404).json({ message: 'No Request found' });
      
    };
  
    // send this request 
    res.json(doctors);
 
} catch (error) {
  console.error('Error finding doctors:', error);
  // Send an error response if an error occurs during the query process
  res.status(500).json({ error: 'Internal server error' });
}

})

 const medRegistration = asyncHandler(async (req, res) => {
   const {
     nameP,
     emailP,
     userId,
     phnumber,
     problem,
     dctrtype,
     deciInfo,
     deciTime,
     serverity,
     prevDctr,
     nameD,
     emailD,
     pic,
   } = req.body;
 
   // Validate required fields
   if (!nameP || !emailP) {
     return res.status(400).json({ message: "Please enter your name and email." });
   }
 
   // Check if both emailP and emailD already exist
   const userExists = await Med.findOne({
     $and: [{ emailP }, { emailD }] // Check if both emailP and emailD exist
   });
 
   if (userExists) {
     return res.status(400).json({ message: "Your request already exists, please wait." });
   }
 
   // Create a new user record
   const user = await Med.create({
     nameP,
     emailP,
     userId,
     phnumber,
     problem,
     dctrtype,
     deciInfo,
     deciTime,
     serverity,
     prevDctr,
     nameD,
     emailD,
     pic,
   });
 
   // Respond with the user details if registration is successful
   if (user) {
     return res.status(201).json({
       _id: user._id,
       userId: userId,
       name: user.nameP, // Corrected to user.nameP for proper reference
       email: user.emailP, // Corrected to user.emailP for proper reference
       phnumber: phnumber,

     });
   } else {
     return res.status(400).json({ message: "User not found." });
   }
 });
 
 module.exports = { medRegistration };
 

const dropRequest = asyncHandler(async (req, res, next) => {
  const { patientId } = req.body;
  try {
    // Check if a chat between the doctor and patient already exists
    const chat = await Med.findOneAndDelete({  "_id": patientId});

    
   
    res.json("This request is Deleted");
  } catch (error) {
    console.error('Error deleting this chat:', error);
    next(error);

  }
});

const authIdMed = asyncHandler(async (req, res) => {
  // console.log("request aa gyii  authId inmed");
  const { patientId1} = req.body;
  // console.log(patientId1);
  
  try{
    const user = await Med.findById(patientId1);
    // console.log(user);
  
    res.json({
      _id: user._id,
      nameP: user.nameP,
      emailP: user.emailP,
      emailD:user.emailD,
      nameD :user.nameD,
      pic: user.pic,
    });

  }catch(err){
         console.log(err);
  }
  });


module.exports = {medRegistration ,authReq ,authIdMed,dropRequest};