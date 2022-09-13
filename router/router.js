const controller = require('../controller/controller')
const usersController = require('../controller/users')
const router = require('express').Router()

//consult the name and insert in the bank <name, location, email, bio, repositories>
router.get('/SearchingProfile/GitHub/:name', controller.searchingProfileGitHub)

//all users that are in the bank
router.get('/users', usersController.get)

//search by location
router.get('/users/location/:location', usersController.getByLocation)

module.exports = router
