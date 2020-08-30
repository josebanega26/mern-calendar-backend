import express from 'express';
import { PORT } from './config';
import authRouter from './api/auth/auth';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser());
app.use(express.static('public'));

app.use('/api/auth', authRouter);

app.listen({ port: PORT }, () => {
  console.log("server it's work", PORT);
});
