import { NextRequest, NextResponse } from "next/server";
import * as z from "zod";

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().min(10).max(20),
  message: z.string().min(10).max(1000),
});

async function sendToDiscord(data: z.infer<typeof contactSchema>) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("DISCORD_WEBHOOK_URL not configured");
    return false;
  }
  const payload = {
    username: "Contact Bot",
    avatar_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSurBXPVgi4IhDkIGJ5sUWBX5Xwnf9sVITKXQ&s",
    embeds: [
      {
        title: "📩 New Contact Form Submission",
        color: 0x5865f2,
        fields: [
          { name: "👤 Name", value: data.name, inline: true },
          { name: "📧 Email", value: data.email, inline: true },
          { name: "📱 Phone", value: data.phone, inline: false },
          {
            name: "💬 Message",
            value:
              data.message.length > 900
                ? data.message.slice(0, 900) + "..."
                : data.message,
          },
        ],
        footer: {
          text: "Portfolio Contact Form",
        },
        timestamp: new Date().toISOString(),
      },
    ],
  };

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    return response.ok;
  } catch (error) {
    console.error("Discord webhook error:", error);
    return false;
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validatedData = contactSchema.parse(body);
    const discordMessage = await sendToDiscord(validatedData);
    if (!discordMessage) {
      return NextResponse.json(
        { error: "Failed to send notification" },
        { status: 500 }
      );
    }
    return NextResponse.json({ message: "Notification sent successfully" });
  } catch (error) {
    console.error("API Error:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          error: "Invalid form data",
          //   details: error.errors,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
