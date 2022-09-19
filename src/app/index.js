import express from 'express';
import session from 'express-session'
import passport from 'passport';
import dotenv from 'dotenv';
import '#ok/database/mongo.js'
import authRoutes from  './routes/auth-routes.js'
import * as ChatService from './services/chat-service.js'

import mongoose from "mongoose";
import User from '#ok/schemas/User.js'



mongoose
	.connect(process.env.DB_STRING)
	.then((res)=> console.log('MongoDB connection successful!'))
	.catch((err)=> console.log(err))

User.findOne({name: "user"})
	.then((res)=> console.log(res))
// Config
dotenv.config();
const app = express();
//Middleware
//	Express
app.use(express.json())
app.use(express.urlencoded({
	extended: true
}))
app.use(session({
	resave: false,
	saveUninitialized: true,
	secret: process.env.SECRET 
}))
//	Passport
app.use(passport.initialize())
app.use(passport.session())
//Routing
//	Auth
app.use('/', authRoutes)
//Socket.IO
ChatService.init(app)