const mongoose = require("mongoose");

// Define the schema to match your existing data structure
const productSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  id: String,
  desc: String,
  name: String,
  price: Number,
  image: String,
});

// Define the model for the "products" collection in MongoDB
const Product = mongoose.model("Product", productSchema, "products");

module.exports = Product;
