import express from 'express'
import {register, login} from './../database/UserDAO.js'

const authRoutes = express.Router()

authRoutes.get('/home', (req, res) => {
	console.log('Hello home')
	res.send('Works')
})

authRoutes.post('/login', (req, res) => {
	// TODO isAuthenticated
	console.log("Authenticated!")
	res.json({requestBody: res.locals.user})
})

authRoutes.post('/register',register, (req, res)=> {
	console.log(req.body)
	res.json(res.locals.user)
})
export default authRoutes