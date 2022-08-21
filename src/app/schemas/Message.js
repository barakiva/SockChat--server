import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
	payload: {
		type: String,
		required: true
	},
	sender: {
		type: String,
		required: true
	},
	sentAt: {
		type: Date,
		required: true
	},
	read: {
		type: Date,
		required: false
	}
})
const Message = mongoose.model('Message', messageSchema)
export default Message