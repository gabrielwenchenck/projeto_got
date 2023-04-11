var MongoModule = require("mongodb").MongoClient;

const url = 'mongodb://giwenck:aI8alxniVprXdeGv@ac-27f9hky-shard-00-00.ovnicjk.mongodb.net:27017,ac-27f9hky-shard-00-01.ovnicjk.mongodb.net:27017,ac-27f9hky-shard-00-02.ovnicjk.mongodb.net:27017/?ssl=true&replicaSet=atlas-shlc4t-shard-0&authSource=admin&retryWrites=true&w=majority'
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
