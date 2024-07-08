// Dependencies
const Product = require("../models/productModel");

// Routes
const getOneProductController = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    } else {
      return res.status(200).json(product);
    }
  } catch (err) {
    return res.status(400).json({ message: "Invalid request body" });
  }
};

// Exports Modules
module.exports = getOneProductController;
