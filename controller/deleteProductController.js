// Dependencies
const Product = require("../models/productModel");

// Routes
const deleteProductController = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    return res.status(200).json({ message: "Product deleted successfully" });
  } catch (err) {
    return res.status(400).json({ message: "Invalid request body" });
  }
};

// Exports Modules
module.exports = deleteProductController;
