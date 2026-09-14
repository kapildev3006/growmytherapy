"use client";

import * as React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShieldAlert, HeartHandshake, BatteryCharging, ArrowRight } from "lucide-react";
import type { ServiceItem } from "@/lib/content";
import { scrollToSection } from "@/lib/scroll";

const iconMap = {
  ShieldAlert,
  HeartHandshake,
  BatteryCharging,
};

interface ServiceCardProps {
  service: ServiceItem;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.icon as keyof typeof iconMap] || HeartHandshake;

  return (
    <Card className="group flex flex-col justify-between h-full bg-white border-mist-border/80 hover:border-sage-300 hover:shadow-soft-lg transition-all duration-300 rounded-3xl p-7">
      <div>
        <CardHeader className="p-0 pb-6">
          <div className="flex items-center justify-between pb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sage-50 text-sage-600 border border-sage-200/60 group-hover:bg-sage-500 group-hover:text-white transition-colors duration-300">
              <Icon className="h-6 w-6" />
            </div>
            <span className="text-xs font-medium text-sage-600 uppercase tracking-wider">
              Specialized Care
            </span>
          </div>

          <CardTitle className="text-2xl font-serif font-medium text-charcoal group-hover:text-sage-700 transition-colors">
            {service.title}
          </CardTitle>
        </CardHeader>

        <CardContent className="p-0 space-y-5">
          <CardDescription className="text-charcoal-muted text-base leading-relaxed">
            {service.description}
          </CardDescription>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {service.tags.map((tag) => (
              <Badge
                key={tag}
                variant="mist"
                className="text-xs px-2.5 py-0.5 rounded-full font-normal"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </div>

      <CardFooter className="p-0 pt-6 border-t border-mist/80 mt-6">
        <button
          type="button"
          onClick={() => scrollToSection("contact")}
          className="inline-flex items-center text-sm font-medium text-sage-600 group-hover:text-sage-700 hover:underline gap-1.5 transition-colors cursor-pointer text-left"
        >
          <span>Schedule a consultation for this</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
      </CardFooter>
    </Card>
  );
}
