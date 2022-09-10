const postgres = require('pg-promise')()

const conn = {
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	database: process.env.DB_NAME,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	max: process.env.DB_MAX
};

const db = postgres(conn);

module.exports = db;