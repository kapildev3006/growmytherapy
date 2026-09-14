import * as React from "react";
import { siteContent } from "@/lib/content";
import { Award, MapPin, Video, Sparkles } from "lucide-react";

const iconMap = {
  Award,
  MapPin,
  Video,
  Sparkles,
};

export function TrustStrip() {
  return (
    <section className="border-y border-mist-border/80 bg-mist/60 py-6 sm:py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 items-center justify-items-center">
          {siteContent.trustStrip.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap] || Sparkles;
            return (
              <div
                key={index}
                className="flex items-center space-x-3 text-charcoal/90 text-center sm:text-left"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-2xs border border-mist-border text-sage-600">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-xs sm:text-sm font-medium leading-snug">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
