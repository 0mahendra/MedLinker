const asyncHandler = require("express-async-handler");
// const User = require("../Models/userModel");

const generateToken = require("../config/generateToken");

const Dctr = require("../Models/DctrModel");


const updateDctr = asyncHandler(async(res,req)=>{
  // console.log("update request is called");
  const { email , qualification } = req.body;
  Dctr.updateOne(
    // Filter criteria (e.g., find a doctor by their name)
    { email: email },
    // Update operation (set the new value for the field you want to update)
    { $set: { qualification: 'Updated Specialty' } }
  )
  .then((result) => {
    console.log('Update result:', result);
  })
  .catch((error) => {
    console.error('Error updating document:', error);
  });
   
})
const allDctr = asyncHandler (async(req,res)=>{
  // console.log("request is called");
  var doctorsData =[];


try {
  
  const doctors = await Dctr.find({});
  // console.log(doctors);
  if (doctors.length > 0) {
    // Store doctors' information in the data object
    doctorsData = doctors.map(doctor => ({
      id: doctors._id,
      name: doctors.name,
      phnumber:doctors.phnumber,
      qualification: doctors.qualification,
      mproficiency:doctors.mproficiency,
      
      
    }));
    // console.log('Doctors found:', doctorsData);
    // Send the data object as a response to the frontend
    res.json(doctors);
  } else {
    // console.log('No doctors found');
    // Send an appropriate response if no doctors are found
    res.status(404).json({ message: 'No doctors found' });
  }
} catch (error) {
  console.error('Error finding doctors:', error);
  // Send an error response if an error occurs during the query process
  res.status(500).json({ error: 'Internal server error' });
}

})
const registerDctr = asyncHandler(async (req, res) => {
    // console.log("yes it is callled");
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

const authDctr = asyncHandler(async (req, res) => {
    // console.log("request aa gyii ");
    const { email, password } = req.body;
  
    const user = await Dctr.findOne({ email });

  
    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        pic: user.pic,
        token: generateToken(user._id),
      });
    } else {
      res.status(401);
      throw new Error("Invalid Email or Password");
    }
  });

  const authIdDctr = asyncHandler(async (req, res) => {
    // console.log("request aa gyii authIdcontroller ");
    const { userId1 } = req.body;
    // console.log(userId1);
    try{
    const user = await Dctr.findById(userId1);
    // console.log(user);
  
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
      token: generateToken(user._id),
    });

  }catch(err){
         console.log(err);
  }
  });

  const getInfo = asyncHandler(async (req, res) => {
    console.log("request aa gyii in getinfo  ");
    const userId = req.params.dctrId;
    console.log(userId);

    
    const user = await Dctr.findById(userId);
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


module.exports = { registerDctr, authDctr,authIdDctr,allDctr ,getInfo};