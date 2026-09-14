"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Loader2, AlertCircle, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

// Phone number regex allowing common formats: (310) 555-0192, 310-555-0192, +1 310 555 0192, etc.
const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{7,15}$/;

const consultationSchema = z.object({
  fullName: z
    .string()
    .min(1, "Please enter your full name.")
    .min(2, "Full name must be at least 2 characters."),
  email: z
    .string()
    .min(1, "Please enter your email address.")
    .email("Please provide a valid email address."),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || val.trim() === "" || phoneRegex.test(val.trim()),
      "Please enter a valid phone number (e.g. 310-555-0192)."
    ),
  preferredContact: z.enum(["email", "phone"], {
    message: "Please select your preferred contact method.",
  }),
  supportTopic: z.string().min(1, "Please select an area of support."),
  sessionFormat: z.string().min(1, "Please select a session format."),
  message: z
    .string()
    .max(1000, "Message cannot exceed 1000 characters.")
    .optional(),
  consent: z.boolean().refine((val) => val === true, {
    message: "Please check this box to confirm you understand this is a demo form.",
  }),
});

export type ConsultationFormData = z.infer<typeof consultationSchema>;

export function ConsultationForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ConsultationFormData>({
    resolver: zodResolver(consultationSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      preferredContact: "email",
      supportTopic: "Anxiety & Panic",
      sessionFormat: "No preference",
      message: "",
      consent: false,
    },
  });

  const onSubmit = async () => {
    setIsSubmitting(true);
    // Simulate safe local asynchronous submission (no backend, no localStorage)
    await new Promise((resolve) => setTimeout(resolve, 850));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleReset = () => {
    reset();
    setIsSuccess(false);
  };

  if (isSuccess) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-3xl bg-white p-8 sm:p-10 shadow-soft border border-mist-border/90 text-center space-y-6"
      >
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-sage-100 text-sage-600 border border-sage-200">
          <CheckCircle2 className="h-9 w-9" />
        </div>

        <div className="space-y-2">
          <h3 className="font-serif text-2xl sm:text-3xl font-medium text-charcoal tracking-tight">
            Consultation Request Received
          </h3>
          <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed max-w-md mx-auto">
            Thanks for reaching out. This demo request has been received locally. On a production website, it would be connected to the practice&apos;s secure consultation workflow.
          </p>
        </div>

        <div className="rounded-2xl bg-sage-50/80 border border-sage-200/70 p-4 text-xs sm:text-sm text-sage-800 text-left flex items-start gap-3">
          <Sparkles className="h-5 w-5 text-sage-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-sage-900">Demo Portfolio Notice</p>
            <p className="mt-0.5 text-sage-700">
              No appointment has been booked through this demo. No personal data has been transmitted or stored externally.
            </p>
          </div>
        </div>

        <div className="pt-2">
          <Button
            type="button"
            onClick={handleReset}
            variant="outline"
            className="rounded-full px-8 py-5 border-sage-400 text-charcoal hover:bg-sage-50"
          >
            Submit Another Request
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      id="consultation-form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-3xl bg-white p-6 sm:p-9 shadow-soft-lg border border-mist-border/90 space-y-6 text-left"
    >
      <div className="space-y-1 pb-2 border-b border-mist/80">
        <h3 className="font-serif text-2xl font-medium text-charcoal">
          Request a Free 15-Minute Consult
        </h3>
        <p className="text-xs sm:text-sm text-charcoal-muted">
          Fill in your details below to schedule an introductory phone consultation.
        </p>
      </div>

      {/* Full Name & Email (2 columns on sm+) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Full Name */}
        <div className="space-y-1.5">
          <label
            htmlFor="fullName"
            className="block text-xs sm:text-sm font-medium text-charcoal"
          >
            Full Name <span className="text-terracotta" aria-hidden="true">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            autoComplete="name"
            placeholder="e.g. Alex Morgan"
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            {...register("fullName")}
            className={cn(
              "w-full rounded-xl border bg-cream/40 px-3.5 py-2.5 text-sm text-charcoal placeholder:text-charcoal-light/70 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sage-500 transition-colors",
              errors.fullName ? "border-rose-400 ring-1 ring-rose-300" : "border-mist-border"
            )}
          />
          {errors.fullName && (
            <p id="fullName-error" className="text-xs text-rose-600 font-medium">
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Email Address */}
        <div className="space-y-1.5">
          <label
            htmlFor="email"
            className="block text-xs sm:text-sm font-medium text-charcoal"
          >
            Email Address <span className="text-terracotta" aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="alex@example.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
            className={cn(
              "w-full rounded-xl border bg-cream/40 px-3.5 py-2.5 text-sm text-charcoal placeholder:text-charcoal-light/70 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sage-500 transition-colors",
              errors.email ? "border-rose-400 ring-1 ring-rose-300" : "border-mist-border"
            )}
          />
          {errors.email && (
            <p id="email-error" className="text-xs text-rose-600 font-medium">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      {/* Phone Number & Preferred Contact */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-start">
        {/* Phone */}
        <div className="space-y-1.5">
          <label
            htmlFor="phone"
            className="block text-xs sm:text-sm font-medium text-charcoal"
          >
            Phone Number <span className="text-xs text-charcoal-light font-normal">(optional)</span>
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(310) 555-0192"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            {...register("phone")}
            className={cn(
              "w-full rounded-xl border bg-cream/40 px-3.5 py-2.5 text-sm text-charcoal placeholder:text-charcoal-light/70 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sage-500 transition-colors",
              errors.phone ? "border-rose-400 ring-1 ring-rose-300" : "border-mist-border"
            )}
          />
          {errors.phone && (
            <p id="phone-error" className="text-xs text-rose-600 font-medium">
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* Preferred Contact Method */}
        <div className="space-y-1.5">
          <fieldset>
            <legend className="text-xs sm:text-sm font-medium text-charcoal mb-2">
              Preferred Contact Method <span className="text-terracotta" aria-hidden="true">*</span>
            </legend>
            <div className="flex items-center gap-6 pt-1">
              <label className="flex items-center gap-2 text-xs sm:text-sm text-charcoal cursor-pointer">
                <input
                  type="radio"
                  value="email"
                  {...register("preferredContact")}
                  className="h-4 w-4 text-sage-600 focus:ring-sage-500 border-mist-border"
                />
                <span>Email</span>
              </label>
              <label className="flex items-center gap-2 text-xs sm:text-sm text-charcoal cursor-pointer">
                <input
                  type="radio"
                  value="phone"
                  {...register("preferredContact")}
                  className="h-4 w-4 text-sage-600 focus:ring-sage-500 border-mist-border"
                />
                <span>Phone call</span>
              </label>
            </div>
          </fieldset>
          {errors.preferredContact && (
            <p className="text-xs text-rose-600 font-medium">
              {errors.preferredContact.message}
            </p>
          )}
        </div>
      </div>

      {/* Support Topic & Session Format */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Support Topic */}
        <div className="space-y-1.5">
          <label
            htmlFor="supportTopic"
            className="block text-xs sm:text-sm font-medium text-charcoal"
          >
            What would you like support with?
          </label>
          <div className="relative">
            <select
              id="supportTopic"
              {...register("supportTopic")}
              className="w-full appearance-none rounded-xl border border-mist-border bg-cream/40 px-3.5 py-2.5 text-sm text-charcoal focus:bg-white focus:outline-none focus:ring-2 focus:ring-sage-500 transition-colors pr-9"
            >
              <option value="Anxiety & Panic">Anxiety & Panic Therapy</option>
              <option value="Trauma & EMDR">Trauma-Informed / EMDR</option>
              <option value="Burnout & Perfectionism">Burnout & Perfectionism</option>
              <option value="Life Transitions">Life Transitions & Stress</option>
              <option value="Other Support">Other / Not sure yet</option>
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-charcoal-light">
              ▾
            </span>
          </div>
        </div>

        {/* Session Format */}
        <div className="space-y-1.5">
          <label
            htmlFor="sessionFormat"
            className="block text-xs sm:text-sm font-medium text-charcoal"
          >
            Preferred Session Format
          </label>
          <div className="relative">
            <select
              id="sessionFormat"
              {...register("sessionFormat")}
              className="w-full appearance-none rounded-xl border border-mist-border bg-cream/40 px-3.5 py-2.5 text-sm text-charcoal focus:bg-white focus:outline-none focus:ring-2 focus:ring-sage-500 transition-colors pr-9"
            >
              <option value="In-person">In-person (Santa Monica office)</option>
              <option value="Virtual">Virtual</option>
              <option value="No preference">No preference / Flexible</option>
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-charcoal-light">
              ▾
            </span>
          </div>
        </div>
      </div>

      {/* Message & Note */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label
            htmlFor="message"
            className="block text-xs sm:text-sm font-medium text-charcoal"
          >
            Brief Message or Questions <span className="text-xs text-charcoal-light font-normal">(optional)</span>
          </label>
          <span className="text-[11px] text-charcoal-light">Max 1000 characters</span>
        </div>

        {/* Medical disclaimer note above message */}
        <div
          role="note"
          className="flex items-start gap-2 rounded-xl bg-mist/60 border border-mist-border p-2.5 text-xs text-charcoal-muted"
        >
          <AlertCircle className="h-4 w-4 text-sage-700 shrink-0 mt-0.5" />
          <span>Please don&apos;t include private medical, crisis, or emergency information in this demo form.</span>
        </div>

        <textarea
          id="message"
          rows={3}
          maxLength={1000}
          placeholder="Share anything helpful about your scheduling availability or what you're looking for..."
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          {...register("message")}
          className={cn(
            "w-full rounded-xl border bg-cream/40 p-3.5 text-sm text-charcoal placeholder:text-charcoal-light/70 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sage-500 transition-colors resize-y",
            errors.message ? "border-rose-400 ring-1 ring-rose-300" : "border-mist-border"
          )}
        />
        {errors.message && (
          <p id="message-error" className="text-xs text-rose-600 font-medium">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Required Consent Checkbox */}
      <div className="space-y-1.5 pt-1">
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            id="consent"
            type="checkbox"
            aria-invalid={!!errors.consent}
            aria-describedby={errors.consent ? "consent-error" : undefined}
            {...register("consent")}
            className="mt-0.5 h-4 w-4 rounded border-mist-border text-sage-600 focus:ring-sage-500"
          />
          <span className="text-xs sm:text-sm text-charcoal-muted group-hover:text-charcoal transition-colors leading-relaxed">
            I understand this is a portfolio/demo consultation form and does not create a real therapist-client relationship. <span className="text-terracotta" aria-hidden="true">*</span>
          </span>
        </label>
        {errors.consent && (
          <p id="consent-error" className="text-xs text-rose-600 font-medium pl-7">
            {errors.consent.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <Button
          type="submit"
          variant="terracotta"
          size="lg"
          disabled={isSubmitting}
          aria-busy={isSubmitting}
          className="w-full text-base font-semibold py-6 rounded-full shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              <span>Submitting Request...</span>
            </>
          ) : (
            <span>Request Consultation</span>
          )}
        </Button>
      </div>
    </form>
  );
}
