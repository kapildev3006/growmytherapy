"use client";

import * as React from "react";

export function SkipLink() {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const main = document.getElementById("main-content");
    if (main) {
      main.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      main.focus({ preventScroll: true });
    }
    window.history.replaceState(
      null,
      "",
      window.location.pathname + window.location.search
    );
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 rounded-full bg-charcoal px-5 py-2.5 text-sm font-medium text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-sage-500 cursor-pointer"
    >
      Skip to main content
    </button>
  );
}
