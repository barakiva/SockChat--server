import express from 'express';
import session from 'express-session'
import passport from 'passport';
import dotenv from 'dotenv';
import './database/mongo.js'
import authRoutes from  './routes/auth-routes.js'
import * as ChatService from './services/chat-service.js'
import http from 'http';
import {Server} from 'socket.io'
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