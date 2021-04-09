const mongoose = require('mongoose');

const {
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_HOSTNAME,
  MONGO_HOSTNAME_LOCAL,
  MONGO_PORT,
  MONGO_PORT_LOCAL,
  MONGO_DB
} = process.env;

const options = {
  useNewUrlParser: true,
  connectTimeoutMS: 5000,
};

let url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;
if(process.env.IS_LOCAL){
  url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME_LOCAL}:${MONGO_PORT_LOCAL}/${MONGO_DB}?authSource=admin`;
}

console.log('Connecting using string:', url)

function connectDB() {
  console.info('Connecting to the database!')
  mongoose.connect(url, options).then(function () {
    console.info('MongoDB is connected');
  })
  .catch(function (err) {
    console.error('Could not connect to the database!')
    console.error(err);
  });
}

module.exports = connectDB;