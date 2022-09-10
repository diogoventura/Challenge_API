const controller = require('../controller/controller')
const usersController = require('../controller/users')
const router = require('express').Router()

//consultar o nome e inserir no banco <name, location, email, bio, repositorios>
router.get('/PesquisandoPerfil/GitHub/:name', controller.presquisarPerfilGitHub)

//todos os usuário que estão no banco
router.get('/users', usersController.get)

//faz a pesquisa por location
router.get('/users/location/:location', usersController.getByLocation)

module.exports = router