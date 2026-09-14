"use client";

import * as React from "react";
import Image from "next/image";
import { siteContent } from "@/lib/content";
import { scrollToSection } from "@/lib/scroll";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

interface HeroProps {
  children?: React.ReactNode;
}

export function Hero({ children }: HeroProps) {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
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
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 lg:pt-24 lg:pb-32 bg-gradient-to-b from-cream via-cream/80 to-mist/40">
      {/* Ambient background slot (Three.js canvas will slot here in Step 7) */}
      {children}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-start space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Pill Badge */}
            <motion.div variants={itemVariants}>
              <Badge
                variant="mist"
                className="px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium border border-sage-300/70 bg-white/80 backdrop-blur-xs text-sage-800 shadow-xs flex items-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5 text-sage-600" />
                <span>{siteContent.hero.badge}</span>
              </Badge>
            </motion.div>

            {/* H1 Heading */}
            <motion.h1
              variants={itemVariants}
              className="font-serif text-3xl sm:text-5xl lg:text-[3.25rem] leading-[1.18] font-medium text-charcoal tracking-tight"
            >
              {siteContent.hero.heading}
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-charcoal-muted leading-relaxed max-w-2xl font-light"
            >
              {siteContent.hero.subheading}
            </motion.p>

            {/* CTA Group */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 w-full sm:w-auto"
            >
              <Button
                type="button"
                variant="terracotta"
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="shadow-sm hover:shadow-md transition-all text-base px-8 py-6 rounded-full group hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2"
              >
                <span>{siteContent.hero.primaryCta.label}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                type="button"
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("approach")}
                className="text-base px-8 py-6 rounded-full border-sage-400/80 bg-white/70 hover:bg-white transition-all text-charcoal hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                {siteContent.hero.secondaryCta.label}
              </Button>
            </motion.div>

            {/* Consultation Note */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 pt-2 text-xs sm:text-sm text-charcoal-light"
            >
              <CheckCircle2 className="w-4 h-4 text-sage-500 shrink-0" />
              <span>{siteContent.hero.consultationNote}</span>
            </motion.div>
          </motion.div>

          {/* Hero Visual Card / Headshot */}
          <motion.div
            className="lg:col-span-5 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.96, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0.01 : 0.8,
              delay: shouldReduceMotion ? 0 : 0.2,
              ease: "easeOut",
            }}
          >
            <div className="relative w-full max-w-md">
              {/* Soft decorative glow behind image */}
              <div className="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-tr from-sage-200/50 via-terracotta-light/40 to-cream opacity-70 blur-xl -z-10" />

              <div className="relative rounded-[2rem] overflow-hidden border border-white/80 bg-white p-3 shadow-soft-lg">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.5rem] bg-sage-100">
                  <Image
                    src={siteContent.practitioner.images.headshot}
                    alt={siteContent.practitioner.images.headshotAlt}
                    fill
                    loading="eager"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 448px"
                    className="object-cover object-center transition-transform duration-700 hover:scale-102"
                  />
                </div>

                <div className="p-4 pt-4 flex items-center justify-between">
                  <div>
                    <p className="font-serif font-medium text-charcoal text-base">
                      {siteContent.practitioner.name},{" "}
                      <span className="text-sage-600 font-normal">{siteContent.practitioner.credentials}</span>
                    </p>
                    <p className="text-xs text-charcoal-muted">
                      {siteContent.practitioner.title}
                    </p>
                  </div>
                  <Badge variant="secondary" className="text-[11px] bg-sage-100 text-sage-800 font-normal px-2.5 py-0.5">
                    Santa Monica, CA
                  </Badge>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
