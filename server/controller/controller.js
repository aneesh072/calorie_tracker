const CalorieModel = require('../models/model');

async function create_Calories(req, res) {
  if (!req.body) return res.status(400).json('Post HTTP data not provided');
  let { name, amount } = req.body;
  const Create = new CalorieModel({
    name: name,
    amount: amount,
    date: new Date(),
  });

  await Create.save(function (err) {
    if (!err) return res.json(Create);
    return res
      .status(400)
      .json({ message: `Error while create calories ${err}` });
  });
}

async function get_Calories(req, res) {
  let data = await CalorieModel.find({});
  let filter = await data.map((value) =>
    Object.assign({}, { name: value.name, amount: value.amount })
  );
  return res.json(filter);
}


module.exports = {
  create_Calories,
  get_Calories,
};
