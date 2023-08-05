import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import connectDB from './config/connectDb.js'
import products from './data/products.js'

const port = process.env.PORT || 3000

connectDB()
const app = express()

app.get('/', (req, res) => {
  res.send('home page welcom')
})

app.get('/api/products/', (req, res) => {
  res.json(products)
})

app.get('/api/product/:id', (req, res) => {
  const product = products.find((prod) => prod._id === req.params.id)
  res.send(product)
})

app.listen(port, () => {
  console.log(`server is running at ${port}`)
})
