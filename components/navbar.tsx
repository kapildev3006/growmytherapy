"use client";

import * as React from "react";
import Link from "next/link";
import { siteContent } from "@/lib/content";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Phone, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { scrollToSection } from "@/lib/scroll";

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        isScrolled
          ? "bg-cream/90 backdrop-blur-md shadow-sm border-b border-mist-border/60 py-3"
          : "bg-cream/60 backdrop-blur-xs py-5"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <Link
          href="/"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            window.history.replaceState(
              null,
              "",
              window.location.pathname + window.location.search
            );
          }}
          className="group flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 rounded-lg p-1"
        >
          <span className="font-serif text-xl sm:text-2xl font-medium tracking-tight text-charcoal group-hover:text-sage-700 transition-colors">
            {siteContent.practitioner.name}
            <span className="text-sage-500 text-lg font-normal ml-1.5">
              {siteContent.practitioner.credentials}
            </span>
          </span>
          <span className="text-xs text-charcoal-muted tracking-wide font-normal">
            Licensed Clinical Psychologist · Santa Monica
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center space-x-7">
          {siteContent.navigation.map((item) => (
            <button
              key={item.targetId}
              type="button"
              onClick={() => scrollToSection(item.targetId)}
              className="text-sm font-medium text-charcoal/80 hover:text-sage-700 transition-colors hover:underline underline-offset-8 decoration-sage-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 rounded-sm cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center space-x-4">
          <Button
            type="button"
            variant="terracotta"
            size="sm"
            onClick={() => scrollToSection("contact")}
            className="rounded-full shadow-sm hover:shadow flex items-center gap-1.5 cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Schedule Consult</span>
          </Button>
        </div>

        {/* Mobile Hamburger Drawer */}
        <div className="lg:hidden flex items-center">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-charcoal hover:bg-sage-100 rounded-full"
                aria-label="Open navigation menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent className="flex flex-col justify-between pt-12">
              <div className="space-y-6">
                <SheetHeader>
                  <SheetTitle className="text-left font-serif text-2xl">
                    {siteContent.practitioner.name}
                  </SheetTitle>
                  <p className="text-xs text-charcoal-muted">
                    {siteContent.practitioner.title} · Santa Monica, CA
                  </p>
                </SheetHeader>
                <div className="border-t border-mist-border/80 pt-4">
                  <nav className="flex flex-col space-y-4">
                    {siteContent.navigation.map((item) => (
                      <button
                        key={item.targetId}
                        type="button"
                        onClick={() => {
                          setMobileOpen(false);
                          scrollToSection(item.targetId);
                        }}
                        className="font-serif text-lg text-charcoal hover:text-sage-700 transition-colors py-1 text-left cursor-pointer"
                      >
                        {item.label}
                      </button>
                    ))}
                  </nav>
                </div>
              </div>

              <div className="space-y-4 pb-4 border-t border-mist-border/80 pt-6">
                <div className="flex items-center gap-2 text-xs text-charcoal-muted">
                  <Phone className="w-4 h-4 text-sage-600" />
                  <span>{siteContent.practitioner.contact.phone}</span>
                </div>
                <Button
                  type="button"
                  variant="terracotta"
                  className="w-full rounded-full cursor-pointer"
                  onClick={() => {
                    setMobileOpen(false);
                    scrollToSection("contact");
                  }}
                >
                  Schedule a Free Consult
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
