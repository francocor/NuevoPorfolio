// src/components/UXUI.jsx
import uxuiTitle from "@/assets/title-uxui.png";
import { Card, CardContent } from "@/components/ui/card";
import BubbleImage from "@/components/BubbleImage"; 
import { uxuiProjects } from "@/data/content";

export default function UXUI() {
  // paleta de glows (podés ajustar estos colores a gusto)
  const glows = [
    "radial-gradient(closest-side, rgba(162,89,255,0.45), transparent 65%)", // violeta
    "radial-gradient(closest-side, rgba(34,197,94,0.45), transparent 65%)",   // verde
    "radial-gradient(closest-side, rgba(59,130,246,0.45), transparent 65%)", // celeste
    "radial-gradient(closest-side, rgba(255,115,80,0.50), transparent 65%)", // naranja
  ];

  // tamaño consistente de burbuja
  const bubbleSize = "w-[300px] h-[300px] md:w-[360px] md:h-[360px]";

  return (
    <section className="py-16 font-gugi">
      {/* Título UX/UI */}
      <div className="flex justify-center mb-12">
        <img
          src={uxuiTitle}
          alt="Proyectos UX/UI"
          className="w-full max-w-[600px] md:max-w-[800px] h-auto"
        />
      </div>

      {/* Contenedor principal con fondo oscuro y borde violeta (como en tu captura) */}
      <div className="px-6 md:px-[102px]">
        <Card className="w-full md:w-[1161px] min-h-[600px] md:h-[1305px] rounded-[35px] border-2 border-[#a259ff] bg-[#0f0f12] mx-auto">
          <CardContent className="p-6 md:p-8">
            <h4 className="text-3xl md:text-5xl text-[#a259ff] [font-family:'Gugi-Regular',Helvetica] text-center mb-8">
              Harmonia
            </h4>

            {/* Grid 2×2 como en la imagen */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-16 place-items-center">
              {uxuiProjects.slice(0, 4).map((p, idx) => (
                <div key={idx} className={`relative ${bubbleSize} grid place-items-center`}>
                  {/* Glow detrás de la burbuja */}
                  <div
                    aria-hidden
                    className="absolute inset-0 -z-10 blur-[40px] rounded-full opacity-80"
                    style={{ background: glows[idx % glows.length] }}
                  />

                  {/* “Placa” blanca para simular el círculo blanco de tu diseño */}
                  <div className="absolute inset-[6%] rounded-full bg-white" />

                  {/* Burbuja con imagen y efecto POP realista */}
                  {p.image ? (
                    <div className="relative">
                      <BubbleImage
                        src={p.image}
                        size="w-[86%]"                      // mantiene márgenes dentro del círculo blanco
                        durations={{ pop: 580, respawn: 420, float: 5600 }}
                        droplets={20}
                        dispersion={{ min: 240, max: 440 }}
                        gravity={780}
                        drag={0.2}
                        respawnOffset={{ x: 6, y: -4 }}
                      />
                    </div>
                  ) : (
                    <div className="text-sm text-gray-500">Sin imagen</div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}