/**
 * Smoothly scrolls to an element by ID without changing or appending hash fragments to the browser URL.
 */
export function scrollToSection(id: string) {
  if (typeof window === "undefined") return;
  const cleanId = id.startsWith("#") ? id.slice(1) : id;
  const element = document.getElementById(cleanId);

  if (!element) return;

  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });

  window.history.replaceState(
    null,
    "",
    window.location.pathname + window.location.search
  );
}
