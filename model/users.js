const db = require('../db');

module.exports = {

	//Inseirr no banco de dados
	async insert(user) {
		try {
			const sql = 'INSERT INTO users(name,email,location,bio)VALUES'
			const values = '(${name},${email},${location},${bio},${repos_url})'
			db.none(sql + values, {
				name: user.name
				, email: user.email
				, location: user.location
				, bio: user.bio
				, repos_url: user.repos_url
			});
		}
		catch (err) {
			console.error(`Erro ao inserir usuário: ${err}`);
		}
	},

	//pesqusia por location
	async selectLocation(location) {
		try {
			const sql = "SELECT * FROM users WHERE upper(location) = upper($1)";
			return await db.any(sql, location);
		}
		catch (err) {
			console.error(`Erro ao consultar usuário: ${err}`);
		}
	},

	//pesquisa todos os usuários
	async select() {
		try {
			const sql = "SELECT * FROM users";
			return await db.any(sql);
		}
		catch (err) {
			console.error(`Erro ao consultar usuário: ${err}`);
		}
	}
}