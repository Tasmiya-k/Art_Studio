const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/userdata");
const product = require("./models/product");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/artstudio");

app.get("/products", async (req, res) => {
  try {
    // Fetch products from MongoDB and send as a response
    const products = await product.find(); // Assuming you have a Product model
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/userapi/register", async (req, res) => {
  console.log(req.body);
  try {
    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error", error: "Duplicate email" });
  }
});

app.post("/userapi/login", async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });

  if (user) {
    return res.json({ status: "ok", user: true });
  } else {
    return res.json({ status: "error", user: false });
  }
});

app.listen(1337, () => {
  console.log("Server has started on port 1337");
});
