import express from 'express'
import {register, login} from './../database/UserDAO.js'

const authRoutes = express.Router()

authRoutes.post('/login', (req, res) => {
	// TODO isAuthenticated
	console.log("Authenticated!")
	res.json({requestBody: res.locals.user})
})

authRoutes.post('/register',register, (req, res)=> {
	res.json(res.locals.user)
})
export default authRoutes