import express from 'express';
import cors from 'cors';
import path from 'path';
import url from 'url';
import http from 'http';
import {Server} from 'socket.io'

import mongoose from 'mongoose';
import session from 'express-session';
import passport from 'passport';
import crypto from 'crypto';
import connectMongo from 'connect-mongo';

import dotenv from 'dotenv';
// import {strategy} from './passport-config.js'
// Config
const app = express();
const config = dotenv.config();
// MongoDB
// const mongoUrl = process.env.DB_STRING;
// const connection = mongoose.createConnection(mongoUrl, {
// 	useNewUrlParser: true,
// 	useUnifiedTopology: true
// });
//	Passport 
// const localStrategy = strategy;
import passportLocal from 'passport-local';
// const LocalStrategy = passportLocal('LocalStrategy');
console.dir(Object.getOwnPropertyNames(passportLocal))
console.dir(Object.getOwnPropertyNames(passportLocal.Strategy))
console.log("".)
console.dir(passportLocal.Strategy)
// passport.use(new LocalStrategy(
// 	function(username, password, done) {
// 	  User.findOne({ username: username }, function (err, user) {
// 		if (err) { return done(err); }
// 		if (!user) { return done(null, false); }
// 		if (!user.verifyPassword(password)) { return done(null, false); }
// 		return done(null, user);
// 	  });
// 	}
//   ));
//	Middleware
app.use(express.json())
app.use(express.urlencoded({
	extended: true
}))
const middleware = (req, res, next)=> {
	console.log('Stuck in the middle')
	next()
}
//	Routing
app.post('/login', passport.authenticate('local', 
	{failureRedirect: '/login', failureMessage: true}), (req, res) => {
		console.log("Authenticated!")
		res.send('got it')
})

app.post('/login', middleware, (req, res) => {
	console.log("Authenticated!")
	console.log(req.body)
	res.json({requestBody: req.body})
})
// const MongoStore = new connectMongo(session, process.env.DB_STRING);
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });
const port = 8081;
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