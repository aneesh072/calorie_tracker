const routes = require('express').Router();
const controller = require('../controller/controller');

routes
  .route('/api/addCalorie')
  .post(controller.create_Calories)
  .get(controller.get_Calories)


module.exports = routes;
