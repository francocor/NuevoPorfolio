import fullstackTitle from "@/assets/title-fullstack.png";
import { Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { I18nProvider, useI18n } from "@/lib/i18n";

import Proyecto1MedPc from "@/assets/Proyecto1AppMedi.png";
import Proyecto1MedCel from "@/assets/Proyecto1AppMediCel.png";
import Proyecto2Nefro from "@/assets/Proyecto2Nefrog.png";
import Proyecto2NefroCel from "@/assets/Proyecto2NefrogCel.png";
import Proyecto3Hosp from "@/assets/Proyecto3Hospi.png";
import Proyecto3HospCel from "@/assets/Proyecto3HospiCel.png";

const fullStackProjects = [
  { key: "harmonia", title: "Harmonia", desktopImage: Proyecto1MedPc, mobileImage: Proyecto1MedCel, githubUrl: "https://github.com/francocor/HistoriasClinicas" },
  { key: "hospital", title: "Hospital San Pablo", desktopImage: Proyecto3Hosp, mobileImage: Proyecto3HospCel, githubUrl: "https://github.com/Enzogz98/HospSanPablo" },
  { key: "nefrogen", title: "Nefrogen", desktopImage: Proyecto2Nefro, mobileImage: Proyecto2NefroCel, githubUrl: "https://github.com/francocor/Nefrogem" }
];

export default function Projects() {
  const { t } = useI18n();

  return (
    <section id="projects" className="py-16 font-gugi">
      <div className="text-center mb-12">
        <h2 className="inline">
          <span className="text-6xl md:text-8xl text-[#fff] text-shadow-black font-gugi">{t("projects.title_left")}</span>
          <span className="text-6xl md:text-8xl text-[#fff] text-shadow-black font-gugi ml-3">{t("projects.title_right")}</span>
        </h2>
      </div>

      <div className="flex justify-center mb-12">
        <img src={fullstackTitle} alt="Proyectos FullStack" className="w-full max-w-[900px] md:max-w-[1100px] h-auto" />
      </div>

      <div className="bg-gradient-to-b from-gray-900 to-black py-12 overflow-x-auto">
        <div className="flex gap-20 px-6 md:px-[116px] w-max snap-x snap-mandatory">
          {fullStackProjects.map((p, i) => (
            <Card key={p.key} className="w-[90vw] max-w-[850px] md:w-full mx-auto rounded-[25px] border-2 border-[#007acc] shadow-[-4px_17px_40px_10px_#007acc] bg-transparent transition-all duration-300 hover:shadow-[0_0_40px_10px_#00c3ff] hover:border-[#00c3ff] hover:scale-105 snap-center">
              <CardContent className="p-6 md:p-8">
                <h4 className="text-3xl md:text-5xl text-[#458ab9] font-gugi text-center mb-6">{p.title}</h4>

                <div className="flex flex-col lg:flex-row gap-8 mb-6 items-center justify-center">
                  <div className="flex flex-col items-center">
                    <img src={p.desktopImage} alt={`${p.title} desktop`} className="w-[340px] md:w-[420px] lg:w-[480px] h-auto object-contain rounded-xl mb-4 shadow-lg" />
                  </div>
                  <div className="flex flex-col items-center">
                    <img src={p.mobileImage} alt={`${p.title} mobile`} className="w-[120px] md:w-[160px] lg:w-[180px] h-auto object-contain rounded-xl shadow-lg" />
                  </div>
                </div>

                <p className="text-white text-base md:text-2xl font-gugi tracking-wide leading-normal mb-6 text-center">
                  {t(`projects.items.${p.key}`)}
                </p>

                <div className="flex justify-center">
                  <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="bg-white text-black rounded-[20px] h-auto px-6 py-2 flex items-center hover:bg-[#007acc] hover:text-white transition-colors duration-200">
                    <Github className="w-5 h-5 md:w-6 md:h-6 mr-2" />
                    <span className="text-base md:text-xl font-gugi">GitHub</span>
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