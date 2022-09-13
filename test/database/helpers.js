//Helpers
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config()

before(function () {
    mongoose.Promise = global.Promise;
    const MONGODB_URI = process.env.DB_STRING;
    mongoose.connect(MONGODB_URI);
    mongoose.connection
        .once('open', () => console.log('Connected!'))
        .on('error', (error) => {
            console.warn('Error : ', error);
        });
})
beforeEach(cleanDatabase)
function cleanDatabase(done) {
    mongoose.connection.collections.users.drop(()=>  {
        done();
    });
}
