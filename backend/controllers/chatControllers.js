const asyncHandler = require('express-async-handler');
const Chat = require('../Models/ChatModel');

// Controller function to access a chat
const accessChat = asyncHandler(async (req, res, next) => {
  const { doctorId, patientId,userId } = req.body;
  try {
    // Check if a chat between the doctor and patient already exists
    let chat = await Chat.findOne({ doctorId, patientId,userId });

    // If chat doesn't exist, create a new one
    if (!chat) {
      const chat = Chat.create({
        doctorId,
        patientId,
        userId,
        messages :[],
      });
      // console.log(chat);
    }
    res.json("chat created");
  } catch (error) {
    console.error('Error accessing chat:', error);
    next(error);

  }
});



// Controller function to fetch chats for a user
const fetchChats = asyncHandler(async (req, res, next) => {
  const { userId, usertype } = req.body;
  // console.log(userId);
  // console.log(usertype);
  try {
    // Find chats where the user is either a doctor or a patient
    let chats;
    if (usertype === 'doctor') {
      chats = await Chat.find({ doctorId: userId });
    } else if (usertype === 'patient') {
      chats = await Chat.find({ userId: userId });
    } else {
      throw new Error('Invalid user type');
    }
    console.log(chats);
    res.json(chats);
  } catch (error) {
    console.error('Error fetching chats:', error);
    next(error);
  }
});

module.exports = {
  accessChat,
  fetchChats
};
