const validateInventoryItem = (req, res, next) => {
  const { name, category, quantity, price } = req.body;

  if (!name || typeof name !== "string" || name.trim() === "") {
    return res.status(400).json({
      success: false,
      message: "Item name is required and must be a valid string"
    });
  }

  if (!category || typeof category !== "string" || category.trim() === "") {
    return res.status(400).json({
      success: false,
      message: "Category is required and must be a valid string"
    });
  }

  if (quantity === undefined || isNaN(quantity) || Number(quantity) < 0) {
    return res.status(400).json({
      success: false,
      message: "Quantity is required and must be a non-negative number"
    });
  }

  if (price === undefined || isNaN(price) || Number(price) < 0) {
    return res.status(400).json({
      success: false,
      message: "Price is required and must be a non-negative number"
    });
  }

  req.body.quantity = Number(quantity);
  req.body.price = Number(price);

  next();
};

module.exports = { validateInventoryItem };
