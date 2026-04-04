import { tool } from "langchain";
import * as z from "zod";
import * as chrono from "chrono-node";

export const scheduleMeetingTool = tool(
  async ({ name, email, datetime }) => {
    const regex = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/;

    if (!regex.test(datetime)) {
      return `⚠️ Invalid format.

Use: YYYY-MM-DD HH:mm  
Example: 2026-04-10 09:00`;
    }

    // Parse manually (NO chrono)
    const [datePart, timePart] = datetime.split(" ");
    const [year, month, day] = datePart.split("-").map(Number);
    const [hours, minutes] = timePart.split(":").map(Number);

    // Convert IST → UTC manually
    const isoDatetime = new Date(
      Date.UTC(year, month - 1, day, hours - 5, minutes - 30),
    ).toISOString();

    console.log("🧠 RAW INPUT:", datetime);
    console.log("📅 Parsed:", { year, month, day, hours, minutes });
    console.log("🌍 ISO SENT:", isoDatetime);
    console.log(
      "🇮🇳 IST CHECK:",
      new Date(isoDatetime).toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
      }),
    );
    console.log("👤 Booking for:", { name, email });

    const res = await fetch("https://api.cal.com/v2/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CAL_API_KEY}`,
        "cal-api-version": "2026-02-25",
      },
      body: JSON.stringify({
        start: isoDatetime,
        eventTypeSlug: "lets-talk",
        username: "ritabrata-ghosh-ijlgtd",
        attendee: {
          name,
          email,
          timeZone: "Asia/Kolkata",
        },
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("❌ Cal API Error:", data);

      return `⚠️ That time is not available.

Try another time or book here:
👉 https://cal.com/ritabrata-ghosh-ijlgtd/lets-talk`;
    }

    const meetingUrl =
      data?.data?.location ||
      data?.data?.meetingUrl ||
      "Check your email for the meeting link";

    return `**Meeting booked successfully!**
            📅 **Time:** ${datetime}  
            🔗 **Join link:** ${meetingUrl}
            Looking forward to talking with you 🚀`;
  },
  {
    name: "schedule_meeting",
    description:
      "Book a meeting with Rito. Requires name, email and datetime in ISO format.",
    schema: z.object({
      name: z.string(),
      email: z.string(),
      datetime: z.string(),
    }),
  },
);
