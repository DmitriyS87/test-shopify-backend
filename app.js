import express from 'express';
import helmet from 'helmet';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import { rateLimiter } from './middlewares/rateLimiter';

dotenv.config();

const app = express();
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(rateLimiter);

app.get("/", (req, res) => {
  res.send("Hello world!");
});

export default app;