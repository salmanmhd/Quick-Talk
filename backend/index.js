import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(
  cors({
    origin: 'https://quick-talk-25wr.vercel.app',
    methods: ['GET', 'POST'],
  })
);

app.use((req, res, next) => {
  res.header(
    'Access-Control-Allow-Origin',
    'https://quick-talk-25wr.vercel.app'
  );
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.get('/', (req, res) => {
  res.send('Backend running on Vercel with WebSocket');
});

app.listen(3000, () => {
  console.log('Express server is running');
});
