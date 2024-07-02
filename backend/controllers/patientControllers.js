const asyncHandler = require("express-async-handler");
// const User = require("../Models/userModel");

const generateToken = require("../config/generateToken");
const Patient = require("../Models/userModel");


const allPatient = asyncHandler(async (req, res) => {
  const keyword = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};

  const users = await Patient.find(keyword).find({ _id: { $ne: req.user._id } });
  res.send(users);
});

//@description     Register new user
//@route           POST /api/user/
//@access          Public
const registerPatient = asyncHandler(async (req, res) => {
    // console.log("yes it is callled");
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
  // console.log(user);

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      age:user.age,
      sex:user.sex,
      isAdmin: user.isAdmin,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
});

//@description     Auth the user
//@route           POST /api/users/login
//@access          Public
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
      isAdmin: user.isAdmin,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

const authDctrPatient = asyncHandler(async (req, res) => {
  // console.log("request aa gyii  authDctr");
  const { search} = req.body;
  // console.log(search);
  let email = 'Guest@gmail.com';
  
  try{
    const user = await Patient.find({name : search});
    // console.log(user);
  
    if(user){
    res.json(user);
  }else{
    console.log("no user find");
  }

  }catch(err){
         console.log(err);
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
        isAdmin: user.isAdmin,
        pic: user.pic,
        token: generateToken(user._id),
      });
    } else {
      res.status(401);
      throw new Error("Invalid");
    }
  });


module.exports = { allPatient, registerPatient,authDctrPatient, authPatient ,getInfo};
// install npm i express-async-handler 