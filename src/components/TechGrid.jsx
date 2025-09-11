import { techIcons } from "./techIcons";
import { toolIcons } from "./toolIcons";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiMysql, SiPostgresql, SiExpress, SiPython, SiDotnet } from 'react-icons/si';

function Tile({ children }) {
  return (
    <div className="w-full h-[135px] rounded-[20px] border border-[#007acc] shadow-[2px_2px_2.4px_3px_#a259ff] bg-transparent flex flex-col items-center justify-center p-4">
      {children}
    </div>
  );
}

export default function TechGrid() {
  return (
  <section className="px-6 md:px-[155px] py-12 font-gugi">
      <h3 className="text-3xl md:text-4xl text-white [font-family:'Gugi-Regular',Helvetica] [text-shadow:0px_3px_0px_#00000066] mb-6">
        ⚙ Tecnologías que domino
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
  {[FaHtml5, FaCss3Alt, SiTailwindcss, SiJavascript, FaReact, FaNodeJs, FaDatabase, SiMysql, SiPostgresql, SiExpress, SiPython, SiDotnet].map((Icon, i) => (
          <Tile key={i}>
            <Icon className="mb-2" size={40} color="#fff" />
            <span className="text-white text-2xl font-gugi">
              {['HTML', 'CSS', 'Tailwind', 'JavaScript', 'React', 'Node.js', 'SQL Server', 'MySQL', 'PostgreSQL', 'Express', 'Python', 'C#'][i]}
            </span>
          </Tile>
        ))}
      </div>

      <h3 className="text-3xl md:text-4xl text-white [font-family:'Gugi-Regular',Helvetica] [text-shadow:0px_3px_0px_#00000066] mb-6">
        🧰 Herramientas de trabajo
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {toolIcons.map((tool, i) => {
          if (!tool.icon) {
            // Solo nombre para JSON Server
            return (
              <Tile key={tool.name}>
                <span className="text-white text-2xl font-gugi flex items-center justify-center h-full">{tool.name}</span>
              </Tile>
            );
          }
          const Icon = tool.icon;
          // Centrar todos los íconos vertical y horizontalmente
          return (
            <Tile key={tool.name}>
              <div className="flex flex-col items-center justify-center h-full">
                <Icon size={40} color="#fff" />
                <span className="text-white text-2xl font-gugi mt-2">{tool.name}</span>
              </div>
            </Tile>
          );
        })}
      </div>
    </section>
  );
}