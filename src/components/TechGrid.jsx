import { techIcons } from "./techIcons";
import { toolIcons } from "./toolIcons";
import { I18nProvider, useI18n } from "@/lib/i18n";

const PALETTE = [ "rgba(255,115,80,1)", "rgba(34,197,94,1)", "rgba(59,130,246,1)", "rgba(162,89,255,1)", "rgba(255,215,0,1)", "rgba(255,20,147,1)", "rgba(0,255,255,1)", "rgba(173,255,47,1)", "rgba(255,69,0,1)", "rgba(138,43,226,1)", "rgba(0,191,255,1)", "rgba(240,128,128,1)" ];
const TOOL_COLOR = { "VS Code":"rgba(0,122,204,1)", "Visual Studio":"rgba(162,89,255,1)", "Git":"rgba(240,80,50,1)", "Figma":"rgba(242,78,30,1)", "Adobe":"rgba(255,0,0,1)" };

function Tile({ children, color }) {
  return (
    <div className="group relative w-full h-[135px] rounded-[20px] border border-[#007acc] bg-transparent flex flex-col items-center justify-center p-4 transition-all duration-200 hover:-translate-y-1 hover:scale-[1.01]" style={{ boxShadow: "inset 0 0 18px rgba(255,255,255,.06)" }}>
      <span aria-hidden className="pointer-events-none absolute -inset-5 rounded-[26px] opacity-0 blur-[52px] transition-opacity duration-200 group-hover:opacity-90" style={{ background: `radial-gradient(closest-side, ${color}, transparent 65%)` }} />
      <span aria-hidden className="pointer-events-none absolute inset-0 rounded-[20px]" style={{ boxShadow: `0 0 0 1.5px ${color}` }} />
      <span aria-hidden className="pointer-events-none absolute inset-0 rounded-[20px] opacity-0 transition-opacity duration-200 group-hover:opacity-100" style={{ boxShadow: `0 0 0 2.5px ${color}` }} />
      {children}
    </div>
  );
}

export default function TechGrid() {
  const { t } = useI18n();

  return (
    <section className="px-6 md:px-[155px] py-12 font-gugi">
      <h3 className="text-3xl md:text-4xl text-white text-shadow-black mb-6 font-gugi">{t("tech.title")}</h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
        {techIcons.map((item, i) => {
          const Icon = item.icon;
          const color = PALETTE[i % PALETTE.length];
          return (
            <Tile key={`tech-${item.name}`} color={color}>
              {Icon && <Icon className="mb-2 transition-transform duration-200 group-hover:scale-[1.06]" size={40} color="#fff" aria-hidden />}
              <span className="text-white text-2xl font-gugi">{item.name}</span>
            </Tile>
          );
        })}
      </div>

      <h3 className="text-3xl md:text-4xl text-white text-shadow-black mb-6 font-gugi">{t("tools.title")}</h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {toolIcons.map((item, i) => {
          const Icon = item.icon;
          const color = TOOL_COLOR[item.name] || PALETTE[i % PALETTE.length];
          return (
            <Tile key={`tool-${item.name}`} color={color}>
              <div className="flex flex-col items-center justify-center h-full">
                {Icon ? <Icon size={40} color="#fff" className="transition-transform duration-200 group-hover:scale-[1.06]" aria-hidden /> : null}
                <span className="text-white text-2xl font-gugi mt-2">{item.name}</span>
              </div>
            </Tile>
          );
        })}
      </div>
    </section>
  );
}

