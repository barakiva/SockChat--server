import User from '../../src/app/schemas/User.js'
import chai from 'chai';
import mongoose from 'mongoose';
import {setupDatabase , cleanDatabase} from "./helpers.js";

const assert = chai.assert;

describe('Database setup', function () {

})
describe('Database sanity', ()=> {
    before('Database setup', setupDatabase)
    beforeEach('Clean database', cleanDatabase);
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
