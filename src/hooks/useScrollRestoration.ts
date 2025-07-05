// src/hooks/useScrollRestoration.ts
"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function useScrollRestoration() {
  const path = usePathname();

  useEffect(() => {
    // Läs sparad scrollY för denna path
    const y = sessionStorage.getItem(`scroll:${path}`);
    if (y) window.scrollTo(0, Number(y));
  }, [path]);

  useEffect(() => {
    const onBeforeUnload = () => {
      sessionStorage.setItem(`scroll:${path}`, window.scrollY.toString());
    };
    window.addEventListener("beforeunload", onBeforeUnload);
    return () => window.removeEventListener("beforeunload", onBeforeUnload);
  }, [path]);
}
