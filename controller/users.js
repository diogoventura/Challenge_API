const usersModel = require('../model/users')

module.exports = {
	async add(user) {
		await usersModel.insert(user);
	},

	async get(req, res) {
		const users = await usersModel.select();
		console.log(users);
		res.status(200).json(users);
	},

	async getByLocation(req, res) {
		const { location } = req.params;

		const users = await usersModel.selectLocation(location);
		console.log(users);
		res.status(200).json(users);
	}
}