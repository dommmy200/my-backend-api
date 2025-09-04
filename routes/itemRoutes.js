import express from "express";
import { getItems, createItem } from "../controllers/itemController.js";

const router = express.Router();

router.get("/", getItems);     // GET /api/items
router.post("/", createItem);  // POST /api/items

export default router;
