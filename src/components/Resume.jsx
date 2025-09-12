import { FaFilePdf } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

function GlowButtons({ href, label, subtitle, downloadName, color }) {
  return (
    <div className="relative w-full max-w-[520px] mx-auto group">
      {/* Glow difuminado */}
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-4 rounded-2xl opacity-80 blur-[44px] transition-opacity duration-200 group-hover:opacity-100"
        style={{ background: `radial-gradient(closest-side, ${color}, transparent 65%)` }}
      />
      {/* Contenido */}
      <div
        className={[
          "relative z-[1] flex items-center justify-between gap-3",
          "px-5 py-4 rounded-2xl bg-[#0f0f12]/70 backdrop-blur-sm",
          "transition-transform duration-200 ease-out group-hover:-translate-y-1 group-hover:scale-[1.01] active:scale-[.99]",
        ].join(" ")}
        style={{ boxShadow: `0 0 25px ${color}` }}
      >
        <div className="flex flex-col items-start gap-1">
          <div className="flex items-center gap-2">
            <FaFilePdf className="text-white/90 w-6 h-6" />
            <span className="text-white text-lg md:text-xl font-gugi">{label}</span>
          </div>
          <span className="text-xs text-white/70">{subtitle}</span>
        </div>
        <div className="flex items-center gap-2">
          {/* Ver */}
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl px-3 py-2 bg-white/10 text-white text-sm hover:bg-white/15 transition-colors"
          >
            Ver
          </a>
          {/* Descargar */}
          <a
            href={href}
            download={downloadName}
            className="inline-flex items-center gap-1 rounded-xl px-3 py-2 bg-[#a259ff] hover:bg-[#843bd6] text-white text-sm transition-colors"
          >
            <FiDownload className="w-4 h-4" />
            Descargar
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Resume() {
  return (
    <section id="resume" className="py-16 font-gugi">
      {/* Título */}
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

      {/* CVs en grid responsivo */}
      <div className="px-6 md:px-[138px] grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* CV Español */}
        <div className="flex flex-col gap-6">
          <div className="relative w-full rounded-xl overflow-hidden">
            {/* Glow neón alrededor del iframe */}
            <span
              aria-hidden
              className="absolute -inset-3 rounded-xl blur-[40px] opacity-80 pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(34,197,94,0.7), transparent 70%)" }}
            />
            <iframe
              title="CV Español"
              src="/CV_FrancoCornejo_ES.pdf#toolbar=1&navpanes=0&scrollbar=1&zoom=page-width"
              className="relative w-full h-[70vh] md:h-[78vh] lg:h-[780px] rounded-xl z-[1]"
            />
          </div>
          <GlowButtons
            href="/CV_FrancoCornejo_ES.pdf"
            label="CV Español"
            subtitle="Versión en español (PDF)"
            downloadName="CV_FrancoCornejo_ES.pdf"
            color="rgba(34,197,94,1)" // verde
          />
        </div>

        {/* CV Inglés */}
        <div className="flex flex-col gap-6">
          <div className="relative w-full rounded-xl overflow-hidden">
            <span
              aria-hidden
              className="absolute -inset-3 rounded-xl blur-[40px] opacity-80 pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(59,130,246,0.7), transparent 70%)" }}
            />
            <iframe
              title="CV English"
              src="/CV_FrancoCornejo_EN.pdf#toolbar=1&navpanes=0&scrollbar=1&zoom=page-width"
              className="relative w-full h-[70vh] md:h-[78vh] lg:h-[780px] rounded-xl z-[1]"
            />
          </div>
          <GlowButtons
            href="/CV_FrancoCornejo_EN.pdf"
            label="CV English"
            subtitle="English version (PDF)"
            downloadName="CV_FrancoCornejo_EN.pdf"
            color="rgba(59,130,246,1)" // celeste
          />
        </div>
      </div>
    </section>
  );
}

