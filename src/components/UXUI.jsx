import uxuiTitle from "@/assets/title-uxui.png";
import { Card, CardContent } from "@/components/ui/card";
import BubbleImage from "@/components/BubbleImage";

import LoginEnBaja from "@/assets/LoginEnBaja.png";
import TurnosEnBaja from "@/assets/TurnosEnBaja.png";
import LoginEnAlta from "@/assets/LoginEnAlta.png";
import TurnosEnAlta from "@/assets/TurnosEnAlta.png";
import { FaFigma } from "react-icons/fa";

export default function UXUI() {
  const bubbles = [
    { img: LoginEnBaja,  color: "rgba(255,115,80,1)"  }, // naranja sup-izq
    { img: TurnosEnBaja, color: "rgba(34,197,94,1)"   }, // verde sup-der
    { img: LoginEnAlta,  color: "rgba(59,130,246,1)"  }, // celeste inf-izq
    { img: TurnosEnAlta, color: "rgba(162,89,255,1)"  }, // violeta inf-der
  ];

  const bubbleSize = "w-full max-w-[320px] sm:max-w-[360px] aspect-square";

  return (
    <section className="py-16 font-gugi overflow-x-hidden">
      {/* Título */}
      <div className="flex justify-center mb-12">
        <img
          src={uxuiTitle}
          alt="Proyectos UX/UI"
          className="w-full max-w-[600px] md:max-w-[800px] h-auto"
        />
      </div>

      <div className="px-6 md:px-[102px]">
        <div className="relative w-full max-w-[1161px] mx-auto">
          {/* Glow exterior del contenedor */}
          <span
            aria-hidden
            className="absolute -inset-6 md:-inset-7 rounded-[42px] blur-[60px] pointer-events-none"
            style={{
              background:
                "conic-gradient(from 220deg at 50% 50%, rgba(162,89,255,0.55), rgba(255,115,80,0.55), rgba(59,130,246,0.55), rgba(162,89,255,0.55))",
              opacity: 0.9,
              zIndex: 0,
            }}
          />

          <Card className="relative rounded-[35px] bg-[#0f0f12] overflow-hidden">
            {/* Borde neón del contenedor */}
            <span
              aria-hidden
              className="absolute inset-0 rounded-[35px] pointer-events-none z-10"
              style={{ boxShadow: "0 0 0 2px #a259ff" }}
            />

            {/* Botón Figma */}
            <a
              href="https://www.figma.com/design/ShsV06LZ1EOLp236nMlAg6/Porfolio?node-id=0-1&t=1t5VGvYOpBuIfp17-1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir diseño en Figma"
              className="group absolute right-6 top-6 inline-flex items-center justify-center rounded-xl p-2 outline-none transition-transform duration-200 ease-out hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-[#a259ff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0f12] z-50"
            >
              <FaFigma className="w-10 h-10 md:w-12 md:h-12 text-[#F24E1E] drop-shadow-lg transition-transform duration-200 group-hover:rotate-3" />
            </a>

            <CardContent className="relative p-6 md:p-8 z-20">
              <h4 className="text-3xl md:text-5xl text-[#a259ff] font-gugi text-center mb-8">
                Harmonia
              </h4>

              {/* Grid de burbujas */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 md:gap-16 place-items-center">
                {bubbles.map((b, idx) => (
                  <div
                    key={idx}
                    className={`relative ${bubbleSize} grid place-items-center`}
                  >
                    <BubbleImage
                      src={b.img}
                      size="w-full"
                      neonColor={b.color}   // color del borde neón
                      neonWidth={3}
                      neonBlur={46}
                      neonOpacity={0.9}
                      durations={{ pop: 580, respawn: 420, float: 6200 }}
                      droplets={22}
                      dispersion={{ min: 240, max: 440 }}
                      gravity={780}
                      drag={0.2}
                      respawnOffset={{ x: 6, y: -4 }}
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}




