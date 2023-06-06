const History = require("../models/history");

// Get all history
const getAllHistory = async (req, res) => {
  try {
    const history = await History.find();
    res.json(history);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Add new history
const addHistory = async (req, res) => {
  const { prediction, confidence, imageUrl } = req.body;

  try {
    const history = await History.create({
      prediction,
      confidence,
      imageUrl,
    });
    res.status(201).json(history);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Delete history
const deleteHistory = async (req, res) => {
  const { id } = req.params;

  try {
    const history = await History.findByIdAndDelete(id);
    if (history) {
      res.json({ message: "History deleted successfully" });
    } else {
      res.status(404).json({ error: "History not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getAllHistory,
  addHistory,
  deleteHistory,
};
