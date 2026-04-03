import { tool } from "langchain";
import * as z from "zod";
import * as chrono from "chrono-node";

export const scheduleMeetingTool = tool(
  async ({ name, email, datetime }) => {
    const parsedDate = chrono.parseDate(datetime);
    const ISODatetime = parsedDate?.toISOString();

    if (!parsedDate) {
      throw new Error("Invalid date format");
    }
    if (parsedDate.getTime() < Date.now()) {
      return "⚠️ That time is in the past. Please choose a future time.";
    }

    const res = await fetch("https://api.cal.com/v2/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CAL_API_KEY}`,
        "cal-api-version": "2026-02-25",
      },
      body: JSON.stringify({
        start: ISODatetime,
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
      console.error(data);
      throw new Error("Booking failed");
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
