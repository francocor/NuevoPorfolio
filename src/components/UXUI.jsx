// src/components/UXUI.jsx
import uxuiTitle from "@/assets/title-uxui.png"; // guardá tu imagen en src/assets
import { Card, CardContent } from "@/components/ui/card";
import { uxuiProjects } from "@/data/content";

export default function UXUI() {
  return (
  <section className="py-16 font-gugi">
      {/* Título UX/UI como imagen */}
      <div className="flex justify-center mb-12">
        <img
          src={uxuiTitle}
          alt="Proyectos UX/UI"
          className="w-full max-w-[600px] md:max-w-[800px] h-auto"
        />
      </div>

      {/* Resto de tu grid UX/UI */}
      <div className="px-6 md:px-[102px]">
        <Card className="w-full md:w-[1161px] min-h-[600px] md:h-[1305px] rounded-[35px] border-2 border-[#a259ff] shadow-[-4px_17px_77.1px_49px_#a259ff] bg-transparent mx-auto">
          <CardContent className="p-6 md:p-8">
            <h4 className="text-3xl md:text-5xl text-[#a259ff] [font-family:'Gugi-Regular',Helvetica] text-center mb-8">
              Harmonia
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center">
              {uxuiProjects.map((p, idx) => (
                <div key={idx} className="relative">
                  <div
                    className={`w-[320px] h-[320px] md:w-[450px] md:h-[450px] ${p.color} rounded-full shadow-[-4px_17px_77.1px_49px_rgba(255,114,98,0.5)] flex items-center justify-center`}
                  >
                    <img
                      src={p.image || ""}
                      alt={`UX/UI Project ${idx + 1}`}
                      className="max-w-[260px] md:max-w-[333px] max-h-[260px] md:max-h-[305px] object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}