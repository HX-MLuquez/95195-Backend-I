const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 3000;
const dotenv = require("dotenv");
dotenv.config(); // Load environment variables from .env file

const { MONGO_URI } = process.env; // Get MongoDB URI from environment variable

// LOCAL MONGO_URI
// const MONGO_URI = 'mongodb://localhost:27017/mydatabase';

// CLOUD MONGO_URI - ATLAS
// const MONGO_URI =
//   "mongodb+srv://pipo:qzwOVMSEbfldHfUp@cluster01.aolpvws.mongodb.net/tundu?appName=Cluster01";

// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

// Define a simple schema and model - es la base de la entidad dato
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensure email is unique
  },
});

// Create a model based on the schema
const User = mongoose.model("User", userSchema); // User -> users

// Define a route to create a new user
app.post("/users", async (req, res) => {
  try {
    const { name, email } = req.body;
    const newUser = new User({ name, email });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    console.error("Error creating user:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Define a route to get all users
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Ruta raiz
app.get("/", (req, res) => {
  res.send("Welcome to the User API");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
