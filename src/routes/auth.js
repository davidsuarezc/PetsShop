const route       = require('express').Router()
const auth        = require('../controllers/authController')
const { check }   = require('express-validator')
const path        = require('path')
const multer      = require('multer')

const rules = [
    check('username', 'Username must be an email').isEmail().normalizeEmail(),
    check('password', 'Password string must be greater then 6').isLength({ min: 6 })
]

const upload = multer({ dest: path.join(__dirname, '../public/') })

// POST Params: name, username, password, avatar: photo
route.post('/register', upload.single("avatar"), rules, auth.registerUser)

// POST Params: username, password
route.post('/login', auth.loginUser),

module.exports = route