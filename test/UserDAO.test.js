// import {register, login} from '../app/database/UserDAO.test.js'
import User from '../src/app/schemas/User.js'
import chai from 'chai';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config()

const assert = chai.assert;

// tells mongoose to use ES6 implementation of promises
mongoose.Promise = global.Promise;
const MONGODB_URI = process.env.DB_STRING;
mongoose.connect(MONGODB_URI);

mongoose.connection
	.once('open', () => console.log('Connected!'))
	.on('error', (error) => {
		console.warn('Error : ', error);
	});
// Dummy user
const user = new User ({
	email: "user@user.com",
	password: "userpass",
	name: "user",
	googleId: "googleuser"
})
// runs before each test
beforeEach((done) => {
	mongoose.connection.collections.users.drop(() => {
		done();
	});
});

describe('Database sanity', ()=> {
	it('Database connected', () => {
		assert.equal(mongoose.connection.readyState, 1)
	})
	it('Can persist documents', () => {
		user.save().then((res)=> assert(res))
	})
})

describe('User Registration', ()=> {
	it('Registration returns User',  ()=> {
		user.save()
			.then(()=> {
				assert(!user.isNew)
			})
	})
});