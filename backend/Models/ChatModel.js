const mongoose = require('mongoose');


const chatSchema = new mongoose.Schema({
  doctorId: {
    type: String, // Use String without quotes for the type
    required: true
  },
  patientId: {
    type: String, // Use String without quotes for the type
    required: true
  },
  userId: {
    type: String, // Use String without quotes for the type
    required: true
  }
}, {
  timestamps: true, 
});

// Create the Chat model
const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;

