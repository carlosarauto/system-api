import express from 'express';
import 'express-async-errors';
import { errorHandler } from './errors';
import { clientRouter, userRouter } from './router';

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');

  next();
});

app.use('/users', userRouter);
app.use('/clients', clientRouter);

app.use(errorHandler);

export default app;
