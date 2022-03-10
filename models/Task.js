const mongoose = require("mongoose");
const taskSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, default: "no description" },
  imagePath: { type: String },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "User", require: true },
});
module.exports = mongoose.model("Task", taskSchema);
