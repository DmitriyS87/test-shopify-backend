import rateLimit from "express-rate-limit";

export const rateLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minutes
  max: 50, // limit each IP to 10 requests per windowMs
  message: `Request limit reached. Try again in next 1 min!`,
});
