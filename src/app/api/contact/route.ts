import { Resend } from 'resend';

type RateEntry = { count: number; resetAt: number };
const RATE_WINDOW_MS = 30 * 60 * 1000;
const RATE_MAX = 3;

const rateStore: Map<string, RateEntry> =
  (globalThis as unknown as { __contactRateStore?: Map<string, RateEntry> })
    .__contactRateStore ?? new Map();

(globalThis as unknown as { __contactRateStore?: Map<string, RateEntry> }).__contactRateStore =
  rateStore;

function getClientIp(req: Request) {
  const forwarded = req.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0]?.trim() ?? 'unknown';
  return req.headers.get('x-real-ip') ?? 'unknown';
}

export async function POST(req: Request) {
  try {
    const ip = getClientIp(req);
    const now = Date.now();
    const entry = rateStore.get(ip);
    if (!entry || entry.resetAt < now) {
      rateStore.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    } else if (entry.count >= RATE_MAX) {
      return new Response('Too many requests', { status: 429 });
    } else {
      entry.count += 1;
      rateStore.set(ip, entry);
    }

    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response('Missing fields', { status: 400 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['jakkmalm@gmail.com'],
      replyTo: email,
      subject: `Nytt meddelande från ${name}`,
      text: `Namn: ${name}\nE-post: ${email}\n\n${message}`,
    });

    return new Response('OK', { status: 200 });
  } catch (err) {
    return new Response('Server error', { status: 500 });
  }
}
