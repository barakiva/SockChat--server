import express from 'express'
import passport from 'passport'
import '.././auth/google-auth.js'

const loginRouter = express.Router()

loginRouter.get('/auth/google', 
	passport.authenticate('google', {scope: ['email', 'profile']}))
loginRouter.get('/google/callback', 
	passport.authenticate('google', {
		successRedirect: '/protected',
		failureRedirect: '/auth/google/failure'
		}))