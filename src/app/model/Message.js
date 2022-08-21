class Message {
	constructor(payload, sender, sentAt, read) {
		this.payload = payload;
		this.sender = sender;
		this.sentAt = sentAt;
		this.read = read;
	}
}