const axios = require('axios')
const usersModel = require('../model/users');

module.exports = {
	async searchProfileGitHub(req, res) {
		const { name } = req.params
		var namev, bio, imagem
		await axios.get('http://api.github.com/users/' + name).then(async function (answer) {
			console.log(resposta.data)

			namev = answer.data.name
			place = answer.data.location
			email = answer.data.email
			bio = answer.data.bio
			repos_url = answer.data.repos_url

			user = {
				name: namev
				, location: place
				, email: email
				, bio: bio
				, repos_url: repos_url
			}

			await usersModel.insert(user);
			res.status(200).json(user);
		}).catch((err) => {
			res.json({ msg: "Profile not found" + err })
		})
	},
}
