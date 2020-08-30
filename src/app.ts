import express from 'express';
import { PORT } from './config';
import authRouter from './api/auth/auth';

const app = express();

app.use(express.json());

app.use(express.static('public'));

app.use('/api/auth', authRouter);

app.listen({ port: PORT }, () => {
  console.log("server it's work", PORT);
});
