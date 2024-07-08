// Dependencies
const Product = require("../models/productModel");

// Routes
const updateProductController = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    const updatedProduct = await Product.findById(id);
    return res.status(200).json(updatedProduct);
  } catch (err) {
    return res.status(400).json({ message: "Invalid request body" });
  }
};

// Exports Modules
module.exports = updateProductController;
