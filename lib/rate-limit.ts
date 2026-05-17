import { redis } from "./redis";

const WINDOW_SIZE = 60 * 10;
const MAX_REQUESTS = 7;

export async function rateLimit(ip: string) {
  const key = `ratelimit:contact:${ip}`;
  const requests = await redis.incr(key);

  if (requests === 1) {
    await redis.expire(key, WINDOW_SIZE);
  }

  const ttl = await redis.ttl(key);
  return {
    success: requests <= MAX_REQUESTS,
    remaining: Math.max(MAX_REQUESTS - requests),
    reset: ttl,
  };
}
