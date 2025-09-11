import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
  <footer id="contact" className="bg-[#d9d9d9] min-h-[160px] md:h-[189px] flex items-center justify-between gap-6 flex-col md:flex-row px-6 md:px-12 py-6 font-gugi">
      <div className="flex flex-col gap-2">
        <p className="text-black text-xl md:text-[32px] [font-family:'Gugi-Regular',Helvetica]">Telefono: +54 9 3816348569</p>
        <p className="text-black text-xl md:text-[32px] [font-family:'Gugi-Regular',Helvetica]">Mail: Francocornejoc15@gmail.com</p>
        <p className="text-black text-xl md:text-[32px] [font-family:'Gugi-Regular',Helvetica]">San Miguel de Tucuman, Tucuman, Argentina</p>
      </div>

      <div className="flex gap-4">
        <a href="https://github.com/francocor" target="_blank" className="w-16 h-16 md:w-24 md:h-24 grid place-items-center rounded-full hover:bg-black/10">
          <Github className="w-8 h-8 md:w-12 md:h-12 text-black" />
        </a>
        <a href="https://www.linkedin.com/in/franco-cornejo-3b3aaa209/" target="_blank" className="w-16 h-16 md:w-24 md:h-24 grid place-items-center rounded-full hover:bg-black/10">
          <Linkedin className="w-8 h-8 md:w-12 md:h-12 text-black" />
        </a>
      </div>
    </footer>
  );
}