import { resumeImages } from "@/data/content";

export default function Resume() {
  return (
  <section id="resume" className="py-16 font-gugi">
      <div className="text-center mb-10">
        <h2 className="inline">
          <span className="text-6xl md:text-8xl text-[#007acc] [font-family:'Gugi-Regular',Helvetica] [text-shadow:0px_3px_0px_#00000066]">
            Mi
          </span>
          <span className="text-6xl md:text-8xl text-[#a259ff] [font-family:'Gugi-Regular',Helvetica] [text-shadow:0px_3px_0px_#00000066] ml-3">
            Resumen
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 px-6 md:px-[138px]">
        {resumeImages.map((img, i) => (
          <img
            key={i}
            src={img || ""}
            alt={`Resume page ${i + 1}`}
            className="w-full md:w-[525px] md:h-[680px] object-cover"
          />
        ))}
      </div>
    </section>
  );
}