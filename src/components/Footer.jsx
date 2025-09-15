import { Github, Linkedin } from "lucide-react";
import { I18nProvider, useI18n } from "@/lib/i18n";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer id="contact" className="bg-[#d9d9d9] min-h-[160px] md:h-[189px] flex items-center justify-between gap-6 flex-col md:flex-row px-6 md:px-12 py-6 font-gugi">
      <div className="flex flex-col gap-2 text-center md:text-left">
        <p className="text-black text-xl md:text-[32px]">{t("footer.phone")}: +54 9 3816348569</p>
        <p className="text-black text-xl md:text-[32px]">{t("footer.mail")}: Francocornejoc15@gmail.com</p>
        <p className="text-black text-xl md:text-[32px]">{t("footer.location")}</p>
      </div>

      <div className="flex gap-4">
        <a href="https://github.com/francocor" target="_blank" rel="noopener noreferrer" className="w-16 h-16 md:w-24 md:h-24 grid place-items-center rounded-full hover:bg-black/10 transition-colors">
          <Github className="w-8 h-8 md:w-12 md:h-12 text-black" />
        </a>
        <a href="https://www.linkedin.com/in/franco-cornejo-3b3aaa209/" target="_blank" rel="noopener noreferrer" className="w-16 h-16 md:w-24 md:h-24 grid place-items-center rounded-full hover:bg-black/10 transition-colors">
          <Linkedin className="w-8 h-8 md:w-12 md:h-12 text-black" />
        </a>
      </div>
    </footer>
  );
}