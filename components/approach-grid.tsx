"use client";

import * as React from "react";
import { siteContent } from "@/lib/content";
import { Badge } from "@/components/ui/badge";
import { Brain, Waves, Leaf, Users } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const iconMap = {
  Brain,
  Waves,
  Leaf,
  Users,
};

export function ApproachGrid() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants = {
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
    <section id="approach" className="py-20 md:py-28 bg-mist/50 scroll-mt-16 border-y border-mist-border/60">
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
            {siteContent.approach.badge}
          </Badge>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-charcoal tracking-tight">
            {siteContent.approach.heading}
          </h2>
          <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed font-light">
            {siteContent.approach.subheading}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {siteContent.approach.items.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap] || Brain;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={shouldReduceMotion ? undefined : { y: -4, scale: 1.012 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="group relative rounded-3xl bg-white p-8 sm:p-10 shadow-soft border border-mist-border/70 hover:border-sage-300 hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sage-50 text-sage-600 border border-sage-200/50 group-hover:bg-sage-600 group-hover:text-white transition-colors duration-300">
                      <Icon className="h-7 w-7" />
                    </div>
                    <span className="text-xs font-medium text-sage-600/90 tracking-wide uppercase">
                      {item.method}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-medium text-charcoal mb-3 group-hover:text-sage-700 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-charcoal-muted text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
