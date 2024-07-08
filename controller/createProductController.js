// Dependencies
const Product = require("../models/productModel");

// Routes
const createProductController = async (req, res) => {
  try {
    // Extract data from request body
    const { name, company, price, quantity, image } = req.body;
    const product = await new Product({
      name: name,
      company: company,
      price: price,
      quantity: quantity,
      image: image,
    });

    // Save the product to the database
    product.save();

    // Send the response back
    res.send({
      message: "Product created successfully",
      product: product,
    });
  } catch (err) {
    return res.status(400).json({ message: "Invalid request body" });
  }
};

// Exports Modules
module.exports = createProductController;
