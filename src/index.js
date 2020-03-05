const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')

const path = require('path')
const hbs = require('hbs')

const app = express()
const port = process.env.PORT

//Defining paths for express configuration
const publicDirPath = path.join(__dirname, '../public')
const viewspath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewspath)
hbs.registerPartials(partialsPath)

//setup static public directory to serve
app.use(express.static(publicDirPath))

//Route to root of website
app.get('/', (req, res) => {
    res.render('index')
})

// Route to gallery page
app.get('/gallery', (req, res) => {
    res.render('gallery')
})

app.get('/events', (req, res) => {
    res.render('events')
})

app.get('/sponsors', (req, res) => {
    res.render('sponsors')
})

app.get('/contacts', (req, res) => {
    res.render('contacts')
})

app.use(express.json())
app.use(userRouter)

app.listen(port, () => console.log(`Server is up on port ${port}`))
