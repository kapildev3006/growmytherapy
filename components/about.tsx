"use client";

import * as React from "react";
import Image from "next/image";
import { siteContent } from "@/lib/content";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export function About() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about" className="py-20 md:py-28 bg-cream scroll-mt-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Main About Dr. Maya Reynolds Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Photo & Highlights */}
          <motion.div
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: shouldReduceMotion ? 0.01 : 0.7, ease: "easeOut" }}
          >
            <div className="relative rounded-3xl overflow-hidden bg-white p-3 shadow-soft border border-mist-border/80">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-sage-100">
                <Image
                  src={siteContent.practitioner.images.headshot}
                  alt={siteContent.practitioner.images.headshotAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover object-center transition-transform duration-700 hover:scale-102"
                />
              </div>
            </div>

            {/* Credential highlights list */}
            <div className="rounded-2xl bg-mist/60 border border-mist-border p-5 space-y-2.5">
              <p className="text-xs font-semibold text-sage-800 uppercase tracking-wider">
                Credentials & Affiliations
              </p>
              <ul className="space-y-2">
                {siteContent.about.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-charcoal">
                    <CheckCircle2 className="w-4 h-4 text-sage-600 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Bio Text */}
          <motion.div
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: shouldReduceMotion ? 0.01 : 0.7, ease: "easeOut" }}
          >
            <Badge
              variant="secondary"
              className="px-4 py-1 rounded-full text-xs font-medium text-sage-800 bg-sage-100"
            >
              {siteContent.about.badge}
            </Badge>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-charcoal tracking-tight">
              {siteContent.about.heading}
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-charcoal-muted leading-relaxed font-light">
              {siteContent.about.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Local Trust Signal Box */}
            <div className="pt-2">
              <div className="inline-flex flex-col sm:flex-row items-start sm:items-center gap-3 rounded-2xl bg-white border border-mist-border/90 px-5 py-3.5 shadow-2xs">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sage-50 text-sage-600 border border-sage-200">
                  <MapPin className="h-4 w-4" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-medium text-charcoal">
                    In-Person Practice Location:
                  </p>
                  <p className="text-xs sm:text-sm text-charcoal-muted">
                    {siteContent.practitioner.address.full}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* The Space / Office Gallery Section */}
        <motion.div
          id="space"
          className="scroll-mt-20 pt-12 border-t border-mist-border/80"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.6, ease: "easeOut" }}
        >
          <div className="max-w-3xl space-y-4 mb-12">
            <Badge
              variant="mist"
              className="px-4 py-1 rounded-full text-xs font-medium text-sage-800 border-sage-300"
            >
              {siteContent.officeSpace.badge}
            </Badge>
            <h3 className="font-serif text-3xl sm:text-4xl font-medium text-charcoal">
              {siteContent.officeSpace.heading}
            </h3>
            <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed font-light">
              {siteContent.officeSpace.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Office Photo 1 */}
            <div className="group space-y-3">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-mist border border-mist-border/80 shadow-soft">
                <Image
                  src={siteContent.practitioner.images.office1}
                  alt={siteContent.practitioner.images.office1Alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-103"
                />
              </div>
              <p className="text-xs text-charcoal-light italic px-2">
                Natural sunlight and soothing furnishings designed to support calm nervous system regulation.
              </p>
            </div>

            {/* Office Photo 2 */}
            <div className="group space-y-3">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-mist border border-mist-border/80 shadow-soft">
                <Image
                  src={siteContent.practitioner.images.office2}
                  alt={siteContent.practitioner.images.office2Alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-103"
                />
              </div>
              <p className="text-xs text-charcoal-light italic px-2">
                A private, quiet sanctuary located at 123th Street 45 W in Santa Monica, California.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
