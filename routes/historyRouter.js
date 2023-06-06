const express = require("express");
const router = express.Router();
const historyController = require("../controllers/historyController");

// Get all history
router.get("/", historyController.getAllHistory);

// Add new history
router.post("/", historyController.addHistory);

// Delete history
router.delete("/:id", historyController.deleteHistory);

module.exports = router;
