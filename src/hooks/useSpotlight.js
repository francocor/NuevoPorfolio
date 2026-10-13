import { useRef, useCallback } from "react";

/**
 * Tracks the pointer inside an element and exposes its position as
 * `--mx` / `--my` CSS custom properties (0..1). Pair with the `.spotlight`
 * utility in index.css to render a cursor-following glow.
 *
 * Usage:
 *   const { ref, onMouseMove } = useSpotlight();
 *   <div ref={ref} onMouseMove={onMouseMove} className="spotlight ...">
 */
export function useSpotlight() {
  const ref = useRef(null);

  const onMouseMove = useCallback((e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const mx = (e.clientX - rect.left) / rect.width;
    const my = (e.clientY - rect.top) / rect.height;
    el.style.setProperty("--mx", mx.toFixed(3));
    el.style.setProperty("--my", my.toFixed(3));
  }, []);

  return { ref, onMouseMove };
}
