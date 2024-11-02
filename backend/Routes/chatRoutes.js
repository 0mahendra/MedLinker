const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { accessChat, fetchChats } = require('../controllers/chatControllers');
const {protect} = require ("../middleware/authMiddleware");


router.post('/access',protect, asyncHandler(accessChat));


router.post('/fetch', protect,  asyncHandler(fetchChats));


module.exports = router;
