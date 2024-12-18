const asyncHandler = require('express-async-handler');
const Chatdata = require('../Models/MessageModel');

// Controller function to send a message
const sendMessage = asyncHandler(async (req, res, next) => {
  const { chatId , sender, content } = req.body;
  // console.log(chatId);
  // console.log(sender);
  // console.log(content);
  let chatdata = await Chatdata.findOne({ chatId });
  // console.log(chatdata);
  if (!chatdata) {
    chatdata = new Chatdata({ chatId });
    // console.log("senmder");
    if(content){ 
      chatdata.messages.push({ sender, content });
      await chatdata.save();
       }

  }else{
   if(content){ 
  chatdata.messages.push({ sender, content });
  await chatdata.save();
   }
   }
   if(content){
    chatdata = await Chatdata.findOne({chatId});
   res.json(chatdata);
   }
   else{
    res.json(content);
   }
  //  console.log(chatdata);
  // console.log("message has been stored success fully");
  
  // return { success: true, message: 'Message stored successfully' };

});


// Controller function to fetch messages for a chat
// const fetchMessages = asyncHandler(async (req, res, next) => {
//   const { chatId } = req.body;
//   // console.log(chatId);
//   // console.log("fetch");
//   let chat1Data;
//   try {
//     // Find all messages for the specified chat
//     let chatdata = await Chatdata.findOne({chatId});
//     // console.log(chatdata);
//     if(!chatdata){
//       //  chat1Data=  new Chatdata({ chatId });
//       chatdata = new Chatdata({ chatId });
//       // console.log("this postion is called");
//       return;
//     }
//     // console.log(chatdata.messages);
//     res.json(chatdata.messages);
//   } catch (error) {
//     console.error('Error fetching messages:', error);
//     next(error);
//   }
// });

const fetchMessages = asyncHandler(async (req, res, next) => {
  const { chatId } = req.body;

  try {
    // Find the chat data for the specified chatId
    let chatdata = await Chatdata.findOne({ chatId });

    // If chat data doesn't exist, create a new one
    if (!chatdata) {
      chatdata = new Chatdata({ chatId });
      await chatdata.save(); // Ensure the new chat data is saved to the database
      return res.status(200).json({ messages: [] }); // Return empty messages array
    }

    // Sort messages by createdAt in descending order (latest first)
    const sortedMessages = chatdata.messages.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt); // Assumes messages have a 'createdAt' property
    });

    // Send sorted messages as a response
    res.json(sortedMessages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    next(error);
  }
});


module.exports = {
  sendMessage,
  fetchMessages
};
