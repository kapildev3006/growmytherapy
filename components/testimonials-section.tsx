"use client";

import * as React from "react";
import { siteContent } from "@/lib/content";
import { TestimonialCard } from "@/components/testimonial-card";
import { Badge } from "@/components/ui/badge";
import { motion, useReducedMotion } from "framer-motion";

export function TestimonialsSection() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-mist/40 scroll-mt-16 border-t border-mist-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto space-y-4 mb-16"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.6 }}
        >
          <Badge
            variant="secondary"
            className="px-4 py-1 rounded-full text-xs font-medium text-sage-800 bg-sage-100"
          >
            Client Experiences
          </Badge>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-charcoal tracking-tight">
            Words From Those Who Found Their Ground Again
          </h2>
          <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed font-light">
            Reflections from clients navigating anxiety, trauma reprocessing, and recovery from burnout.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {siteContent.testimonials.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={shouldReduceMotion ? undefined : { y: -5, scale: 1.015 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="h-full"
            >
              <TestimonialCard testimonial={item} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
