const { Animal } = require('../database')

const getAnimals = async (req, res) => {
    const allAnimals = await Animal.findAll()
    console.log('Accessed by ' + req.body.userId)
    res.json({
        data: allAnimals,
        success: `All animals`
    })
}

const saveAnimal = async (req, res) => {
    try {
        const newAnimal = {
            price:  req.body.price,
            amount: req.body.amount,
            ShopId: req.body.ShopId,
            BreedId: req.body.BreedId
        }

        const newA = await Animal.create(newAnimal)
        res.json({
            data: newA,
            success: `Animal saved`
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error })
    }
}


module.exports = {
    getAnimals,
    saveAnimal
}