"use client";

import * as React from "react";
import { siteContent } from "@/lib/content";
import { MapPin, Phone, Mail, Clock, AlertCircle } from "lucide-react";
import { scrollToSection } from "@/lib/scroll";

export function Footer() {
  return (
    <footer className="border-t border-mist-border bg-white pt-16 pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-mist-border/80">
          {/* Brand & Practitioner Column */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <span className="font-serif text-2xl font-medium tracking-tight text-charcoal">
                {siteContent.practitioner.name},{" "}
                <span className="text-sage-600 font-normal">{siteContent.practitioner.credentials}</span>
              </span>
              <p className="text-xs text-charcoal-muted mt-1">
                {siteContent.practitioner.title} · {siteContent.practitioner.license}
              </p>
            </div>
            <p className="text-sm text-charcoal-muted leading-relaxed max-w-md font-light">
              Providing compassionate, evidence-based psychotherapy in Santa Monica, California and statewide telehealth for adults navigating anxiety, panic, trauma, and burnout.
            </p>
            <div className="pt-2 text-xs text-charcoal-muted flex items-center gap-2">
              <Clock className="w-4 h-4 text-sage-600 shrink-0" />
              <span>{siteContent.practitioner.contact.hours}</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-4">
            <p className="font-serif text-base font-semibold text-charcoal">
              Explore Practice
            </p>
            <ul className="space-y-2.5 text-sm">
              {siteContent.navigation.map((item) => (
                <li key={item.targetId}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(item.targetId)}
                    className="text-charcoal-muted hover:text-sage-700 transition-colors text-left cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Location Column */}
          <div className="lg:col-span-4 space-y-4">
            <p className="font-serif text-base font-semibold text-charcoal">
              Santa Monica Office
            </p>
            <div className="space-y-3 text-sm text-charcoal-muted">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sage-600 shrink-0 mt-0.5" />
                <span>{siteContent.practitioner.address.full}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sage-600 shrink-0" />
                <button
                  type="button"
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-sage-700 transition-colors text-left cursor-pointer"
                >
                  {siteContent.practitioner.contact.phone}
                </button>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sage-600 shrink-0" />
                <button
                  type="button"
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-sage-700 transition-colors text-left cursor-pointer"
                >
                  {siteContent.practitioner.contact.email}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Notice & Disclaimer */}
        <div className="pt-8 space-y-4 text-xs text-charcoal-light">
          {/* Crisis Banner */}
          <div className="flex items-start gap-2 rounded-xl bg-mist/60 border border-mist-border p-3">
            <AlertCircle className="w-4 h-4 text-sage-700 shrink-0 mt-0.5" />
            <p>{siteContent.footer.emergencyNote}</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-mist/80">
            <p>{siteContent.footer.copyright}</p>
            <p className="italic text-charcoal-muted">
              {siteContent.footer.disclaimer}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
