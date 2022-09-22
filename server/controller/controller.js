const CalorieModel = require('../models/model');

//post request
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
//get request
async function get_Calories(req, res) {
  let data = await CalorieModel.find({});
  return res.json(data);
}

//delete request
//  delete: http://localhost:8080/api/transaction
async function delete_Calorie(req, res) {
  if (!req.body) res.status(400).json({ message: 'Request body not Found' });
  await CalorieModel.deleteOne(req.body, function (err) {
    if (!err) res.json('Record Deleted...!');
  })
    .clone()
    .catch(function (err) {
      res.json('Error while deleting Transaction Record');
    });
}
module.exports = {
  create_Calories,
  get_Calories,
  delete_Calorie,
};
