function insertDAO(dbConnection) {
  this._connection = dbConnection;
}

insertDAO.prototype.insertNewData = function (datas) {
  var mongoConnected = this._connection.connectToMongo(function (client, db) {
    const collection = db.collection("usuarios");
    collection.insert(datas);
    client.close();
  });
};

insertDAO.prototype.autenticar = function (datas, req, res) {
  var mongoConnected = this._connection.connectToMongo(function (client, db) {
    const collection = db.collection("usuarios");
    collection.find(datas).toArray(function (err, result) {
      if (result[0] != undefined) {
        req.session.autorizado = true;
        req.session.usuario = result[0].usuario;
        req.session.casa = result[0].casa;
      }
      if (req.session.autorizado) {
        res.redirect("jogo");
      } else {
        res.render("index", { validacao: {} });
      }
    });
    client.close();
  });
};

module.exports = function () {
  return insertDAO;
};
