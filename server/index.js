const express = require('express')
const app = express()
const bodyParser = require('body-parser')

//? Routes
import products from './routes/products'
import categories from './routes/categories'
import reviews from './routes/reviews'
import options from './routes/options'

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// Routes
app.use('/api/products', products)
app.use('/api/categories', categories)
app.use('/api/reviews', reviews)
app.use('/api/options/', options)

//? ---< Start server >---
app.listen(3003, () => {
    console.log('Server star...')
})