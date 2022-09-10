# Desafio API

Aplicativo de desafio para manipulação de dados usndo a API do github e banco de dados.

🚀 O que fez?
1. Busca o nome e local da api do github e gravar em um banco postgreSQL.
2. Exibi todos os usuário cadastrados na base de dados.
3. lista os usuário pelo local.
4. consultar as linguagens/repositorios dos usuário cadastrados.

🧩 Rotas:
//consultar o nome e inserir no banco <name, location, email, bio, repositorio>
router.get('/PesquisandoPerfil/GitHub/:name', controller.presquisarPerfilGitHub)
//todos os usuário que estão no banco
router.get('/users', usersController.get)
//faz a pesquisa por location
router.get('/users/location/:location', usersController.getByLocation)


⚙ Ferramentas:
Node.js, Express, PostgreSQL, Javascript, Helmet

🛠 Iniciando:
1. Clone o repositório rodando no seu terminal/cmd git clone 
2. Entre na pasta do projeto e rode npm para instalar todas as dependências
3. Crie a o banco de dados da aplicação utilizando a plataforma PostgreSQL (seguir este tutorial: https://www.prisma.io/dataguide/postgresql/connecting-to-postgresql-databases)
4. Crie um arquivo .env:
APP_PORT=8080

DB_HOST=localhost
DB_PORT=5432
DB_NAME=dbGit
DB_USER=postgres
DB_PASS=1qaz@WSX
DB_MAX=30

5. Rodar o script do banco de dados:
Script banco de dados.sql

5. Por fim, npm start para iniciar o server
    
