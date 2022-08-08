import { Strategy as LocalStrategy} from 'passport-local'
import crypto from 'crypto';

const users = [
    {
        username: 'root',
        password: 'root',
        email: 'root@root.com'
    },
    {
        username: 'bar',
        password: 'bar',
        email: 'bar@gmail.com'
    }
]
const salt = 'salt'
//Handlers
function handleEncrypterError(err, cb){
    if (err) { return cb(err); } //If password encryption fails
}
function handleIncorrectPassword(cb) {
    return cb(null, false, { message: 'Incorrect username or password.' });
}
function userDoesntExist(user, cb){ 
    return cb(null, false, { message: 'Incorrect username or password.' });
}
function getUser(username) {
    return users.find((usr)=> usr.username === username);
}
// Strategy
const strategy = new LocalStrategy(function verify(username, password, cb) {
    getUser(username, (user)=> {
      if (!user) userDoesntExist(user, cb);
      // User exists
      crypto.pbkdf2(password, salt, 310000, 32, 'sha256', (err, hashedPassword)=> {
            if(err) handleEncrypterError(err, cb);
            if (!crypto.timingSafeEqual(user.password, hashedPassword))
                handleIncorrectPassword(cb)
            return cb(null, user); // If user exists & passowrd correct
      });
    });
  });

export default strategy;