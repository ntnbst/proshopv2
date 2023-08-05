import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import connectDB from './config/connectDB.js'
import productRoutes from './routes/productRoutes.js'

const port = process.env.PORT || 3000

connectDB()
const app = express()

app.get('/', (req, res) => {
  res.send('home page welcom')
})

app.use('/api/products/', productRoutes)

app.listen(port, () => {
  console.log(`server is running at ${port}`)
})
