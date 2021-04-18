const route = require('express').Router()
const shopController = require('../controllers/shopController')
const verifyToken = require('../middlewares/verifyToken')

route.get('/', verifyToken, shopController.getShops)

route.post('/', shopController.saveShop)

route.put('/:id', shopController.updateShop)

route.delete('/:id', shopController.deleteShop)

route.get('/:id', shopController.findShopByPk)

route.post('/sellAnimal', verifyToken, shopController.sellAnimal)

module.exports = route