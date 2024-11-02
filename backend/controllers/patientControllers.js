const asyncHandler = require("express-async-handler");
const generateToken = require("../config/generateToken");
const Patient = require("../Models/userModel");





const registerPatient = asyncHandler(async (req, res) => {
 
  const { name, email,phnumber,age,sex,password, pic } = req.body;

  if (!name || !email || !password ) {
    res.status(400);
    throw new Error("Please Enter all the Feilds");
  }
   
  const userExists = await Patient.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await Patient.create({
    name,
    email,
    phnumber,
    age,
    sex,
    password,
    pic,
  });

 
   
  
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      age:user.age,
      sex:user.sex,
      pic: user.pic,
      token:generateToken(user.id),
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
});


const authPatient = asyncHandler(async (req, res) => {
  // console.log("request aa gyii ");
  const { email, password } = req.body;
  
  const user = await Patient.findOne({ email });
  // console.log(user);

  if (user && (await user.matchPassword(password))) {
   
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      phnumber:user.phnumber,
      pic: user.pic,
      token: generateToken(user.id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

const authDctrPatient = asyncHandler(async (req, res) => {
  
  const { search} = req.body;
  // console.log(search);
  let email = 'Guest@gmail.com';
  
  try{
    const user = await Patient.find({name : search});
    if(user){
    res.json(user);
  }else{
    console.log("no user find");
  }

  }catch(err){
         
         console.log(err);
         res.status(402).json("error");
  }
  });

  const getInfo = asyncHandler(async (req, res) => {
    console.log("request aa gyii in getinfo  ");
    const userId = req.params.userId;
    console.log(userId);

    
    const user = await Patient.findById(userId);
    // console.log(user);
 
  
    if (user ) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        phnumber:user.phnumber,
        pic: user.pic,
      });
    } else {
      res.status(401);
      throw new Error("Invalid");
    }
  });


module.exports = {  registerPatient,authDctrPatient, authPatient ,getInfo};
// install npm i express-async-handler 