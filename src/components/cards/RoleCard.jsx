import { Card, CardContent } from "@/components/ui/card";
import React from "react";

/**
 * RoleCard
 * - width, height: medidas del contenedor visible (cerrado)
 * - hoverColor: color del glow/borde al hover en la vista cerrada (rgba/hex)
 * - imageSrc, imageAlt, gradient, shadow, role, quote, open, onToggle: como ya tenías
 */
export default function RoleCard({
  width = 386,
  height = 327,
  hoverColor = "rgba(162,89,255,1)",

  imageSrc = "",
  imageAlt = "",
  gradient = "from-[#007acc] to-[#1e1e1e]",
  shadow = "shadow-[-4px_17px_77.1px_49px_#007acc]",
  role = "",
  quote = "",
  open = false,
  onToggle = () => {},
}) {
  if (!open) {
    // ───────────── VISTA CERRADA (solo glow + salto al hover) ─────────────
    return (
      <button
        type="button"
        onClick={onToggle}
        className={[
          "group relative block",
          "transition-transform duration-200 ease-out",
          "hover:-translate-y-1 hover:scale-[1.01] active:scale-[0.99]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#a259ff] focus-visible:ring-offset-black/40",
        ].join(" ")}
        style={{ width, height }}
        aria-label={role || imageAlt || "Role card"}
      >
        {/* Glow exterior difuminado (aparece en hover) */}
        <span
          aria-hidden
          className="pointer-events-none absolute -inset-4 rounded-[18px] opacity-0 blur-[40px] transition-opacity duration-200 group-hover:opacity-90"
          style={{
            background: `radial-gradient(closest-side, ${hoverColor}, transparent 65%)`,
          }}
        />
        {/* Aro fino del mismo color que se hace visible al hover */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[14px] transition-[box-shadow,opacity] duration-200 opacity-60 group-hover:opacity-100"
          style={{ boxShadow: `0 0 0 2px ${hoverColor}` }}
        />

        <Card className="relative w-full h-full p-0 bg-transparent">
          <CardContent className="relative w-full h-full border border-solid border-black p-0 overflow-hidden rounded-xl">
            <img
              className="w-full h-full object-cover rounded-lg mx-auto transition-transform duration-200 group-hover:scale-[1.03]"
              alt={imageAlt}
              src={imageSrc}
            />
          </CardContent>
        </Card>
      </button>
    );
  }

  // ───────────── VISTA ABIERTA (la dejo EXACTAMENTE como la tenías) ─────────────
  return (
    <button type="button" onClick={onToggle} className="block">
      <Card className="relative border-0 bg-transparent p-0">
        <CardContent className="p-0">
          <div className="relative w-[541px] h-[879px]">
            <div
              className={`w-[537px] h-[879px] rounded-[268.5px/439.5px] ${shadow} bg-gradient-radial from-50% to-100% relative`}
              style={{
                backgroundImage:
                  "radial-gradient(50% 50% at 50% 50%, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 100%)",
              }}
            >
              {role && (
                <div className="absolute top-[460px] left-1/2 -translate-x-1/2 text-center font-gugi font-normal text-white text-2xl w-full">
                  {role}
                </div>
              )}
              {quote && (
                <div className="absolute w-[348px] top-[497px] left-1/2 -translate-x-1/2 text-center font-gugi font-normal text-white text-2xl">
                  “{quote}”
                </div>
              )}
            </div>

            {/* marco imagen rectangular delante */}
            <div className="absolute w-[355px] h-[300px] top-[137px] left-[93px] overflow-hidden rounded-xl flex items-center justify-center">
              <img
                className="w-full h-full object-cover rounded-xl"
                alt={imageAlt}
                src={imageSrc}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </button>
  );
}
