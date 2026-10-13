import { useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

/**
 * A button/link that gently follows the cursor on hover (magnetic effect).
 * Disabled automatically when the user prefers reduced motion.
 *
 * Props:
 *  - as: "a" | "button" (default "a")
 *  - strength: how strongly it tracks the cursor (default 0.35)
 *  - everything else is forwarded to the underlying element
 */
export default function MagneticButton({
  as = "a",
  strength = 0.35,
  className = "",
  children,
  ...props
}) {
  const ref = useRef(null);
  const prefersReduced = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  const handleMove = (e) => {
    if (prefersReduced || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const MotionTag = motion[as] || motion.a;

  return (
    <MotionTag
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className={className}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
