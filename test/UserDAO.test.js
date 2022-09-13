import User from '../src/app/schemas/User.js'
import chai from 'chai';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config()


// describe('User Registration', ()=> {
// 	it('Registration returns User',  ()=> {
// 		user.save()
// 			.then(()=> {
// 				assert(!user.isNew)
// 			})
// 	})
// });