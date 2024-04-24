const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    name: {
        type: String,
      },
      email: {
        type: String,
        unique: true,
      },
      password: {
        type: String,
      },
      cartData: {
        type: Object,
      },
      date: {
        type: Date,
        default: Date.now,
      },
  });
  
  const Users = mongoose.model('Users', usersSchema);

  module.exports = Users;

  // Schema for creating user model
  /*
const Users = mongoose.model("Users", {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    cartData: {
      type: Object,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  });

  */