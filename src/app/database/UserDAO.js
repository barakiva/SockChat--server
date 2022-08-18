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
	console.log(`Register method shows ${req.body.email}`)
	User.findOne({email: req.body.email}, (err, user)=> {
		if (err) { return err }
		if (!user) { return "no user found" }
		if (!user.isUserUnique(user)) { return "Wrong password!" }
		next(user)
	})
}