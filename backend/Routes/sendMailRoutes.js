const express = require("express");

const {sendMail}  = require("../controllers/sendMailControllers");
const router = express.Router();

console.log("request come to MedRoutes");


router.route("/").post(sendMail);



module.exports = router;