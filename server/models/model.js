const mongoose = require('mongoose');

const CalorieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  amount: {
    type: String,
    required: false,
  },
});

const CalorieModel = mongoose.model('calories', CalorieSchema);
module.exports = CalorieModel;
