const bcrypt = require('bcryptjs')

const cryptText = (text) => {
    return bcrypt.hashSync(text)
}

const comparePasswords = async (plane, encrypted) => {
    return await bcrypt.compare(plane, encrypted)
}

module.exports = { cryptText, comparePasswords }