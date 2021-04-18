require('dotenv').config()
const Sequelize   = require('sequelize')
const breedModel  = require('./models/breed')
const personModel = require('./models/person')
const petModel    = require('./models/pet')
const animalModel = require('./models/animal')
const shopModel   = require('./models/shop')

const cx = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT /* 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
})

const Breed  = breedModel(cx, Sequelize)
const Person = personModel(cx, Sequelize)
const Pet    = petModel(cx, Sequelize)
const Animal = animalModel(cx, Sequelize)
const Shop   = shopModel(cx, Sequelize)

// RELATIONS
// Porq una tienda no puede tener una misma raza a varios precios
Breed.belongsToMany(Shop, { through: Animal })
Shop.belongsToMany(Breed, { through: Animal })

Breed.hasMany(Pet)
Pet.belongsTo(Breed)

Person.hasMany(Pet)
Pet.belongsTo(Person)

cx.sync({ force: false }).then(() => { console.log('sincronized tables') })

module.exports = {
    Breed,
    Person,
    Pet,
    Animal,
    Shop
}
