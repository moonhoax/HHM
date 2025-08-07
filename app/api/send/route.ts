import { NextRequest, NextResponse } from "next/server";
import { ServerClient } from "postmark";

// Initialize Postmark client
const postmarkClient = new ServerClient(process.env.POSTMARK_API_KEY || "");

export async function POST(req: NextRequest) {
  const { name, email, service } = await req.json();

  if (!name || !email || !service) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  try {
    const result = await postmarkClient.sendEmail({
      From: "noreply@hiddenhand.biz", // 🔐 Must be verified in Postmark
      To: "creators@hiddenhand.biz",
      Subject: "New Quote Request",
      TextBody: `
New Quote Request

Name: ${name}
Email: ${email}
Service: ${service}
      `,
      MessageStream: "outbound", // or "broadcast" depending on how your Postmark account is set up
    });

    return NextResponse.json({ success: true, messageId: result.MessageID });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
