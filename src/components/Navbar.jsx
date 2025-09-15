import { useState } from "react";
import { Button } from "@/components/ui/button";
import { navigationItems } from "@/data/content";
import { Github } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full h-[90px] bg-gradient-to-b from-gray-600 to-black border-b border-[#007acc] z-50 font-gugi">
      <div className="w-full h-full flex items-center justify-between px-6">
        
        <div className="text-white text-4xl [-webkit-text-stroke:1px_#007acc]">
          &lt;FC/&gt;
        </div>

        
        <nav className="hidden md:flex gap-3 items-center">
          {navigationItems.map((item) => (
            <a key={item.target} href={`#${item.target}`}>
              <Button
                variant="outline"
                className="h-10 px-4 rounded-lg border border-[#007acc] shadow-[2px_4px_2.4px_3px_#a259ff] bg-transparent text-white text-lg font-gugi hover:bg-[#007acc]/20"
              >
                {item.label}
              </Button>
            </a>
          ))}

          
          <a
            href="https://github.com/francocor"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="h-10 px-4 rounded-lg border border-[#007acc] shadow-[2px_4px_2.4px_3px_#a259ff] bg-transparent text-white text-lg font-gugi hover:bg-[#007acc]/20 ml-2 flex items-center gap-2"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
              <span className="hidden md:inline">GitHub</span>
            </Button>
          </a>
        </nav>

        
        <div className="md:hidden flex items-center">
          <Button
            variant="outline"
            className="h-10 w-10 flex items-center justify-center border border-[#007acc] bg-transparent text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menú"
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu"
            >
              <line x1="4" y1="8" x2="20" y2="8" />
              <line x1="4" y1="16" x2="20" y2="16" />
            </svg>
          </Button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {open && (
        <div className="fixed inset-0 bg-black/80 z-50 flex flex-col items-center justify-center md:hidden font-gugi">
          <nav className="flex flex-col gap-6 items-center">
            {navigationItems.map((item) => (
              <a
                key={item.target}
                href={`#${item.target}`}
                onClick={() => setOpen(false)}
              >
                <Button
                  variant="outline"
                  className="h-12 px-8 rounded-lg border border-[#007acc] shadow-[2px_4px_2.4px_3px_#a259ff] bg-transparent text-white text-xl font-gugi hover:bg-[#007acc]/20"
                >
                  {item.label}
                </Button>
              </a>
            ))}
            {/* GitHub en mobile */}
            <a
              href="https://github.com/francocor"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="h-12 px-8 rounded-lg border border-[#007acc] shadow-[2px_4px_2.4px_3px_#a259ff] bg-transparent text-white text-xl font-gugi hover:bg-[#007acc]/20 mt-2 flex items-center gap-2"
                aria-label="GitHub"
              >
                <Github className="w-7 h-7" />
                <span className="inline">GitHub</span>
              </Button>
            </a>
          </nav>

          <Button
            variant="outline"
            className="mt-12 h-10 w-10 flex items-center justify-center border border-[#007acc] bg-transparent text-white"
            onClick={() => setOpen(false)}
            aria-label="Cerrar menú"
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-x"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </Button>
        </div>
      )}
    </header>
  );
}