import mongoose from 'mongoose'
import passport from 'passport'
import passportGoogle from 'passport-google-oauth20'
import dotenv from 'dotenv'
dotenv.config()

passport.use(new passportGoogle.Strategy({
	clientID: process.env.GOOGLE_CLIENT_ID,
	clientSecret: process.env.GOOGLE_CLIENT_SECRET,
	callbackURL: "http://localhost:5000/google/callback", // URL's Google SENDS authenticate requests
	passReqToCallback: true
	},
	function(request, accessToken, refreshToken, profile, done) {
		return done(null, profile)
	}
))
passport.serializeUser(function(user,done){
	done(null, user)
})
passport.deserializeUser(function(user,done){
	done(null, user)
})