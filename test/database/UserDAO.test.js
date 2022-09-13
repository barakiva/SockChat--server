import mongoose from 'mongoose';
import User from "../../src/app/schemas/User.js";
import {authenticate, myAuth} from '../../src/app/database/UserDAO.js'
import chai from 'chai';
import dotenv from 'dotenv';

const assert = chai.assert;
dotenv.config()

describe('User Authentication', ()=> {
	const user = new User ({
		email: "user@user.com",
		password: "userpass",
		name: "user",
		googleId: "googleuser"
	})
	const fakeUser = new User ({
		email: "1user@user.com",
		password: "1userpass",
		name: "1user",
		googleId: "1googleuser"
	})
	before(function() {
		user.save()
	})
	it('Existing user can be found',  ()=> {
		console.dir(myAuth(user))
		assert.equal(myAuth(user),1)
	})
	it('Fake user CANNOT be found',  ()=> {
		console.dir(myAuth(fakeUser))
		assert.equal(myAuth(fakeUser),"no user found")
	})
});