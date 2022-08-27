const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

const pollController = require('./pollController')
const app = express()

app.set('view engine', 'ejs')

app.use(morgan('dev'))

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/create', pollController.createPollGetController)
app.post('/create', pollController.createPollPostController)


app.get('/', (req, res) => {
    res.render('home')
})

app.listen(4000,() =>{
    console.log('Server IS liseting on your port 4000')
})

// mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser:true}) 