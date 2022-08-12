// import passportLocal from 'passport-local';
// const Strategy = passportLocal('Strategy');
// import * as connection from './connection.js';
// import bcrypt from 'bcryptjs';

// export const strategy = new Strategy(
// 	{ usernameField: 'email' }, 
// 	function(email, password, cb) {
// 		connection.query('SELECT * FROM User WHERE email = ? ', email, function(err, users) {
// 			if (err) {
// 				return cb({ message: 'Internal Server error', statusCode: 500 }, null);
// 			} // No DB errors
		
// 			const user = users[0];
// 			if (!user) {
// 				return cb({ message: 'No user found!!', statusCode: 400 }, null);
// 			} // Users exists
		
// 			const userPassword = users[0].password;
// 			const isPasswordValid = bcrypt.compareSync(password, userPassword);
		
// 			if (!isPasswordValid) {
// 				return cb({ message: 'Email or Password is incorrect', statusCode: 400 }, null);
// 			} // Password of user that exists is valid
// 			const currentUser = users[0];
// 			cb(null, currentUser); // Successful athentication
// 		});
// });

