import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const THEMES = {
  blue: {
    glowOuter: "rgba(0,172,255,0.85)",   // halo exterior
    glowInner: "rgba(80,200,255,1)",     // halo más intenso
    rim: "#59CFFF",                      // borde fino
    fillTop: "#0B334A",
    fillMid: "#0C1D2A",
    fillBottom: "#0A0F17",
    vignette: "rgba(0,0,0,0.35)",
  },
  violet: {
    glowOuter: "rgba(162,89,255,0.85)",
    glowInner: "rgba(190,120,255,1)",
    rim: "#B084FF",
    fillTop: "#2A1142",
    fillMid: "#1B0E2C",
    fillBottom: "#0F0E17",
    vignette: "rgba(0,0,0,0.35)",
  },
};

export default function RoleCard({
  id: _id,
  width = 386,
  height = 327,
  hoverColor = "rgba(162,89,255,1)",
  imageSrc = "",
  imageAlt = "",
  role = "",
  quote = "",
  open = false,
  onToggle = () => {},
  openBackdrop = true,
  transitionPreset = "slow",
  theme = "blue", // "blue" o "violet"
}) {
  const id = _id || role || imageAlt || imageSrc || "role-card";
  const C = THEMES[theme] ?? THEMES.blue;

  const transitions = {
    slow:   { type: "spring", damping: 26, stiffness: 140, mass: 1.1 },
    medium: { type: "spring", damping: 22, stiffness: 200, mass: 1 },
    snappy: { type: "spring", damping: 18, stiffness: 280, mass: 0.9 },
  };
  const t = transitions[transitionPreset] || transitions.slow;

  // ───────────── VISTA CERRADA ─────────────
  if (!open) {
    return (
      <motion.button
        type="button"
        onClick={onToggle}
        className="group relative block transition-transform duration-300 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-1 hover:scale-[1.01] active:scale-[0.995]"
        style={{ width, height }}
        aria-label={role || imageAlt || "Role card"}
        layoutId={`rc-${id}-container`}
        transition={t}
      >
        {/* Glow hover cerrado */}
        <span
          aria-hidden
          className="pointer-events-none absolute -inset-4 rounded-[18px] opacity-0 blur-[40px] transition-opacity duration-300 group-hover:opacity-90"
          style={{ background: `radial-gradient(closest-side, ${hoverColor}, transparent 65%)` }}
        />
        {/* Aro fino */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[14px] transition-[box-shadow,opacity] duration-300 opacity-60 group-hover:opacity-100"
          style={{ boxShadow: `0 0 0 2px ${hoverColor}` }}
        />

        <Card className="relative w-full h-full p-0 bg-transparent">
          <CardContent className="relative w-full h-full border border-black p-0 overflow-hidden rounded-xl">
            <motion.img
              className="w-full h-full object-cover rounded-lg mx-auto"
              alt={imageAlt}
              src={imageSrc}
              layoutId={`rc-${id}-image`}
              transition={t}
              draggable={false}
            />
          </CardContent>
        </Card>
      </motion.button>
    );
  }

  // ───────────── VISTA ABIERTA ─────────────
  return (
    <AnimatePresence>
      {openBackdrop && (
        <motion.div
          key="backdrop"
          className="fixed inset-0 z-40 bg-black/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          onClick={onToggle}
          aria-hidden
        />
      )}

      <motion.button
        type="button"
        onClick={onToggle}
        className="block fixed inset-0 z-50 grid place-items-center p-4"
        initial={false}
      >
        {/* Óvalo con neón */}
        <motion.div
          className="relative w-[min(92vw,541px)] aspect-[541/879] rounded-full overflow-hidden"
          layoutId={`rc-${id}-container`}
          transition={t}
        >
          {/* Halo exterior difuso */}
          <div
            aria-hidden
            className="absolute -inset-8 rounded-full blur-[70px] opacity-90"
            style={{ background: C.glowOuter }}
          />

          {/* Halo interior más intenso */}
          <div
            aria-hidden
            className="absolute -inset-3 rounded-full blur-[35px] opacity-95"
            style={{ background: C.glowInner }}
          />

          {/* Aro brillante en el borde */}
          <div
            aria-hidden
            className="absolute inset-0 rounded-full"
            style={{ boxShadow: `0 0 6px 2px ${C.rim}, inset 0 0 0 1px rgba(255,255,255,.05)` }}
          />

          {/* Relleno tintado */}
          <div
            aria-hidden
            className="absolute inset-0 rounded-full"
            style={{
              background: `
                radial-gradient(60% 40% at 50% 18%, rgba(255,255,255,0.12), transparent 60%),
                radial-gradient(75% 75% at 50% 75%, ${C.vignette}, transparent 70%),
                linear-gradient(180deg, ${C.fillTop} 0%, ${C.fillMid} 45%, ${C.fillBottom} 100%)
              `,
            }}
          />

          {/* Contenido */}
          <div className="relative z-10 h-full w-full flex flex-col items-center justify-start pt-[clamp(40px,7vw,64px)] pb-[clamp(28px,6vw,44px)] px-[clamp(16px,4vw,28px)] gap-[clamp(18px,4vw,26px)]">
            <motion.div
              className="rounded-xl overflow-hidden shadow-lg"
              layout
              transition={t}
              style={{ width: "clamp(240px, 80%, 355px)", height: "clamp(180px, 52%, 300px)" }}
            >
              <motion.img
                className="w-full h-full object-cover rounded-xl"
                alt={imageAlt}
                src={imageSrc}
                layoutId={`rc-${id}-image`}
                transition={t}
                draggable={false}
              />
            </motion.div>

            <div className="max-w-[min(88%,420px)] text-center">
              {role && (
                <motion.h3
                  className="font-gugi font-normal text-white leading-tight"
                  style={{ fontSize: "clamp(18px, 2.8vw, 24px)" }}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.06 }}
                >
                  {role}
                </motion.h3>
              )}
              {quote && (
                <motion.p
                  className="mt-3 text-white/95 text-pretty"
                  style={{ fontSize: "clamp(13px, 2.2vw, 16px)", lineHeight: 1.55 }}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
                >
                  “{quote}”
                </motion.p>
              )}
            </div>

            <div className="flex-1" />
          </div>
        </motion.div>
      </motion.button>
    </AnimatePresence>
  );
}


