# Inventory Management System Backend

**Live Link** : https://inventory-backend-one-orcin.vercel.app/
Github Link : https://github.com/nishajamesp/inventory-backend


This is a simple backend-only **Inventory Management System** built using **Node.js** and **Express.js**.

It uses an **in-memory array** to store inventory data, so no database is required.

---

## Features

- Add inventory items
- View all inventory items
- View a single item by ID
- Update inventory items
- Delete inventory items
- Filter items by category
- Filter items by quantity
- Search items by name

---

## Tech Stack

- Node.js
- Express.js
- dotenv
- cors
- nodemon

---

## Project Structure

```bash
inventory-backend/
│
├── controllers/
│   └── inventoryController.js
├── models/
│   └── inventoryModel.js
├── routes/
│   └── inventoryRoutes.js
├── server.js
├── .env
├── .gitignore
├── package.json
└── README.md
