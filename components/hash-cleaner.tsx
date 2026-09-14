"use client";

import * as React from "react";

/**
 * HashCleaner
 * Ensures that if a user loads the page with a hash fragment (e.g. /#contact),
 * it scrolls to the targeted section and immediately strips the hash from the URL,
 * keeping the browser address bar clean at `/`.
 */
export function HashCleaner() {
  React.useEffect(() => {
    const cleanHash = () => {
      if (window.location.hash) {
        const id = window.location.hash.slice(1);
        const element = document.getElementById(id);

        if (element) {
          element.scrollIntoView({
            behavior: "auto",
            block: "start",
          });
        }

        window.history.replaceState(
          null,
          "",
          window.location.pathname + window.location.search
        );
      }
    };

    cleanHash();
    window.addEventListener("hashchange", cleanHash);
    return () => window.removeEventListener("hashchange", cleanHash);
  }, []);

  return null;
}
