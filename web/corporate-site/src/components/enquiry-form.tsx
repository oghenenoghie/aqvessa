"use client";

import { useActionState, useEffect, useRef, useState, type FormEvent } from "react";
import { submitEnquiry } from "@/app/contact/actions";
import { Field, FieldError, controlClass } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import {
  AREA_OPTIONS,
  BUDGET_OPTIONS,
  CONTACT_METHODS,
  FIELDS,
  HONEYPOT,
  INITIAL_STATE,
  LIMITS,
  hasErrors,
  readValues,
  validateEnquiry,
  type EnquiryErrors,
  type FieldName,
} from "@/lib/enquiry";
import { CONTACT } from "@/lib/site";

const ORDER: readonly FieldName[] = FIELDS;
const LABELS: Record<FieldName, string> = {
  name: "Name",
  email: "Email",
  organisation: "Organisation",
  country: "Country",
  area: "Business area",
  message: "Message",
  deadline: "Deadline",
  budget: "Budget range",
  method: "Preferred contact method",
  whatsapp: "WhatsApp number",
  consent: "Consent",
};

/** Id of the element that receives focus for a field's error link. */
const targetId = (f: FieldName) => (f === "method" ? "method-email" : f);

/** The enquiry form: validated in the browser and again on the server, with inline errors and a success state. */
export function EnquiryForm() {
  const [state, formAction, pending] = useActionState(submitEnquiry, INITIAL_STATE);
  const [clientErrors, setClientErrors] = useState<EnquiryErrors | null>(null);
  const summary = useRef<HTMLDivElement>(null);
  const success = useRef<HTMLDivElement>(null);

  const errors = clientErrors ?? state.errors;
  const invalid = ORDER.filter((f) => errors[f]);

  useEffect(() => {
    if (state.status === "invalid" || state.status === "failed") summary.current?.focus();
    if (state.status === "success") success.current?.focus();
  }, [state]);

  useEffect(() => {
    if (clientErrors && hasErrors(clientErrors)) summary.current?.focus();
  }, [clientErrors]);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    const found = validateEnquiry(readValues(new FormData(event.currentTarget)));
    if (hasErrors(found)) {
      event.preventDefault();
      setClientErrors(found);
    } else {
      setClientErrors(null);
    }
  }

  if (state.status === "success") {
    return (
      <div ref={success} tabIndex={-1} role="status" className="grid gap-3 rounded-md border border-hairline bg-surface p-6 sm:p-8 focus:outline-none">
        <p className="type-label text-signal-success">Success</p>
        <h3 className="type-heading-md">Enquiry sent.</h3>
        <p className="type-body text-ink-muted">
          We have received your enquiry and will reply by the method you chose. If you need to add something, write to{" "}
          <a href={`mailto:${CONTACT.email}`} className="link">
            {CONTACT.email}
          </a>
          .
        </p>
      </div>
    );
  }

  const v = state.values;
  const describe = (f: FieldName, hint = false) => [hint ? `${f}-hint` : null, errors[f] ? `${f}-error` : null].filter(Boolean).join(" ") || undefined;
  const aria = (f: FieldName) => ({ "aria-invalid": errors[f] ? (true as const) : undefined, "aria-describedby": describe(f, f === "message" || f === "deadline" || f === "organisation" || f === "whatsapp") });

  return (
    <form action={formAction} onSubmit={onSubmit} noValidate className="grid gap-6" aria-label="Enquiry form">
      <div ref={summary} tabIndex={-1} className="focus:outline-none" aria-live="polite">
        {(invalid.length > 0 || state.status === "failed") && (
          <div className="grid gap-3 rounded-md border border-signal-danger bg-surface p-4">
            <h3 className="type-body font-medium text-signal-danger">
              <span>Error: </span>
              {state.status === "failed" && invalid.length === 0 ? "Your enquiry was not sent" : `Check ${invalid.length} ${invalid.length === 1 ? "field" : "fields"}`}
            </h3>
            {state.status === "failed" && invalid.length === 0 && <p className="type-body-sm text-ink">{state.message}</p>}
            {invalid.length > 0 && (
              <ul className="grid gap-1 type-body-sm">
                {invalid.map((f) => (
                  <li key={f}>
                    <a href={`#${targetId(f)}`} className="link">
                      {LABELS[f]}: {errors[f]}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>

      {/* Honeypot: hidden from people and assistive technology, never focusable. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor={HONEYPOT}>Leave this field empty</label>
        <input id={HONEYPOT} name={HONEYPOT} type="text" tabIndex={-1} autoComplete="off" defaultValue="" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="name" label="Name" error={errors.name}>
          <input id="name" name="name" type="text" autoComplete="name" maxLength={LIMITS.name + 20} required defaultValue={v.name} className={controlClass} {...aria("name")} />
        </Field>
        <Field id="email" label="Email" error={errors.email}>
          <input id="email" name="email" type="email" autoComplete="email" inputMode="email" required defaultValue={v.email} className={controlClass} {...aria("email")} />
        </Field>
        <Field id="organisation" label="Organisation" hint="Write your own name if you are enquiring as an individual." error={errors.organisation}>
          <input id="organisation" name="organisation" type="text" autoComplete="organization" required defaultValue={v.organisation} className={controlClass} {...aria("organisation")} />
        </Field>
        <Field id="country" label="Country" error={errors.country}>
          <input id="country" name="country" type="text" autoComplete="country-name" required defaultValue={v.country} className={controlClass} {...aria("country")} />
        </Field>
      </div>

      <Field id="area" label="Business area" error={errors.area}>
        <select id="area" name="area" required defaultValue={v.area} className={controlClass} {...aria("area")}>
          <option value="">Choose an area</option>
          {AREA_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </Field>

      <Field id="message" label="Message" hint={`What you need, in a few sentences. ${LIMITS.messageMin} to ${LIMITS.message.toLocaleString("en-GB")} characters.`} error={errors.message}>
        <textarea id="message" name="message" rows={6} required defaultValue={v.message} className={controlClass} {...aria("message")} />
      </Field>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="deadline" label="Deadline" optional hint="The date you need a result by." error={errors.deadline}>
          <input id="deadline" name="deadline" type="date" defaultValue={v.deadline} className={controlClass} {...aria("deadline")} />
        </Field>
        <Field id="budget" label="Budget range" optional error={errors.budget}>
          <select id="budget" name="budget" defaultValue={v.budget} className={controlClass} {...aria("budget")}>
            <option value="">Prefer not to say</option>
            {BUDGET_OPTIONS.map((g) => (
              <optgroup key={g.group} label={g.group}>
                {g.options.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </Field>
      </div>

      <fieldset className="grid gap-3" aria-describedby={errors.method ? "method-error" : undefined}>
        <legend className="mb-1 type-body-sm font-medium">Preferred contact method</legend>
        <div className="flex flex-wrap gap-x-8 gap-y-2">
          {CONTACT_METHODS.map((m) => (
            <label key={m.value} className="inline-flex cursor-pointer items-center gap-2 type-body">
              <input
                id={`method-${m.value}`}
                type="radio"
                name="method"
                value={m.value}
                defaultChecked={v.method === m.value}
                className="size-5 accent-[var(--brand)]"
              />
              {m.label}
            </label>
          ))}
        </div>
        {errors.method && <FieldError id="method-error">{errors.method}</FieldError>}
      </fieldset>

      <Field id="whatsapp" label="WhatsApp number" optional hint="Needed only if you chose WhatsApp. Include the country code." error={errors.whatsapp}>
        <input id="whatsapp" name="whatsapp" type="tel" autoComplete="tel" inputMode="tel" defaultValue={v.whatsapp} className={controlClass} {...aria("whatsapp")} />
      </Field>

      <div className="grid gap-2">
        <label htmlFor="consent" className="inline-flex cursor-pointer items-start gap-3 type-body-sm text-ink">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            value="yes"
            defaultChecked={v.consent === "yes"}
            className="mt-0.5 size-5 flex-none accent-[var(--brand)]"
            aria-invalid={errors.consent ? true : undefined}
            aria-describedby={errors.consent ? "consent-error" : undefined}
          />
          <span>
            I have read the{" "}
            <a href="/legal/privacy" target="_blank" rel="noopener" className="link">
              privacy notice<span className="sr-only"> (opens in a new tab)</span>
            </a>{" "}
            and agree that AQVESSA LIMITED may use these details to reply to my enquiry.
          </span>
        </label>
        {errors.consent && <FieldError id="consent-error">{errors.consent}</FieldError>}
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" disabled={pending}>
          {pending ? "Sending" : "Send enquiry"}
        </Button>
        <p className="type-caption text-ink-muted" role="status">
          {pending ? "Sending your enquiry." : ""}
        </p>
      </div>
    </form>
  );
}
