import { Resend } from 'resend';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response('Missing fields', { status: 400 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['jakkmalm@gmail.com'],
      reply_to: email,
      subject: `Nytt meddelande från ${name}`,
      text: `Namn: ${name}\nE-post: ${email}\n\n${message}`,
    });

    return new Response('OK', { status: 200 });
  } catch (err) {
    return new Response('Server error', { status: 500 });
  }
}
