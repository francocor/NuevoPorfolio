import { useState } from "react";

export default function Hero() {
  const [lang, setLang] = useState("ES");
  return (
  <section id="home" className="flex flex-col items-center py-10 font-gugi">
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl text-white [font-family:'Gugi-Regular',Helvetica] [text-shadow:0px_3px_0px_#00000066] mb-3">
          Franco Cornejo
        </h1>
        <p className="text-2xl md:text-4xl text-white [font-family:'Gugi-Regular',Helvetica] [text-shadow:0px_3px_0px_#00000066]">
          Programador Full Stack
        </p>
        <p className="text-2xl md:text-4xl text-white [font-family:'Gugi-Regular',Helvetica] [text-shadow:0px_3px_0px_#00000066]">
          Diseñador UX/UI
        </p>
      </div>

      {/* Toggle idioma tipo switch */}
      <div className="mt-8 flex items-center">
        <button
          className="relative flex items-center bg-[#007acc] rounded-[40px] shadow-[2px_4px_2.4px_3px_#a259ffc2] border-4 border-purple-500 px-2 py-1 w-[136px] h-[40px] focus:outline-none"
          onClick={() => setLang(lang === "ES" ? "EN" : "ES")}
          aria-label="Cambiar idioma"
        >
          {/* Círculo negro animado */}
          <span
            className={`absolute top-[1px] left-[16px] w-[42px] h-[28px] rounded-full bg-black transition-all duration-300 z-10 flex items-center justify-center`}
            style={{
                transform: lang === "ES" ? "translateX(0)" : "translateX(54px)"
            }}
          ></span>
          {/* Texto ES / EN */}
          <span className="relative z-20 flex items-center w-full justify-between px-4">
            <span className={`text-white text-xl [font-family:'Gugi-Regular',Helvetica] transition-colors duration-300 ${lang === "ES" ? "font-bold" : ""}`}>ES</span>
            <span className="text-white text-xl [font-family:'Gugi-Regular',Helvetica] mx-2">/</span>
            <span className={`text-white text-xl [font-family:'Gugi-Regular',Helvetica] transition-colors duration-300 ${lang === "EN" ? "font-bold" : ""}`}>EN</span>
          </span>
        </button>
      </div>
    </section>
  );
}