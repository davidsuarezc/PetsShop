const jwt = require('jsonwebtoken')
require('dotenv').config()

const createToken = (user) => {
    const payload = {
        userId: user.id
    }

    const token = jwt.sign(payload, process.env.JWT_KEY, { expiresIn: '1d' })
    return token
}

const verifyToken = (token) => {
    try {
        return jwt.verify(token, process.env.JWT_KEY)
    } catch (error) {

    }

}

module.exports = { createToken, verifyToken }