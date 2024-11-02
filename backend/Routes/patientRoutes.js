const express = require("express");
const {
  registerPatient,
  authPatient,
  authDctrPatient,
  
  getInfo,
} = require("../controllers/patientControllers");
const { protect  } = require("../middleware/authMiddleware");

const router = express.Router();

console.log("request come to patientRoutes");

router.route("/").post(registerPatient);
router.post("/login", authPatient);
router.post("/login/dctr",protect, authDctrPatient);
router.post("/getInfo/:userId" ,  getInfo);

module.exports = router;