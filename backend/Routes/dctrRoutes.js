const express = require("express");

const {
    registerDctr, authDctr,allDctr,authIdDctr,getInfo
}  = require("../controllers/dctrControllers");
const {protect} = require ("../middleware/authMiddleware");
const router = express.Router();

console.log("request come to patientRoutes");

router.route("/").post(registerDctr);
router.post("/login", authDctr);
router.post("/login/id",protect, authIdDctr);
router.post("/getInfo/:dctrId" ,getInfo);
router.post("/allDctr",protect,allDctr);

module.exports = router;