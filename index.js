const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const inventoryRoutes = require("./routes/inventoryRoutes.js");
const errorHandler = require("./middleware/errorHandler.js");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Inventory Management Backend API is running"
  });
});

// Inventory routes
app.use("/api/inventory", inventoryRoutes);

// 404 route handler
app.use((req, res, next) => {
  const error = new Error("Route not found");
  error.statusCode = 404;
  next(error);
});

// Centralized error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
