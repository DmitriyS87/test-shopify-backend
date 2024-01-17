import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import { rateLimiter } from "./middlewares/rateLimiter.js";
import productsRoute from "./routes/productRoutes.js";
import { morganConfig } from "./core/config.js";

const app = express();

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

app.use(helmet());
app.use(morgan(morganConfig.logLvl));
app.use(express.json());
app.use(cors());
app.use(rateLimiter);

app.use("/products", productsRoute);

app.get("/", (req, res) => {
  res.send("Server started successfully");
});

export default app;
