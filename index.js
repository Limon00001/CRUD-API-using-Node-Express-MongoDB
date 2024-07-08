/*
    Title: CRUD API
    Author: Monayem Hossain Limon
*/

// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const createProductController = require("./controller/createProductController");
const getAllProductController = require("./controller/getAllProductController");
const getOneProductController = require("./controller/getOneProductController");
const updateProductController = require("./controller/updateProductController");
const deleteProductController = require("./controller/deleteProductController");

// Middleware
app.use(express.json());
// If we want to add data by using form url encoded
app.use(express.urlencoded({ extended: false }));

// Database Connection
mongoose
  .connect("mongodb://localhost:27017/todo")
  .then(() => {
    console.log("Connected to database");

    // Server listening
    app.listen(8000, () => console.log("Server is listening on port 8000"));
  })
  .catch((err) => console.error(err));

// POST request
app.post("/", createProductController);
// GET request
app.get("/", getAllProductController);
// GET request
app.get("/:id", getOneProductController);
// PUT request
app.put("/:id", updateProductController);
// DELETE request
app.delete("/:id", deleteProductController);
