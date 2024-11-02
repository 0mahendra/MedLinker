const mongoose = require('mongoose');

// Define the chat schema
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
  timestamps: true, // Corrected the typo from 'timestaps' to 'timestamps'
});

// Create the Chat model
const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;

