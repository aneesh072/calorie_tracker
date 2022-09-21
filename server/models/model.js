const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const calorie_model = new Schema({
  name: {
    type: String,
    default: 'Anonymous',
  },
  amount: {
    type: Number,
  },
  date: { type: Date, default: Date.now },
});

const CalorieList = mongoose.model('calorie', calorie_model);

exports.default = CalorieList;
