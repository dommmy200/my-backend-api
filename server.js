import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import itemRoutes from "./routes/itemRoutes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Base route
app.get("/", (req, res) => {
  res.send("🚀 API is running...");
});

// API routes
app.use("/api/items", itemRoutes);

// Start server
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
