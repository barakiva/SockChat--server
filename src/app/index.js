import express from 'express';
import cors from 'cors';
import path from 'path';
import url from 'url';
import http from 'http';
import {Server} from 'socket.io'
const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });
const port = 8080;

io.on('connection', socket => {
    console.info('Connected')
    socket.on('message', msg => {
        console.debug(msg)
        socket.emit('messageReceived', msg=> {
            
        })
    })
})
const __dirname = path.dirname(url.fileURLToPath(import.meta.url))

server.listen(port, (req,res) => {
    console.log(`Listening on port ${port}`)
})
