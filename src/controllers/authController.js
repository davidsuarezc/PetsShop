const { Person }           = require('../database')
const bcryptUtil           = require('../utils/bcrypt')
const jwtUtil              = require('../utils/jwt')
const { validationResult } = require('express-validator')
const fs                   = require('fs')

const registerUser = async (req, res) => {
    try {
        // VALIDATE BODY RULES
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // SAVE THE IMAGE EXTENSION
        const imgPath = req.file.path + '.' + req.file.mimetype.split('/')[1]
        fs.renameSync(req.file.path, imgPath)
        const imgName = req.file.filename + '.' + req.file.mimetype.split('/')[1]

        const newUser = {
            name: req.body.name,
            username: req.body.username,
            password: bcryptUtil.cryptText(req.body.password),
            photo: imgName
        }

        const user = await Person.create(newUser)
        res.json({
            data: user,
            success: `User registered`
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error })
    }
}

const loginUser = async (req, res) => {
    try {
        let user = await Person.findOne({ where: { username: req.body.username } })

        if (user) {
            user = user.dataValues

            const islogued = await bcryptUtil.comparePasswords(req.body.password, user.password)
            if (islogued) {
                const payload = {
                    userId: user.id
                }

                const token = jwtUtil.createToken(user)
                res.json({ token })
            }
            else
                res.status(401).json({ error: "Unauthorized" })
        }
        else
            res.status(401).json({ error: "Unauthorized" })

    } catch (error) {
        console.log(error)
        res.status(500).json({ error })
    }
}


module.exports = {
    registerUser,
    loginUser
}