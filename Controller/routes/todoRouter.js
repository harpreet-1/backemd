const { todoModel } = require("../.././Models/todoModel");
const { authorization } = require("../middleware/authorization");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const express = require("express");
const todoRouter = express.Router();

const updateTodo = async (req, res) => {
  try {
    const todo = await todoModel.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "Todo updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const todo = await todoModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Todo deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTodo = async (req, res) => {
  try {
    const todos = await todoModel.find({ userID: req.userID });
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const createTodo = async (req, res) => {
  try {
    const todo = await todoModel.create(req.body);
    res.json({ message: "Todo added successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

todoRouter.use(authorization);

todoRouter.get("/", getTodo);
todoRouter.post("/create", createTodo);
todoRouter.patch("/update", updateTodo);
todoRouter.delete("/delete", deleteTodo);

module.exports = { todoRouter };
