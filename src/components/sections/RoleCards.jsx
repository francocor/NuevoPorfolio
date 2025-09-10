import React, { useState } from "react";
import RoleCard from "@/components/cards/RoleCard";

// Importá tus imágenes reales:
import devImg from "@/assets/porfoliofullstack.png";
import uxuiImg from "@/assets/porfoliouxui.png";

export default function RoleCards() {
  const [openDev, setOpenDev] = useState(false);
  const [openUx, setOpenUx] = useState(false);

  return (
  <section className="py-12 font-gugi">
  <div className="flex flex-wrap justify-center gap-12 items-center">
        <RoleCard
          imageSrc={devImg}
          imageAlt="Developer working at desk with laptop and monitors"
          gradient="from-[#007acc] to-[#1e1e1e]"
          shadow="shadow-[-4px_17px_77.1px_49px_#007acc]"
          role="Full Stack Developer"
          quote="Me especializo en construir soluciones web completas, desde el backend robusto hasta el frontend interactivo. Trabajo con React, Node.js y bases de datos modernas, optimizando rendimiento y experiencia."
          open={openDev}
          onToggle={() => setOpenDev((v) => !v)}
        />

        <RoleCard
          imageSrc={uxuiImg}
          imageAlt="UX/UI Designer working with Figma and Tailwind"
          gradient="from-[#a259ff] to-[#1e1e1e]"
          shadow="shadow-[-4px_17px_77.1px_49px_#a259ff]"
          role="UX/UI Designer"
          quote="Diseño experiencias centradas en las personas con Figma y principios de accesibilidad para crear interfaces claras, intuitivas y atractivas."
          open={openUx}
          onToggle={() => setOpenUx((v) => !v)}
        />
      </div>
    </section>
  );
}