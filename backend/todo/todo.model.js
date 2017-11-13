const mongoose = require("mongoose")

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  done: { type: Boolean, required: true },
})

module.exports = mongoose.model("Todo", schema)
