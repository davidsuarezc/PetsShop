const express = require('express')
require('dotenv').config()
const bodyParser = require('body-parser')
const path = require('path')
//const multer = require('multer')
const logger = require('morgan')

const app = express()

// SYNC DB
require('./database')

// SETTINGS
app.set('port', process.env.PORT || 3000)

// MIDDLEWARES
app.use(logger())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
//app.use(multer({ dest: path.join(__dirname, 'public/') }).single("avatar"))

// ROUTES
app.use("/api", require('./routes/index'))

// PUBLIC FOLDER
app.use(express.static(path.join(__dirname, 'public')))



// START SERVER
app.listen(app.get('port'), () => {
    console.log(`Server running on port `, app.get('port'))
})
