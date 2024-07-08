// Dependencies
const Product = require("../models/productModel");

// Routes
const getAllProductController = async (req, res) => {
  try {
    const products = await Product.find();
    return res.status(200).json(products);
  } catch (err) {
    return res.status(400).json({ message: "Invalid request body" });
  }
};

// Exports Modules
module.exports = getAllProductController;
