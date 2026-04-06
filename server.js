const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const inventoryRoutes = require("./routes/inventoryRoutes.js");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Inventory Management API is running"
  });
});

app.use("/api/inventory", inventoryRoutes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found"
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
