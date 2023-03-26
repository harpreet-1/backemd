const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  title: { type: String, required: true },

  description: { type: String, required: true },
  userID: { type: String, required: true },
});

const todoModel = mongoose.model("Todo", todoSchema);

module.exports = { todoModel };
