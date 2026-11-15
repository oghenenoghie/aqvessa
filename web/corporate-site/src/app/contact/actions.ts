"use server";

import { headers } from "next/headers";
import { enquirySubject, HONEYPOT, enquiryText, hasErrors, INITIAL_STATE, readValues, validateEnquiry, type EnquiryState } from "@/lib/enquiry";
import { sendEnquiryMail } from "@/lib/mailer";
import { rateLimited } from "@/lib/rate-limit";
import { CONTACT } from "@/lib/site";

export async function submitEnquiry(_previous: EnquiryState, formData: FormData): Promise<EnquiryState> {
  const values = readValues(formData);

  // Honeypot: report success without sending anything, so a bot learns nothing.
  const trap = formData.get(HONEYPOT);
  if (typeof trap === "string" && trap.trim() !== "") return { status: "success", values: INITIAL_STATE.values, errors: {} };

  const errors = validateEnquiry(values);
  if (hasErrors(errors)) return { status: "invalid", values, errors };

  const h = await headers();
  const ip = h.get("x-forwarded-for")?.split(",")[0]?.trim() || h.get("x-real-ip") || "unknown";
  if (rateLimited(ip)) {
    return {
      status: "failed",
      values,
      errors: {},
      message: `You have sent several enquiries in a short time. Wait a few minutes and try again, or email ${CONTACT.email}.`,
    };
  }

  const sent = await sendEnquiryMail({ subject: enquirySubject(values), text: enquiryText(values), replyTo: values.email });
  if (!sent) {
    return { status: "failed", values, errors: {}, message: `We could not send your enquiry. Nothing was lost on your side: try again, or email ${CONTACT.email}.` };
  }
  return { status: "success", values: INITIAL_STATE.values, errors: {} };
}
