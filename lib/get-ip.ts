import { NextRequest } from "next/server";

export function getClientIp(req: NextRequest) {
  const cfIP = req.headers.get("cf-connecting-ip");
  if (cfIP) return cfIP;
  const forwardedFor = req.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }
  return "unknown";
}
