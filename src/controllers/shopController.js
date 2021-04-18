const { Shop, Pet, Animal } = require('../database')

const getShops = async (req, res) => {
    const allShops = await Shop.findAll()
    console.log('Accessed by ' + req.body.userId)
    res.json({
        data: allShops,
        success: `All shops`
    })
}

// Parameters: petName: string, animalId: int
const sellAnimal = async (req, res) => {
    try {
        
    // El userId viene en el body porq es payload del jwt decodificado
    const { petName, animalId, userId } = req.body
    
    const animal = await Animal.findByPk(animalId)

    if(animal)
    {
        const cantToSet = animal.amount - 1
        if(cantToSet < 0)
        {
            res.state(409).json({ error: 'This shop have only ' + animal.amount + ' animals of this breed.' })
        }    
        else
        {          
            Pet.create({ name: petName, BreedId: animal.BreedId, PersonId: userId })
            .then((createdPet) => {             
                if(cantToSet === 0)
                {
                    animal.destroy()
                }
                else
                {
                    animal.amount= cantToSet 
                    animal.save()
                }
                res.status(201) .json({newPet: createdPet})
            })          
        }
    }
    else
        res.status(404).json({error: 'Do not exist an animal with that id'})
    
    } catch (error) {
        res.status(500).json({error: error})
    }
}

const saveShop = async (req, res) => {
    try {
        const newShop = await Shop.create(req.body)
        res.json({
            data: newShop,
            success: `Shop saved`
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error })
    }
}


const updateShop = async (req, res) => {
    try {
        await Shop.update(req.body, {
            where: { id: req.params.id }
        })
        res.json({ success: `Shop ${req.params.id} updated` })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error })
    }
}



const deleteShop = async (req, res) => {
    try {
        await Shop.destroy({ where: { id: req.params.id } })
        res.json({ success: `Shop ${req.params.id} deleted` })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error })
    }
}

const findShopByPk = async (req, res) => {
    try {
        const shop = await Shop.findByPk(req.params.id)
        if (shop) {
            res.json({
                data: shop,
                success: `Shop ${req.params.id} finded`
            })
        }
        res.status(404).json({ error: `Shop ${req.params.id} not found` })

    } catch (error) {
        console.log(error)
        res.status(500).json({ error })
    }
}


module.exports = {
    getShops,
    saveShop,
    updateShop,
    deleteShop,
    findShopByPk,
    sellAnimal
}