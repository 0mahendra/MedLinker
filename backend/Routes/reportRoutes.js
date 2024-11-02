const express = require("express");

const { registerReport,updateReport,getReport }  = require("../controllers/reportControllers");
const { protect  } = require("../middleware/authMiddleware");
const router = express.Router();




router.route("/").post(protect ,registerReport);
router.post("/update",protect, updateReport);
router.post("/view",protect, getReport);


module.exports = router;