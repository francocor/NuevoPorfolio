import { Card, CardContent } from "@/components/ui/card";
import React from "react";

/**
 * RoleCard
 * Props:
 * - width, height: medidas del contenedor visible (cerrado)
 * - imageSrc: imagen circular/cuadrada de la card
 * - imageAlt: alt de la imagen
 * - gradient: tailwind para el fondo radial del "abierto" (ej: from-[#007acc] ... )
 * - shadow: sombra tailwind (ej: shadow-[-4px_17px_77.1px_49px_#007acc])
 * - role: título (ej: "Full Stack Developer")
 * - quote: párrafo/quote
 * - open: booleano (abierto/cerrado)
 * - onToggle: handler para click
 */
export default function RoleCard({
  width = 386,
  height = 327,
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
    // VISTA CERRADA
    return (
      <button
        type="button"
        onClick={onToggle}
        className="block"
        style={{ width, height }}
      >
        <Card className="w-full h-full p-0 bg-transparent">
          <CardContent className="relative w-full h-full border border-solid border-black p-0 overflow-hidden rounded-xl">
            <img
              className="w-full h-full object-cover rounded-lg mx-auto"
              alt={imageAlt}
              src={imageSrc}
            />
          </CardContent>
        </Card>
      </button>
    );
  }

  // VISTA ABIERTA
  return (
    <button type="button" onClick={onToggle} className="block">
      <Card className="relative border-0 bg-transparent p-0">
        <CardContent className="p-0">
          <div className="relative w-[541px] h-[879px]">
            <div
              className={`w-[537px] h-[879px] rounded-[268.5px/439.5px] ${shadow} bg-gradient-radial from-50% to-100% relative`}
              style={{
                backgroundImage: `radial-gradient(50% 50% at 50% 50%, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 100%)`,
              }}
            >
              {role && (
                <div className="absolute top-[460px] left-1/2 -translate-x-1/2 text-center [-webkit-text-stroke:1px_#000000] [font-family:'Gugi-Regular',Helvetica] font-normal text-white text-2xl w-full">
                  {role}
                </div>
              )}
              {quote && (
                <div className="absolute w-[348px] top-[497px] left-1/2 -translate-x-1/2 text-center [-webkit-text-stroke:1px_#000000] [font-family:'Gugi-Regular',Helvetica] font-normal text-white text-2xl">
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