import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
	email: {
		type:String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: false
	},
	name: {
		type: String,
		required: true
	},
	googleId: {
		type: String,
		required: false,
		unique: true
	}
}, {timestamp: true})
const User = mongoose.model('User', userSchema)
export default User