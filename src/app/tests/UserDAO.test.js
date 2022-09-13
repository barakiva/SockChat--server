import {login} from './../schemas/User.js'


describe('User DAO returns user', ()=> {
    test('test', ()=> {
        expect(login({email: req.body.user.email}))
    })
})