const express = require("express");

const {
    medRegistration, authReq, authIdMed,dropRequest
}  = require("../controllers/medControllers");
const{protect} = require("../middleware/authMiddleware");
const router = express.Router();

console.log("request come to MedRoutes");


router.route("/").post( protect,medRegistration);
router.post("/req",protect , authReq);
router.post("/id",protect, authIdMed);
router.post('/drop',protect, dropRequest);


module.exports = router;