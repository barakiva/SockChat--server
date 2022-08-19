import express from 'express';
import session from 'express-session'
import http from 'http';
import {Server} from 'socket.io'
import passport from 'passport';
import dotenv from 'dotenv';
import mongoose from 'mongoose'
import {register, login} from './database/UserDAO.js'
// Config
dotenv.config();
const app = express();
// MongoDB
mongoose
	.connect(process.env.DB_STRING)
	.then((res)=> console.log('Connection successful!'))
//	Passport 

//	Middleware
app.use(express.json())
app.use(express.urlencoded({
	extended: true
}))
app.use(session({
	resave: false,
	saveUninitialized: true,
	secret: 'bla bla bla' 
}))
app.use(passport.initialize())
app.use(passport.session())

app.post('/login', (req, res) => {
	// TODO isAuthenticated
	console.log("Authenticated!")
	res.json({requestBody: res.locals.user})
})

app.post('/register',register, (req, res)=> {
	res.json(res.locals.user)
})
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });
const port = process.env.PORT;
io.on('connection', socket => {
	console.info('Connected')
	socket.on('message', msg => {
		console.debug(msg)
		socket.emit('messageReceived', msg=> {

		})
	})
})
server.listen(port, (req,res) => {
	console.log(`Listening on port ${port}`)
})