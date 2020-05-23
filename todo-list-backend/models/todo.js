const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let TodoSchema = new Schema({
  title: {type: String},
  description: {type: String},
  completedBool: {type: Boolean}
})

module.exports = mongoose.model('Todo', TodoSchema);