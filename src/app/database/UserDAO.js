import mongoose from 'mongoose'
import User from '.././schemas/User.js'
function verifyPassword(user) {
	
}
function isUserUnique(user) {

}
export function myAuth(err, user) {
	if (err) { return err }
	if (!user) { return "no user found" }
	if (!user.verifyPassword(user)) { return "Wrong password!" }
	return 1;
}
export function authenticate(user){
	return User.findOne({email: user.email}, myAuth)
}
// export function register(req, res, next){
// 	if(req.body.user) {
// 		const doc = new User({
// 			email: req.body.user.email,
// 			password: req.body.user.password,
// 			name: req.body.user.name,
// 			googleId: req.body.user.googleId
// 		})
// 		// User.findOne({email: doc.email}, (err, user)=> {
// 		// 	if (err) {
// 		// 		next(new Error("Couldn't find user:" + err))
// 		// 	}
// 		// 	if (user) {
// 		// 		next(new Error("Can't register user because email address is already in use."))
// 		// 	}
// 		// 	doc.save()
// 		// 	res.json(doc)
// 		// })
// 		User.findOne({email: doc.email}).exec()
// 			.then((user)=> !user ? doc.save() : next(new Error("User already exists")))
// 			.err((err)=> next(new Error("Couldn't find user:" + err)))
// 	}
// }
export function register(req){
	if(req.body.user) {
		const doc = new User({
			email: req.body.user.email,
			password: req.body.user.password,
			name: req.body.user.name,
			googleId: req.body.user.googleId
		})
		User.findOne({email: doc.email}).exec()
			.then((user)=> !user ? doc.save() : next(new Error("User already exists")))
			.err((err)=> next(new Error("Couldn't find user:" + err)))
	}
	return null;
}
