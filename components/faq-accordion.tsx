"use client";

import * as React from "react";
import { siteContent } from "@/lib/content";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { motion, useReducedMotion } from "framer-motion";

export function FaqAccordion() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="faq" className="py-20 md:py-28 bg-cream scroll-mt-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.6 }}
        >
          <Badge
            variant="mist"
            className="px-4 py-1 rounded-full text-xs font-medium text-sage-800 border-sage-300"
          >
            Frequently Asked Questions
          </Badge>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-charcoal tracking-tight">
            Clear Answers to Common Questions
          </h2>
          <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed font-light max-w-2xl mx-auto">
            Everything you need to know about getting started, insurance reimbursement, and session logistics.
          </p>
        </motion.div>

        <motion.div
          className="rounded-3xl bg-white p-6 sm:p-10 shadow-soft border border-mist-border/80"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: shouldReduceMotion ? 0.01 : 0.6,
            delay: shouldReduceMotion ? 0 : 0.1,
          }}
        >
          <Accordion type="single" collapsible className="w-full">
            {siteContent.faq.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger className="text-left font-serif text-lg sm:text-xl font-normal text-charcoal hover:text-sage-700">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-charcoal-muted text-base leading-relaxed pt-2">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
