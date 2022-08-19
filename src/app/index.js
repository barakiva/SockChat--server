import express from 'express';
import session from 'express-session'
import passport from 'passport';
import dotenv from 'dotenv';
import './database/mongo.js'
import authRoutes from  './routes/auth-routes.js'
import * as ChatService from './services/chat-service.js'
// Config
dotenv.config();
const app = express();
const port = process.env.PORT;
//	Middleware
app.use(express.json())
app.use(express.urlencoded({
	extended: true
}))
app.use(session({
	resave: false,
	saveUninitialized: true,
	secret: process.env.SECRET 
}))
//	Auth routing
app.use('/', authRoutes)
//	Passport 
app.use(passport.initialize())
app.use(passport.session())
//	Socket.IO
ChatService.init(app)