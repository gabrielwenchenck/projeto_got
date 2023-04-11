var MongoModule = require("mongodb").MongoClient;

var dotenv = require("dotenv");

dotenv.config();

const url = process.env.DB_HOST;
const dbName = "got";

mongodb: function dbConnection() {
  this._MongoClient = undefined;
  this._MongoDB = undefined;
}

dbConnection.prototype.connectToMongo = function (callback) {
  MongoModule.connect(url, function (err, client) {
    console.log("Server Conectado Com Sucesso!");
    var MongoClient = client;
    var MongoDB = client.db(dbName);

    return callback(MongoClient, MongoDB);
  });
};

module.exports = function () {
  return dbConnection;
};
