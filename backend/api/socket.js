import { Server } from 'socket.io';

export default (req, res) => {
  // This is a workaround to handle WebSocket with Serverless
  if (req.method === 'GET') {
    // Create the Socket.io server instance
    const io = new Server(res.socket.server, {
      path: '/api/socket', // Custom path for WebSocket connection
      transports: ['websocket'], // Using WebSocket as the transport
    });

    io.on('connection', (socket) => {
      console.log('a user connected', socket.id);

      // Handling incoming messages
      socket.on('msg', (data) => {
        console.log('Message received:', data);
        io.emit('mg', data); // Broadcast message to all connected clients
      });

      // Handling disconnection
      socket.on('disconnect', () => {
        console.log('user disconnected');
      });
    });

    // Send a response once WebSocket is running
    res.status(200).send('WebSocket is running');
  }
};
