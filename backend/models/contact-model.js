const mongoose = require('mongoose');

// Define the schema for the contact form
const contactFormSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
});

// Create and export the ContactForm model
const Contacts = mongoose.model('Contacts', contactFormSchema);

module.exports = Contacts;
