const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
require("dotenv").config();

const mongoConnect = (callback) => {
  MongoClient.connect(process.env.MONGO)
    .then((client) => {
      console.log("Server connected !");
      callback(client);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = mongoConnect;
