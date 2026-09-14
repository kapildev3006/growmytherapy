import * as React from "react";
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import type { TestimonialItem } from "@/lib/content";

interface TestimonialCardProps {
  testimonial: TestimonialItem;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="flex flex-col justify-between h-full bg-white/90 border border-mist-border/70 p-8 sm:p-10 rounded-3xl shadow-soft hover:shadow-soft-lg transition-all duration-300">
      <div className="space-y-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sage-50 text-sage-600 border border-sage-200/60">
          <Quote className="h-5 w-5" />
        </div>
        <p className="font-serif text-lg sm:text-xl text-charcoal leading-relaxed italic">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </div>

      <div className="pt-6 border-t border-mist/80 mt-6 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-charcoal">
            {testimonial.author}
          </p>
          <p className="text-xs text-charcoal-muted">
            {testimonial.location}
          </p>
        </div>
        <span className="text-[11px] text-sage-600 uppercase tracking-wider font-medium">
          Verified Client
        </span>
      </div>
    </Card>
  );
}
