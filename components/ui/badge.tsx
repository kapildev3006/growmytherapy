import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-sage-500 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-sage-500 text-white",
        secondary:
          "border-transparent bg-sage-100 text-sage-800",
        terracotta:
          "border-transparent bg-terracotta-light text-terracotta",
        outline:
          "border-sage-300 text-charcoal",
        mist:
          "border-mist-border bg-mist-light text-charcoal-muted",
      },
    },
    defaultVariants: {
      variant: "secondary",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
