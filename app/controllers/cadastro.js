module.exports.cadastro = function (application, req, res) {
  res.render("cadastro", { validacao: {}, dadosForm: {} });
};

module.exports.cadastrar = function (application, req, res) {
  var dadosForm = req.body;

  req.assert("nome", "Nome não pode ser vazio").notEmpty();
  req.assert("usuario", "Usuário não pode ser vazio").notEmpty();
  req.assert("senha", "Senha não pode ser vazio").notEmpty();
  req.assert("casa", "Casa não pode ser vazio").notEmpty();

  var erros = req.validationErrors();

  if (erros) {
    res.render("cadastro", { validacao: erros, dadosForm: dadosForm });
    return;
  }

  var dbConnection = new application.config.dbConnection();
  var insertDAO = new application.app.models.insertDAO(dbConnection);
  var jogoDAO = new application.app.models.jogoDAO(dbConnection);

  insertDAO.insertNewData(dadosForm);
  jogoDAO.gerarParametros(dadosForm.usuario);

  res.redirect("/");
};
