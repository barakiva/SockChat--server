import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import User from '.././schemas/User.js'
function verifyPassword(user) {
	
}
function isUserUnique(user) {

}
export function login(req, res, next){

	User.findOne({email: req.body.user.email}, (err, user)=> {
		if (err) { return err }
		if (!user) { return "no user found" }
		if (!user.verifyPassword(user)) { return "Wrong password!" }
		return "Successful auth!";
	})
}
export function register(req, res, next){
	if(req.body.user) {
		const doc = new User({
			email: req.body.email,
			password: req.body.password,
			name: 'bob',
			googleId: req.body.googleId
		})
		User.findOne({email: doc.email}, (err, user)=> {
			if (err) {
				next(new Error("Couldn't find user:" + err))
			}
			if (user) {
				next(new Error("Can't register user because email address is already in use."))
			}
			doc.save()
			res.locals.user = doc
			next()
		})
	}

}