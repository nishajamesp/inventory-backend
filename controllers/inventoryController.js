const inventory = require("../model/inventoryModel");

// Get all items + filter/search
const getAllItems = (req, res) => {
  let filteredItems = [...inventory];
  const { category, minQuantity, maxQuantity, search } = req.query;

  if (category) {
    filteredItems = filteredItems.filter(
      (item) => item.category.toLowerCase() === category.toLowerCase()
    );
  }

  if (minQuantity) {
    filteredItems = filteredItems.filter(
      (item) => item.quantity >= Number(minQuantity)
    );
  }

  if (maxQuantity) {
    filteredItems = filteredItems.filter(
      (item) => item.quantity <= Number(maxQuantity)
    );
  }

  if (search) {
    filteredItems = filteredItems.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  res.status(200).json({
    success: true,
    count: filteredItems.length,
    data: filteredItems
  });
};

// Get single item
const getItemById = (req, res) => {
  const item = inventory.find((item) => item.id === Number(req.params.id));

  if (!item) {
    return res.status(404).json({
      success: false,
      message: "Item not found"
    });
  }

  res.status(200).json({
    success: true,
    data: item
  });
};

// Add item
const addItem = (req, res) => {
  const { name, category, quantity, price } = req.body;

  if (!name || !category || quantity === undefined || price === undefined) {
    return res.status(400).json({
      success: false,
      message: "All fields are required"
    });
  }

  const newItem = {
    id: inventory.length ? inventory[inventory.length - 1].id + 1 : 1,
    name,
    category,
    quantity: Number(quantity),
    price: Number(price)
  };

  inventory.push(newItem);

  res.status(201).json({
    success: true,
    message: "Item added successfully",
    data: newItem
  });
};

// Update item
const updateItem = (req, res) => {
  const item = inventory.find((item) => item.id === Number(req.params.id));

  if (!item) {
    return res.status(404).json({
      success: false,
      message: "Item not found"
    });
  }

  const { name, category, quantity, price } = req.body;

  item.name = name || item.name;
  item.category = category || item.category;
  item.quantity = quantity !== undefined ? Number(quantity) : item.quantity;
  item.price = price !== undefined ? Number(price) : item.price;

  res.status(200).json({
    success: true,
    message: "Item updated successfully",
    data: item
  });
};

// Delete item
const deleteItem = (req, res) => {
  const index = inventory.findIndex((item) => item.id === Number(req.params.id));

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: "Item not found"
    });
  }

  const deletedItem = inventory.splice(index, 1);

  res.status(200).json({
    success: true,
    message: "Item deleted successfully",
    data: deletedItem[0]
  });
};

module.exports = {
  getAllItems,
  getItemById,
  addItem,
  updateItem,
  deleteItem
};
