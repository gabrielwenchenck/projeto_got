/* importar as configurações do servidor */
var app = require("./config/server");
var dotenv = require("dotenv");

dotenv.config();

/* parametrizar a porta de escuta */
app.listen(process.env.PORT, function () {
  console.log("Servidor online");
});
