import { Server } from 'socket.io';
import http from 'http';

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.status(200).end();
    return;
  }

  const server = http.createServer((req, res) => res.end('Socket server'));
  const io = new Server(server, {
    cors: {
      origin: ['https://quick-talk-25wr.vercel.app', 'http://localhost:5173'],
      methods: ['GET', 'POST'],
    },
  });

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

  server.listen(3000, () => console.log('Socket server is running'));
}
