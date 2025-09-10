import fullstackTitle from "@/assets/title-fullstack.png"; // poné tu imagen acá
import { Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { fullStackProjects } from "@/data/content";

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
        <div className="flex gap-8 px-6 md:px-[116px] w-max">
          {fullStackProjects.map((project, i) => (
            <Card
              key={i}
              className="min-w-[320px] md:min-w-[980px] lg:min-w-[1161px] rounded-[35px] border-2 border-[#007acc] shadow-[-4px_17px_77.1px_49px_#007acc] bg-transparent"
            >
              <CardContent className="p-6 md:p-8">
                <h4 className="text-3xl md:text-5xl text-[#458ab9] [font-family:'Gugi-Regular',Helvetica] text-center mb-6">
                  {project.title}
                </h4>

                <div className="flex flex-col lg:flex-row gap-6 mb-6">
                  {/* Desktop mock */}
                  <div className="flex-1">
                    <div className="bg-gray-800 rounded-lg p-4 mb-4">
                      <div className="bg-gray-700 rounded-t-lg p-2 flex items-center gap-2 mb-2">
                        <div className="flex gap-1">
                          <div className="w-3 h-3 bg-red-500 rounded-full" />
                          <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                          <div className="w-3 h-3 bg-green-500 rounded-full" />
                        </div>
                        <div className="flex-1 bg-gray-600 rounded px-4 py-1 text-white text-sm">
                          https://www.google.com/chrome/
                        </div>
                      </div>
                      <img
                        src={project.desktopImage || ""}
                        alt={`${project.title} desktop`}
                        className="w-full h-[220px] md:h-[341px] object-cover rounded"
                      />
                    </div>
                  </div>

                  {/* Mobile mock */}
                  <div className="w-[180px] md:w-[236px] mx-auto">
                    <div className="bg-black rounded-[18px] border-8 border-white overflow-hidden aspect-[0.46]">
                      <div className="flex justify-between items-center px-4 md:px-6 py-2 text-white text-sm">
                        <span>9:30</span>
                        <div className="flex gap-1">
                          <div className="w-4 h-2 bg-white rounded-sm" />
                          <div className="w-4 h-2 bg-white rounded-sm" />
                          <div className="w-4 h-2 bg-white rounded-sm" />
                        </div>
                      </div>
                      <img
                        src={project.mobileImage || ""}
                        alt={`${project.title} mobile`}
                        className="w-full h-[260px] md:h-[377px] object-cover"
                      />
                      <div className="flex justify-center py-4">
                        <div className="w-[80px] md:w-[108px] h-1 bg-white rounded-xl" />
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-white text-base md:text-2xl [font-family:'Gugi-Regular',Helvetica] tracking-wide leading-normal mb-6">
                  {project.description}
                </p>

                <div className="flex justify-center">
                  <Button className="bg-white text-black rounded-[20px] h-auto px-6 py-2">
                    <Github className="w-5 h-5 md:w-6 md:h-6 mr-2" />
                    <span className="text-base md:text-xl [font-family:'Gugi-Regular',Helvetica]">
                      GitHub
                    </span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}