import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, role, subject, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Missing required fields (name, email, phone, message)" },
        { status: 400 }
      );
    }

    const timestamp = new Date().toISOString();
    const submissionRecord = {
      targetEmail: "info@foodieree.com",
      timestamp,
      name,
      email,
      phone: `+91 ${phone}`,
      role: role || "General",
      subject: subject || "New Website Inquiry",
      message,
    };

    console.log("==========================================");
    console.log("📧 NEW CONTACT FORM SUBMISSION FOR FOODIEREE");
    console.log("Target Inbox:", "info@foodieree.com");
    console.log("From:", `${name} <${email}>`);
    console.log("Phone:", `+91 ${phone}`);
    console.log("Role / Persona:", role);
    console.log("Subject:", subject);
    console.log("Message:", message);
    console.log("==========================================");

    // Forward directly to info@foodieree.com inbox via email relay
    try {
      const emailPayload = {
        name,
        email,
        phone: `+91 ${phone}`,
        role,
        subject: subject || "New Foodieree Website Inquiry",
        message,
        _subject: `[Foodieree Contact] ${subject || "Inquiry"} from ${name} (${role})`,
        _template: "table",
        _captcha: "false",
      };

      await fetch("https://formsubmit.co/ajax/info@foodieree.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Referer: "https://foodieree.com",
          Origin: "https://foodieree.com",
        },
        body: JSON.stringify(emailPayload),
      });
    } catch (relayError) {
      console.error("Email relay forwarding note:", relayError);
    }

    // Also support custom webhook forwarding if set
    if (process.env.CONTACT_WEBHOOK_URL) {
      try {
        await fetch(process.env.CONTACT_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(submissionRecord),
        });
      } catch (webhookError) {
        console.error("Webhook forwarding failed:", webhookError);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Inquiry successfully dispatched to info@foodieree.com",
      data: submissionRecord,
    });
  } catch (error) {
    console.error("Error handling contact submission:", error);
    return NextResponse.json(
      { error: "Internal server error processing contact submission" },
      { status: 500 }
    );
  }
}
