import fullstackTitle from "@/assets/title-fullstack.png"; // poné tu imagen acá
import { Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// Array de proyectos con imágenes importadas
const fullStackProjects = [
  {
    title: "Harmonia",
    description:
      "Desarrollo de aplicación web para profesionales de la salud con sistema de historias clínicas digitales, carga de consultas, recetas médicas y gestión de turnos. Incluye login por rol (profesional, secretaria, administrador), paneles de control, filtros por pacientes y visualización de agenda médica. Tecnologías: React.js, Node.js, MySQL.",
    desktopImage: Proyecto1MedPc,
    mobileImage: Proyecto1MedCel,
    githubUrl: "https://github.com/francocor/HistoriasClinicas",
  },
  {
    title: "Hospital San Pablo",
    description:
      "Desarrollo de sitio institucional para brindar información a la comunidad sobre servicios, especialidades y campañas de prevención. Implementación de una app interna para el personal con login para gestionar documentación y optimizar trámites. Tecnologías: React.js, Node.js, MySQL",
    desktopImage: Proyecto3Hosp,
    mobileImage: Proyecto3HospCel,
    githubUrl: "https://github.com/Enzogz98/HospSanPablo",
  },
  {
    title: "Nefrogen",
    description:
      "Sitio web institucional con información sobre el equipo médico, especialidades y atención al público. Integración de turnos en línea. Tecnología: React.js",
    desktopImage: Proyecto2Nefro,
    mobileImage: Proyecto2NefroCel,
    githubUrl: "https://github.com/francocor/Nefrogem",
  },
];
import Proyecto1MedPc from "@/assets/Proyecto1AppMedi.png";
import Proyecto1MedCel from "@/assets/Proyecto1AppMediCel.png";
import Proyecto2Nefro from "@/assets/Proyecto2Nefrog.png";
import Proyecto2NefroCel from "@/assets/Proyecto2NefrogCel.png";
import Proyecto3Hosp from "@/assets/Proyecto3Hospi.png";
import Proyecto3HospCel from "@/assets/Proyecto3HospiCel.png";

export default function Projects() {
  return (
  <section id="projects" className="py-16 font-gugi">
      {/* Título general */}
      <div className="text-center mb-12">
        <h2 className="inline">
          <span className="text-6xl md:text-8xl text-[#007acc] [font-family:'Gugi-Regular',Helvetica] [text-shadow:0px_3px_0px_#00000066]">
            Mis
          </span>
          <span className="text-6xl md:text-8xl text-[#a259ff] [font-family:'Gugi-Regular',Helvetica] [text-shadow:0px_3px_0px_#00000066] ml-3">
            Proyectos
          </span>
        </h2>
      </div>

      {/* Encabezado FullStack como imagen */}
      <div className="flex justify-center mb-12">
        <img
          src={fullstackTitle}
          alt="Proyectos FullStack"
          className="w-full max-w-[900px] md:max-w-[1100px] h-auto"
        />
      </div>

      {/* Carrusel horizontal simple */}
      <div className="bg-gradient-to-b from-gray-900 to-black py-12 overflow-x-auto">
        <div className="flex gap-20 px-6 md:px-[116px] w-max snap-x snap-mandatory">
          {fullStackProjects.map((project, i) => (
            <Card
              key={i}
              className="w-[90vw] max-w-[850px] md:w-full mx-auto rounded-[25px] border-2 border-[#007acc] shadow-[-4px_17px_40px_10px_#007acc] bg-transparent transition-all duration-300 hover:shadow-[0_0_40px_10px_#00c3ff] hover:border-[#00c3ff] hover:scale-105 snap-center"
            >
              <CardContent className="p-6 md:p-8">
                <h4 className="text-3xl md:text-5xl text-[#458ab9] [font-family:'Gugi-Regular',Helvetica] text-center mb-6">
                  {project.title}
                </h4>

                <div className="flex flex-col lg:flex-row gap-8 mb-6 items-center justify-center">
                  {/* Desktop mock */}
                  <div className="flex flex-col items-center">
                    <img
                      src={project.desktopImage || ""}
                      alt={`${project.title} desktop`}
                      className="w-[340px] md:w-[420px] lg:w-[480px] h-auto object-contain rounded-xl mb-4 shadow-lg"
                    />
                  </div>
                  {/* Mobile mock */}
                  <div className="flex flex-col items-center">
                    <img
                      src={project.mobileImage || ""}
                      alt={`${project.title} mobile`}
                      className="w-[120px] md:w-[160px] lg:w-[180px] h-auto object-contain rounded-xl shadow-lg"
                    />
                  </div>
                </div>

                <p className="text-white text-base md:text-2xl [font-family:'Gugi-Regular',Helvetica] tracking-wide leading-normal mb-6 text-center">
                  {project.description}
                </p>

                <div className="flex justify-center">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black rounded-[20px] h-auto px-6 py-2 flex items-center hover:bg-[#007acc] hover:text-white transition-colors duration-200"
                  >
                    <Github className="w-5 h-5 md:w-6 md:h-6 mr-2" />
                    <span className="text-base md:text-xl [font-family:'Gugi-Regular',Helvetica]">
                      GitHub
                    </span>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}