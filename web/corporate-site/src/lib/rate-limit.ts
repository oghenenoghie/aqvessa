/**
 * A sliding-window limit held in server memory. On serverless hosting each instance keeps its own
 * counter, so this slows a single client down but does not stop a distributed one. Add a Vercel
 * Firewall rate-limit rule on the enquiry route for a hard limit.
 */
const hits = new Map<string, number[]>();

export function rateLimited(key: string, { limit = 5, windowMs = 15 * 60 * 1000, now = Date.now() } = {}): boolean {
  const recent = (hits.get(key) ?? []).filter((t) => now - t < windowMs);
  if (recent.length >= limit) {
    hits.set(key, recent);
    return true;
  }
  recent.push(now);
  hits.set(key, recent);
  if (hits.size > 5000) for (const [k, v] of hits) if (v.every((t) => now - t >= windowMs)) hits.delete(k);
  return false;
}

export const resetRateLimit = () => hits.clear();
