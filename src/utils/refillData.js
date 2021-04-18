const { Shop, Breed, Animal } = require('../database')

const refillData = async (req, res) => {
        await Shop.create({ name: 'Rintintin Shop' })
        await Shop.create({ name: 'Cuban Pets' })

        await Breed.create({ name: 'Poddle' })
        await Breed.create({ name: 'Pastor aleman' })
        await Breed.create({ name: 'Gato Siames' })

        await Animal.create({ price: 500, amount: 14, BreedId: 1, ShoopId: 1 })
        await Animal.create({ price: 800, amount: 7, BreedId: 2, ShoopId: 1 })
        await Animal.create({ price: 900.50, amount: 10, BreedId: 3, ShoopId: 2 })

        res.send('Test data created!')
}

module.exports = refillData