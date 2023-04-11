# Projeto Game of Thrones

O projeto é um jogo baseado em Node.js, utilizando as tecnologias Express, EJS, MongoDB, Consign, Express-session, Express-validator, jQuery e Body-parser. O jogo é inspirado no universo de Game of Thrones e permite aos usuários criar uma conta, fazer login e autenticação, e participar de um jogo de estratégia onde o objetivo é administrar recursos, ações e pontos de habilidades para construir um império poderoso.


## Funcionalidades do Projeto

### Cadastro de Usuários
Os usuários podem se cadastrar no jogo fornecendo informações como nome, nome de usuário, senha e escolha de uma casa, que será sua representação no jogo. As informações são validadas utilizando o Express-validator para garantir a integridade dos dados.

### Distribuição Aleatória de Pontos
Quando um usuário cria uma conta, o sistema distribui aleatoriamente pontos de habilidades nas categorias "temor", "sabedoria", "comércio" e "magia" para o usuário. Esses pontos iniciais são usados para calcular o sucesso das ações realizadas pelo usuário durante o jogo.

### Recursos do Usuário
Cada usuário inicia o jogo com 10 aldeões e uma quantidade de moedas de ouro. Os aldeões são usados para executar ações no jogo, enquanto as moedas de ouro são usadas para custear as ações. O usuário pode monitorar a quantidade de aldeões e moedas disponíveis em seu perfil.

### Ações do Jogo
Os usuários podem executar ações no jogo, como coletar recursos, ensinar história, ensinar magia e enforcar aldeões. Essas ações consomem tempo e ouro, e têm como objetivo aumentar os pontos de habilidades do usuário nas respectivas categorias. A eficácia das ações é determinada pelos pontos de habilidades iniciais do usuário e pelos recursos disponíveis.

### Validação de Sessão
O sistema utiliza o Express-session para autenticar os usuários e gerenciar suas sessões. Isso garante que apenas usuários autenticados possam acessar as funcionalidades do jogo e protege a privacidade e segurança dos dados do usuário.

## Banco de Dados

No projeto, foram utilizadas três coleções no MongoDB para armazenar as informações dos usuários, do jogo e das ações. Aqui está uma breve descrição de cada coleção.

### Coleção "usuarios":
Armazena os dados dos usuários cadastrados no jogo, como nome, nome de usuário, senha e casa escolhida.
É utilizada para autenticação de usuários durante o login, validando as credenciais fornecidas.
Pode ser consultada para recuperar informações de perfil do usuário, como a quantidade de aldeões, moedas de ouro e pontos de habilidades.

### Coleção "jogo":
Armazena os dados do jogo em si, como a quantidade de aldeões disponíveis, a quantidade de moedas de ouro e os pontos de habilidades iniciais distribuídos aleatoriamente para cada usuário.
É atualizada à medida que os usuários realizam ações no jogo, consumindo recursos e alterando os pontos de habilidades.

### Coleção "acao":
Armazena os dados das ações realizadas pelos usuários no jogo, como o tipo de ação executada, o usuário que a executou, o custo em moedas de ouro e o impacto nos pontos de habilidades.
É utilizada para registrar o histórico de ações do usuário e para calcular o impacto das ações nos pontos de habilidades do usuário.
O uso do MongoDB como banco de dados NoSQL permite a flexibilidade na modelagem dos dados e é adequado para projetos que precisam de rápida iteração e escalabilidade. No projeto em questão, o MongoDB é utilizado para armazenar e gerenciar as informações dos usuários, do jogo e das ações, permitindo o armazenamento e recuperação eficiente dos dados relacionados ao jogo de Game of Thrones.

## Tecnologias Utilizadas
### O projeto foi desenvolvido utilizando as seguintes tecnologias:
Node.js: Uma plataforma de desenvolvimento de aplicações JavaScript do lado do servidor.
Express: Um framework de aplicativo web para Node.js, utilizado para criar rotas, gerenciar sessões e validar entradas de dados.
EJS: Um mecanismo de visualização de template para Node.js, utilizado para renderizar as páginas HTML.
MongoDB: Um banco de dados NoSQL, utilizado para armazenar as informações dos usuários, aldeões, moedas e pontos de habilidades.
Consign: Um módulo para Node.js, utilizado para estruturar o projeto e carregar automaticamente rotas, modelos e controladores.
Express-session: Um middleware de autenticação para Express, utilizado para gerenciar sessões de usuários e autenticação.
Express-validator: Um middleware de validação de entradas de dados para Express, utilizado para validar as informações fornecidas pelos usuários.
