"use client";

import * as React from "react";
import { siteContent } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { ConsultationForm } from "@/components/consultation-form";
import { Sparkles, MapPin, Clock, ShieldCheck, HelpCircle } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export function CtaBanner() {
  const shouldReduceMotion = useReducedMotion();

  const handleAskQuestion = () => {
    const formElement = document.getElementById("consultation-form");
    const messageInput = document.getElementById("message");
    if (messageInput) {
      messageInput.focus();
      messageInput.scrollIntoView({ behavior: "smooth", block: "center" });
    } else if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-cream scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative overflow-hidden rounded-[2.5rem] bg-sage-600 p-6 sm:p-10 md:p-12 lg:p-14 text-white shadow-soft-lg"
          initial={{
            opacity: 0,
            scale: shouldReduceMotion ? 1 : 0.98,
            y: shouldReduceMotion ? 0 : 25,
          }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.6, ease: "easeOut" }}
        >
          {/* Subtle background decorative shapes */}
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-sage-500/40 blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 h-80 w-80 rounded-full bg-sage-700/50 blur-3xl pointer-events-none" />

          {/* Two-column layout on desktop, stacked on mobile/tablet */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* LEFT COLUMN: Heading, consultation details, location, and Ask a Question action */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-medium backdrop-blur-xs text-white">
                  <Sparkles className="h-3.5 w-3.5 text-sage-200" />
                  <span>Complimentary 15-Minute Initial Consultation</span>
                </div>

                {/* Heading */}
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] font-medium tracking-tight text-white leading-[1.2]">
                  {siteContent.ctaBanner.heading}
                </h2>

                {/* Supporting Text */}
                <p className="text-sm sm:text-base text-white/90 leading-relaxed font-light">
                  {siteContent.ctaBanner.subheading}
                </p>
              </div>

              {/* Consultation Details & Local Trust Signals */}
              <div className="space-y-4 pt-2 border-t border-white/20">
                <div className="flex items-start gap-3 text-xs sm:text-sm text-white/90">
                  <MapPin className="h-4 w-4 text-sage-200 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-white">Santa Monica, California</span>
                    <p className="text-xs text-white/75 mt-0.5">
                      {siteContent.practitioner.address.full} · In-Person & CA Telehealth
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs sm:text-sm text-white/90">
                  <Clock className="h-4 w-4 text-sage-200 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-white">Consultation Availability</span>
                    <p className="text-xs text-white/75 mt-0.5">
                      {siteContent.practitioner.contact.hours}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs sm:text-sm text-white/90">
                  <ShieldCheck className="h-4 w-4 text-sage-200 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-white">Confidential & Safe</span>
                    <p className="text-xs text-white/75 mt-0.5">
                      Your inquiry is held with strict professional privacy.
                    </p>
                  </div>
                </div>
              </div>

              {/* Secondary action: Ask a Question (focuses form message input) */}
              <div className="pt-2">
                <Button
                  type="button"
                  variant="outline"
                  size="default"
                  onClick={handleAskQuestion}
                  className="rounded-full border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white transition-all text-xs sm:text-sm px-5 py-2.5 flex items-center gap-2"
                >
                  <HelpCircle className="w-4 h-4 text-sage-200" />
                  <span>Have a question first? Ask a Question</span>
                </Button>
              </div>
            </div>

            {/* RIGHT COLUMN: Consultation Form */}
            <div className="lg:col-span-7 w-full">
              <ConsultationForm />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
