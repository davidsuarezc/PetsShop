const route = require('express').Router()
const animalController = require('../controllers/animalController')
const verifyToken = require('../middlewares/verifyToken')

route.get('/', animalController.getAnimals)

route.post('/', animalController.saveAnimal)

/* route.put('/:id', animalController.updateAnimal)

route.delete('/:id', animalController.deleteAnimal)

route.get('/:id', animalController.findShopByPk) */

module.exports = route