import type { Request, Response } from "express";
import { pool } from "../models/db.js";

export async function getItems(req: Request, res: Response) {
  const [rows] = await pool.query("SELECT * FROM items");
  res.json(rows);
}

export async function addItem(req: Request, res: Response) {
  const { name, description } = req.body;

  if (!name || !description) {
    return res.status(400).json({ message: "Name and description required" });
  }

  await pool.query(
    "INSERT INTO items (name, description) VALUES (?, ?)",
    [name, description]
  );

  res.status(201).json({ message: "Item added" });
}
