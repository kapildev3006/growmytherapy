"use client";

import * as React from "react";
import dynamic from "next/dynamic";

/**
 * Lazy-load the Three.js Canvas with ssr: false so it does not block initial HTML render
 */
const AmbientCanvas = dynamic(() => import("@/components/ambient-canvas"), {
  ssr: false,
  loading: () => null,
});

function subscribe(callback: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }
  const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  motionQuery.addEventListener("change", callback);
  return () => motionQuery.removeEventListener("change", callback);
}

function getSnapshot(): boolean {
  if (typeof window === "undefined") {
    return false;
  }
  const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (motionQuery.matches) {
    return false;
  }
  try {
    const canvas = document.createElement("canvas");
    return !!(
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
    );
  } catch {
    return false;
  }
}

function getServerSnapshot(): boolean {
  return false;
}

/**
 * AmbientBackground
 * Manages the ambient hero layer with strict adherence to accessibility and hydration safety:
 * - Automatically disables 3D canvas when user enables prefers-reduced-motion
 * - Checks WebGL context support before rendering 3D
 * - Uses useSyncExternalStore to synchronize client-side environment state without cascading renders
 * - Provides an organic, soothing multi-stop CSS gradient fallback
 */
export function AmbientBackground() {
  const shouldRender3D = React.useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none overflow-hidden -z-0 select-none"
    >
      {/* Base CSS gradient background: organic pastel glow */}
      <div className="absolute top-10 -left-20 h-96 w-96 rounded-full bg-sage-200/40 blur-3xl" />
      <div className="absolute top-40 right-0 h-[30rem] w-[30rem] rounded-full bg-cream-muted/60 blur-3xl" />
      <div className="absolute -bottom-10 left-1/3 h-80 w-80 rounded-full bg-mist/60 blur-3xl" />

      {/* Render 3D Canvas only if motion is enabled & WebGL is functional */}
      {shouldRender3D && <AmbientCanvas />}
    </div>
  );
}
