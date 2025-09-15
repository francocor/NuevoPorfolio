import { useI18n } from "@/lib/i18n";

export default function Hero() {
  const { lang, toggleLang, t } = useI18n();

  return (
    <section id="home" className="flex flex-col items-center py-10 font-gugi">
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl text-white text-shadow-black mb-3 font-gugi">
          {t("hero.name")}
        </h1>
        <p className="text-2xl md:text-4xl text-white text-shadow-black font-gugi">
          {t("hero.role1")}
        </p>
        <p className="text-2xl md:text-4xl text-white text-shadow-black font-gugi">
          {t("hero.role2")}
        </p>
      </div>

      {/* Botón global de idioma */}
      <div className="mt-8 flex items-center">
        <button
          type="button"
          onClick={toggleLang}
          aria-label={t("hero.toggle_aria")}
          className="relative flex items-center bg-[#007acc] rounded-[40px] shadow-[2px_4px_2.4px_3px_#a259ffc2] border-4 border-purple-500 px-2 py-1 w-[136px] h-[40px] focus:outline-none"
        >
          <span
            className="absolute top-[1px] left-[16px] w-[42px] h-[28px] rounded-full bg-black transition-all duration-300 z-10"
            style={{ transform: lang === "es" ? "translateX(0)" : "translateX(54px)" }}
          />
          <span className="relative z-20 flex items-center w-full justify-between px-4">
            <span className={`text-white text-xl font-gugi ${lang === "es" ? "font-bold" : ""}`}>ES</span>
            <span className="text-white text-xl mx-2 font-gugi">/</span>
            <span className={`text-white text-xl font-gugi ${lang === "en" ? "font-bold" : ""}`}>EN</span>
          </span>
        </button>
      </div>
    </section>
  );
}
