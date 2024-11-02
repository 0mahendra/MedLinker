const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { sendMessage, fetchMessages } = require('../controllers/messageControllers');
const {protect} = require ("../middleware/authMiddleware");
// Route to send a message
router.post('/chatId/send', protect, asyncHandler(sendMessage));

// Route to fetch messages for a chat
router.post('/chatId/fetch', protect, asyncHandler(fetchMessages));

module.exports = router;
