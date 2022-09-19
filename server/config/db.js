const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      userNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true,
    });
    console.log('MongoDB Connected');
  } catch (error) {
    console.log(error);
    // exit process with failres
    process.exit(1);
  }
};

module.export = connectDB;
