import User from './../../src/app/schemas/User.js'
import chai from 'chai';
import mongoose from 'mongoose';

const assert = chai.assert;

describe('Database sanity', ()=> {
    it('Database connected', function () {
        assert.equal(mongoose.connection.readyState, 1)
    })
    it('Can persist documents', function ()  {
        const user = new User ({
            email: "user@user.com",
            password: "userpass",
            name: "user",
            googleId: "googleuser"
        })
        user.save().then((res)=> assert(res))
    })
})
