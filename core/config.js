export const isDev = process.env.IS_DEV === "TRUE";

// middleware/rateLimiter.js
export const rateLimiterConfig = {
  windowMs: 60 * 1000, // 1 minutes
  max: 50, // limit each IP to 10 requests per windowMs
  message: `Request limit reached. Try again in next 1 min!`,
};

// morgan
export const morganConfig = {
  logLvl: !isDev ? "dev" : "tiny",
};

// db
export const dbConfig = {
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  password: process.env.POSTGRES_PASSWORD,
  db: process.env.POSTGRES_NAME,
  port: process.env.POSTGRES_PORT,
  pool: {
    max: Number(process.env.DB_POOL_MAX) || 10,
    min: Number(process.env.DB_POOL_MIN) || 0,
    acquire: Number(process.env.DB_POOL_ACQUIRE) || 30000,
    idle: Number(process.env.DB_POOL_IDLE) || 10000,
  },
  dbChunkSize: process.env.DB_CHUNK_SIZE || 10,
};
