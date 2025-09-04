import Item from "../models/itemModel.js";

// GET all items
export const getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST create new item
export const createItem = async (req, res) => {
  try {
    const { name, quantity } = req.body;
    const item = new Item({ name, quantity });
    const savedItem = await item.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
