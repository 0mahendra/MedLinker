const express = require("express");

const {
    registerDctr, authDctr,allDctr,authIdDctr,getInfo
}  = require("../controllers/dctrControllers");
const router = express.Router();

console.log("request come to patientRoutes");

// router.route("/").get(protect, allPatient);
router.route("/").post(registerDctr);
router.post("/login", authDctr);
router.post("/login/id", authIdDctr);
router.post("/getInfo/:dctrId" ,getInfo);
router.post("/allDctr",allDctr);

module.exports = router;