import colors from 'colors'
import connectDB from './config/connectDB.js'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import Order from './models/orderModel.js'
import Product from './models/productModel.js'
import User from './models/userModel.js'
import users from './data/users.js'
import products from './data/products.js'

dotenv.config()

const importData = async () => {
  try {
    await connectDB()
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    const insertedUser = await User.insertMany(users)
    const adminUser = insertedUser[0]._id
    const sampleProduct = products.map((prod) => {
      return { ...prod, user: adminUser }
    })
    await Product.insertMany(sampleProduct)

    console.log('Data imported'.green.inverse)
    process.exit()
  } catch (err) {
    console.error(`${err}`.red.inverse)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await connectDB()
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    console.log('data destroyed'.red.inverse)
    process.exit()
  } catch (err) {
    console.error(`${err}.red.inverse`)
    process.exit(1)
  }
}

if (process.argv[2] == '-d') {
  destroyData()
} else {
  importData()
}
