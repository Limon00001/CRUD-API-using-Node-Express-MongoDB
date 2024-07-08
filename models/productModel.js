// Dependencies
const mongoose = require("mongoose");
const { Schema } = mongoose;

// Schema
const productSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please Enter the name of the product"],
  },
  company: String,
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    default: 0,
  },
  image: {
    type: String,
    default: false,
  },
});

// Exports module
module.exports = mongoose.model("Product", productSchema);
