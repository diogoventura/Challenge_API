const axios = require('axios')
const usersModel = require('../model/users');

module.exports = {
	async presquisarPerfilGitHub(req, res) {
		const { name } = req.params
		var nome, bio, imagem
		await axios.get('http://api.github.com/users/' + name).then(async function (resposta) {
			console.log(resposta.data)

			nome = resposta.data.name
			local = resposta.data.location
			email = resposta.data.email
			bio = resposta.data.bio
			repos_url = resposta.data.repos_url

			user = {
				name: nome
				, location: local
				, email: email
				, bio: bio
				, repos_url: repos_url
			}

			await usersModel.insert(user);
			res.status(200).json(user);
		}).catch((err) => {
			res.json({ msg: "Perfil não encontrado" + err })
		})
	},
}