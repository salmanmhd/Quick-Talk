import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(
  cors({
    origin: ['https://quick-talk-25wr.vercel.app', 'http://localhost:5173'],
    methods: ['GET', 'POST'],
  })
);

app.get('/', (req, res) => {
  res.send('Backend running on Vercel with WebSocket');
});

app.listen(3000, () => {
  console.log('Express server is running');
});
