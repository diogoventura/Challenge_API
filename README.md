# Challenge API

Challenge app for data manipulation using github and database API.

🚀 What did you do?
1. Search the name and location of the api from github and write to a postgreSQL database.
2. Display all users registered in the database.
3. List users by location.
4. consult the languages/repositories of the registered users.

🧩 Routes:
//consult the name and insert in the bank <name, location, email, bio, repositories>
router.get('/SearchingProfile/GitHub/:name', controller.searchingProfileGitHub)
//All users that are in the database
router.get('/users', usersController.get)
//Search by location
router.get('/users/location/:location', usersController.getByLocation)


⚙ Tools:
Node.js, Express, PostgreSQL, Javascript, Helmet

🛠 Starting:
1. Clone the repository running in your terminal/cmd git clone
2. Enter the project folder and run npm to install all dependencies
3. Create the application database using the PostgreSQL platform (follow this tutorial: https://www.prisma.io/dataguide/postgresql/connecting-to-postgresql-databases)
4. Create a file .env:
APP_PORT=8080

DB_HOST=localhost
DB_PORT=5432
DB_NAME=dbGit
DB_USER=postgres
DB_PASS=1qaz@WSX
DB_MAX=30

5. Run the database script:
Script database.sql

5. Finally, npm start to start the server.
