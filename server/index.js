const express = require('express');
const app = express();

const cors = require('cors');
const CalorieModel = require('./models/model');

require('dotenv').config({ path: './config.env' });
const port = process.env.PORT || 5001;

//use middleware
app.use(cors());
app.use(express.json());

//mongoDB COnnection
const con = require('./db/connection.js');
const { default: mongoose } = require('mongoose');

app.delete('/api/addCalorie/:id', async (req, res) => {
  const id = req.params.id;
  await CalorieModel.findByIdAndDelete(id).exec();
  res.send('Itme Deleted');
});

//using routes
app.use(require('./routes/route.js'));


con
  .then((db) => {
    if (!db) return process.exit(1);

    //listen to the HTTP server
    app.listen(port, () => {
      console.log(`Server is running on PORT: ${port}`);
    });

    app.on('error', (err) =>
      console.log(`Fail to connect with HTTP server: ${err}`)
    );
  })
  .catch((error) => {
    console.log(`Connection Failed...!${error}`);
    //error in mongodb connection
  });

