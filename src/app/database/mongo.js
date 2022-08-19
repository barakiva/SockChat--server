import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
// MongoDB
mongoose
	.connect(process.env.DB_STRING)
	.then((res)=> console.log('MongoDB connection successful!'))