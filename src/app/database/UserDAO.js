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
	const doc = new User({
		email: req.body.email,
		password: req.body.password,
		name: 'bob',
		googleId: "goog"
	})
	User.findOne({email: req.body.email}, (err, user)=> {
		if (err) { next(err) }
		if (user) { next("User already exists") }
		// if (!user.isUserUnique(user)) { return "Wrong password!" }
		if (!user) { 
			doc.save()
		}
		next(user)
	})
}