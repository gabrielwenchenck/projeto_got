module.exports.index = function (application, req, res) {
  res.render("index", { validacao: {} });
};

module.exports.autenticar = function (application, req, res) {
  var dadosForm = req.body;
  req.assert("usuario", "Digite o seu usuário").notEmpty();
  req.assert("senha", "Digite a sua senha").notEmpty();

  var erros = req.validationErrors();

  if (erros) {
    res.render("index", { validacao: erros });
    return;
  }

  var dbConnection = new application.config.dbConnection();
  var insertDAO = new application.app.models.insertDAO(dbConnection);

  insertDAO.autenticar(dadosForm, req, res);
};
