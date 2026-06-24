import { useState, useEffect, useMemo } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Typewriter that cycles through a pipe-separated list of roles.
 * Falls back to a static, comma-separated label when the user
 * prefers reduced motion (and keeps the full list for screen readers).
 */
export default function RotatingRole({ text, className = "" }) {
  const roles = useMemo(
    () => text.split("|").map((s) => s.trim()).filter(Boolean),
    [text]
  );
  const prefersReduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [phase, setPhase] = useState("typing"); // typing | deleting

  useEffect(() => {
    if (prefersReduced || roles.length === 0) return;
    const current = roles[index % roles.length];
    let timeout;

    if (phase === "typing") {
      if (display.length < current.length) {
        timeout = setTimeout(() => setDisplay(current.slice(0, display.length + 1)), 55);
      } else {
        timeout = setTimeout(() => setPhase("deleting"), 1500);
      }
    } else if (display.length > 0) {
      timeout = setTimeout(() => setDisplay(current.slice(0, display.length - 1)), 28);
    } else {
      setIndex((i) => (i + 1) % roles.length);
      setPhase("typing");
    }

    return () => clearTimeout(timeout);
  }, [display, phase, index, prefersReduced, roles]);

  if (prefersReduced) {
    return <span className={className}>{roles.join(" · ")}</span>;
  }

  return (
    <span className={className} aria-label={roles.join(", ")}>
      <span aria-hidden>{display || " "}</span>
      <span className="inline-block w-[2px] h-[1.1em] ml-0.5 bg-[#6C63FF] animate-pulse align-middle" />
    </span>
  );
}
