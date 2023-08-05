import mongoose from 'mongoose'

export default async function connectDB() {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`Mongo DB connected: ${conn.connection.host}`)
  } catch (error) {
    console.log(`Error ${error.message}`)
    process.exit(1)
  }
}
