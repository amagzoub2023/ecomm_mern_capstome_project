const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    new_price: {
      type: Number
    },
    old_price: {
      type: Number
    },
    date: {
      type: Date,
      default: Date.now,
    },
    avilable: {
      type: Boolean,
      default: true,
    },
  });
  
  const Product = mongoose.model('Product', productSchema);

  module.exports = Product;
  
/*
const customerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        index: true // Index for frequent queries by first name
    },
    lastName: {
        type: String,
        required: true,
        index: true // Index for frequent queries by last name
    },
    email: {
        type: String,
        required: true,
        unique: true, // Unique index for ensuring uniqueness of email addresses
        index: true // Index for frequent queries by email
    },
    phone: {
        type: String,
        required: true,
        index: true // Index for frequent queries by phone number
    },
    address: {
        street: { type: String },
        city: { type: String },
        state: { type: String },
        zip: { type: String }
    },
    // Other fields as needed
});


const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;

*/