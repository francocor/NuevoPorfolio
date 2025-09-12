import { techIcons } from "./techIcons";
import { toolIcons } from "./toolIcons";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiMysql, SiPostgresql, SiExpress, SiPython, SiDotnet } from "react-icons/si";

/* Paleta de glows (rgba para controlar la transparencia) */
const PALETTE = [
  "rgba(255,115,80,1)",  // naranja
  "rgba(34,197,94,1)",   // verde
  "rgba(59,130,246,1)",  // celeste
  "rgba(162,89,255,1)",  // violeta
];

function Tile({ children, color = "rgba(162,89,255,1)" }) {
  return (
    <div
      className={[
        "group relative w-full h-[135px] rounded-[20px]",
        "border border-[#007acc]",                          // borde base
        "bg-transparent flex flex-col items-center justify-center p-4",
        "transition-all duration-200 ease-out",
        "hover:-translate-y-1 hover:scale-[1.01]",          // hop suave
      ].join(" ")}
      /* borde y sombra interior sutil (siempre encendidos suave) */
      style={{
        boxShadow: `inset 0 0 18px rgba(255,255,255,.06)`,
      }}
    >
      {/* Glow exterior que aparece en hover (difuminado y del color) */}
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-5 rounded-[26px] opacity-0 blur-[42px] transition-opacity duration-200 group-hover:opacity-90"
        style={{
          background: `radial-gradient(closest-side, ${color}, transparent 65%)`,
        }}
      />
      {/* Aro fino de color que se intensifica en hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[20px] transition-[box-shadow] duration-200"
        style={{
          boxShadow: `0 0 0 1.5px ${color}`,
        }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[20px] opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        style={{
          boxShadow: `0 0 0 2.5px ${color}`,
        }}
      />

      {children}
    </div>
  );
}

export default function TechGrid() {
  /* Lista “tech” con colores alternados de la paleta */
  const techList = [
    { Icon: FaHtml5, label: "HTML" },
    { Icon: FaCss3Alt, label: "CSS" },
    { Icon: SiTailwindcss, label: "Tailwind" },
    { Icon: SiJavascript, label: "JavaScript" },
    { Icon: FaReact, label: "React" },
    { Icon: FaNodeJs, label: "Node.js" },
    { Icon: FaDatabase, label: "SQL Server" },
    { Icon: SiMysql, label: "MySQL" },
    { Icon: SiPostgresql, label: "PostgreSQL" },
    { Icon: SiExpress, label: "Express" },
    { Icon: SiPython, label: "Python" },
    { Icon: SiDotnet, label: "C#" },
  ];

  return (
    <section className="px-6 md:px-[155px] py-12 font-gugi">
      <h3 className="text-3xl md:text-4xl text-white [font-family:'Gugi-Regular',Helvetica] [text-shadow:0px_3px_0px_#00000066] mb-6">
        ⚙ Tecnologías que domino
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
        {techList.map(({ Icon, label }, i) => {
          const color = PALETTE[i % PALETTE.length];
          return (
            <Tile key={label} color={color}>
              <Icon className="mb-2 transition-transform duration-200 group-hover:scale-[1.06]" size={40} color="#fff" />
              <span className="text-white text-2xl font-gugi">{label}</span>
            </Tile>
          );
        })}
      </div>

      <h3 className="text-3xl md:text-4xl text-white [font-family:'Gugi-Regular',Helvetica] [text-shadow:0px_3px_0px_#00000066] mb-6">
        🧰 Herramientas de trabajo
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {toolIcons.map((tool, i) => {
          const color = PALETTE[i % PALETTE.length];

          if (!tool.icon) {
            return (
              <Tile key={tool.name} color={color}>
                <span className="text-white text-2xl font-gugi flex items-center justify-center h-full">
                  {tool.name}
                </span>
              </Tile>
            );
          }

          const Icon = tool.icon;
          return (
            <Tile key={tool.name} color={color}>
              <div className="flex flex-col items-center justify-center h-full">
                <Icon size={40} color="#fff" className="transition-transform duration-200 group-hover:scale-[1.06]" />
                <span className="text-white text-2xl font-gugi mt-2">{tool.name}</span>
              </div>
            </Tile>
          );
        })}
      </div>
    </section>
  );
}
