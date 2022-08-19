import http from 'http';
import {Server} from 'socket.io'
import dotenv from 'dotenv';

dotenv.config();
const port = process.env.PORT;
export function init(app){
	const server = http.createServer(app);
	const io = new Server(server,{cors:{origin:'*'}});
	io.on('connection', socket => {
		console.info('Connected')
		socket.on('message', msg => {
			console.debug(`Message sent TO server >> ${msg}`)
			socket.emit('messageReceived', msg => {
				console.debug(`Message sent FROM server >> ${msg}`)
			})
		})
		socket.on('connect_error',()=> {
			console.debug("SocketIO connection error");
		})
		socket.on('error', ()=> {
			console.debug("Socket IO error");
		})
	})
	server.listen(port, (req,res) => {
		console.log(`Express server listening on port ${port}`)
	})
}