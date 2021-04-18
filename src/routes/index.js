const route        = require('express').Router()
const authRoutes   = require('./auth')
const shopRoutes   = require('./shop')
const animalRoutes = require('./animal')
const refillData   = require('../utils/refillData')

route.use('/auth', authRoutes)
route.use('/shop', shopRoutes)
route.use('/animal', animalRoutes)
route.use('/filldata', refillData)


module.exports = route