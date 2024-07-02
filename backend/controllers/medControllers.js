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
 // to regitor a request 
const medRegistration = asyncHandler(async (req, res) => {
    // console.log("yes it is callled");
    
   
  const { nameP, emailP,userId,phnumber,problem,dctrtype,deciInfo,deciTime,serverity,prevDctr,nameD,emailD,pic} = req.body;
  // console.log(userId);
  if (!nameP || !emailP ) {
    res.status(400);
    throw new Error("Please enter your name and email ");
  }
   
  const userExists = await Med.findOne({emailP});

  if (userExists) {
    res.status(400);
    throw new Error("your  request is  already exists please wait ");
    return;

  }
  else{

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
  // console.log(user);

  if (user) {
    res.status(201).json({
      _id: user._id,
      userId:userId,
      name: user.name,
      email: user.email,
      phnumber:phnumber,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
}
});

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
      token: generateToken(user._id),
    });

  }catch(err){
         console.log(err);
  }
  });


module.exports = {medRegistration ,authReq ,authIdMed,dropRequest};