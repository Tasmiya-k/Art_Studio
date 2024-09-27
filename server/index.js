const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/userdata");
const bcrypt = require("bcrypt");
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
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res
        .status(400)
        .json({ status: "error", error: "Email already in use" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ name, email, password: hashedPassword });

    await newUser.save();

    res.json({ status: "ok" });
  } catch (err) {
    console.error("Error registering user:", err);

    res.status(500).json({ status: "error", error: "Internal server error" });
  }
});

app.post("/userapi/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(400)
        .json({ status: "error", error: "Invalid email or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res
        .status(400)
        .json({ status: "error", error: "Invalid email or password" });
    }

    res.json({ status: "ok", user: true });
  } catch (err) {
    console.error("Error logging in user:", err);

    res.status(500).json({ status: "error", error: "Internal server error" });
  }
});

app.listen(1337, () => {
  console.log("Server has started on port 1337");
});
