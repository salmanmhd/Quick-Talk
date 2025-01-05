import http from 'http';
import express from 'express';
import { Server } from 'socket.io';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

app.use(cors());

io.on('connection', (socket) => {
  console.log('a user connected', socket.id);

  socket.on('msg', (data) => {
    console.log(data);
    io.emit('mg', data);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(5000, () => {
  console.log(`Server running on ${PORT}}`);
});
