import 'dotenv/config';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import { rateLimiter } from './middlewares/rateLimiter.js';
import productsRoute from './routes/productRoutes.js';

const app = express();

app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(rateLimiter);
app.get("/", (req, res) => {
  res.send("Hello world!");
});
app.use('/products', productsRoute);

export default app;