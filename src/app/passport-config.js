import passport from "passport"
import passportLocal from 'passport-local'
import User from '.././schemas/User.js'

var query = new User({
		username: "bar",
		password: "bar"
	}),
	update = { expire: new Date() },
	options = { upsert: true, new: true, setDefaultsOnInsert: true }
User.findOneAndUpdate(query, update, options)
// Authentication
function verifyPassword(passsword){
	return true
}
function verifyUser(username, password, done) {
	User.findOne({username: username}, function (err, user) {
	  if (err) { return done(err); }
	  if (!user) { return done(null, false); }
	  if (!verifyPassword(password)) { return done(null, false); }
	  return done(null, user);
	});
}
// Middleware
passport.serializeUser(function(user, done) {
done(null, user);
});
passport.deserializeUser(function(user, done) {
done(null, user);
});
const CredentialStrategy =  new passportLocal.Strategy(verifyUser)
export default CredentialStrategy