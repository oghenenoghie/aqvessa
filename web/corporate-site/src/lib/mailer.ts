import { CONTACT } from "@/lib/site";

export type Mail = { subject: string; text: string; replyTo: string };

/**
 * Delivers an enquiry to the company mailbox through the Resend HTTP API.
 * Environment: RESEND_API_KEY (required), ENQUIRY_FROM (a sender on a domain verified with Resend),
 * ENQUIRY_TO (defaults to the company email). Returns false when delivery fails or is not configured.
 */
export async function sendEnquiryMail(mail: Mail): Promise<boolean> {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[enquiry] RESEND_API_KEY is not set; development mode, mail not sent.\n" + mail.subject + "\n" + mail.text);
      return true;
    }
    console.error("[enquiry] RESEND_API_KEY is not set; the enquiry was not delivered.");
    return false;
  }
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.ENQUIRY_FROM ?? `Aqvessa website <enquiries@aqvessa.org>`,
        to: [process.env.ENQUIRY_TO ?? CONTACT.email],
        reply_to: mail.replyTo,
        subject: mail.subject.replace(/[\r\n]+/g, " "),
        text: mail.text,
      }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) console.error(`[enquiry] mail provider returned ${res.status}`);
    return res.ok;
  } catch (error) {
    console.error("[enquiry] mail delivery failed", error instanceof Error ? error.message : error);
    return false;
  }
}
