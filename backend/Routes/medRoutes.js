const express = require("express");

const {
    medRegistration, authReq, authIdMed,dropRequest
}  = require("../controllers/medControllers");
const router = express.Router();

console.log("request come to MedRoutes");


router.route("/").post(medRegistration);
router.post("/req", authReq);
router.post("/id",authIdMed);
router.post('/drop',dropRequest);


module.exports = router;