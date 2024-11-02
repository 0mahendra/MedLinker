const jwt = require("jsonwebtoken");
const Patient = require("../Models/userModel");
const asyncHandler = require("express-async-handler");





const protect = asyncHandler(async (req, res, next) => {

  const authorization = req.headers.authorization;
  if(!authorization) return res.status(401).json({error : "Invalid token"});
  let token = req.headers.authorization.split(" ")[1];

  if (!token) {
    res.status(401).json({error : "Unotherized"});
    
  }

 
    try {
      
        
      
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

       req.jwtPayload =decoded;
      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
 
  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});


module.exports = { protect};
