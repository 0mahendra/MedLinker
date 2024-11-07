const asyncHandler = require("express-async-handler");
const generateToken = require("../config/generateToken");

const Dctr = require("../Models/DctrModel");

const allDctr = asyncHandler (async(req,res)=>{
  // console.log("request is called");
  var doctorsData =[];
try {
  
  const doctors = await Dctr.find({});
  if (doctors.length > 0) {
   
    doctorsData = doctors.map(doctor => ({
      id: doctors._id,
      name: doctors.name,
      phnumber:doctors.phnumber,
      qualification: doctors.qualification,
      mproficiency:doctors.mproficiency,
      
      
    }));
    res.json(doctors);
  } else {
    res.status(404).json({ message: 'No doctors found' });
  }
} catch (error) {
  console.error('Error finding doctors:', error);

  res.status(500).json({ error: 'Internal server error' });
}

})
const registerDctr = asyncHandler(async (req, res) => {
  const { name, email,phnumber,password, pic,qualification ,mproficiency } = req.body;

  if (!name || !email || !password ) {
    res.status(400);
    throw new Error("Please Enter all the Feilds");
  }
   
  const userExists = await Dctr.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }
  const rating = 1400;

  const user = await Dctr.create({
    name,
    email,
    phnumber,
    password,
    rating,
    pic,
    qualification,
    mproficiency,
  });
 

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      age:user.age,
      sex:user.sex,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
});

const authDctr = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
  
    const user = await Dctr.findOne({ email });

  
    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        pic: user.pic,
        token: generateToken(user._id),
      });
    } else {
      res.status(401);
      throw new Error("Invalid Email or Password");
    }
  });

  const authIdDctr = asyncHandler(async (req, res) => {
   
    const { userId1 } = req.body;
 
    try{
    const user = await Dctr.findById(userId1);
    
  
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token: generateToken(user._id),
    });

  }catch(err){
         console.log(err);
  }
  });

  const getInfo = asyncHandler(async (req, res) => {
    const userId = req.params.dctrId;
    console.log(userId);

    
    const user = await Dctr.findById(userId);
 
  
    if (user ) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        phnumber:user.phnumber,
        pic: user.pic,
        token: generateToken(user._id),
      });
    } else {
      res.status(401);
      throw new Error("Invalid");
    }
  });


module.exports = { registerDctr, authDctr,authIdDctr,allDctr ,getInfo};
