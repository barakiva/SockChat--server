import express from 'express';
import cors from 'cors';
import path from 'path';
import url from 'url';
import http from 'http';
import {Server} from 'socket.io'

import mongoose from 'mongoose';
import session from 'express-session';
import passport from 'passport';
import crypto from 'crypto';
import local from 'passport-local';
import connectMongo from 'connect-mongo';

import dotenv from 'dotenv';
const config = dotenv.config();
const mongoUrl = process.env.DB_STRING;
const localStrategy = local.Strategy;

const connection = mongoose.createConnection(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// const MongoStore = new connectMongo(session, process.env.DB_STRING);
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
