import rateLimit from "express-rate-limit";
import { rateLimiterConfig } from "../core/config.js";

export const rateLimiter = rateLimit(rateLimiterConfig);
