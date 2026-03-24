import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FileText, Download, Eye } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const CVS = [
  {
    key: "es",
    file: "/CV_FrancoCornejo_ES.pdf",
    color: "#6C63FF",
    glowColor: "rgba(108,99,255,0.2)",
  },
  {
    key: "en",
    file: "/CV_FrancoCornejo_EN.pdf",
    color: "#00D4FF",
    glowColor: "rgba(0,212,255,0.15)",
  },
];

export default function Resume() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useI18n();

  return (
    <section id="resume" ref={ref} className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="section-label mb-4"
        >
          {"// " + t("resume.label")}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="font-sora font-bold text-4xl md:text-5xl text-[#F0F0FA] mb-16"
        >
          {t("resume.title")}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CVS.map(({ key, file, color, glowColor }, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1 }}
              className="flex flex-col gap-4"
            >
              {/* PDF viewer */}
              <div
                className="relative rounded-2xl overflow-hidden border border-white/[0.08]"
                style={{ boxShadow: `0 0 50px ${glowColor}` }}
              >
                <iframe
                  title={`CV ${key.toUpperCase()}`}
                  src={`${file}#toolbar=0&navpanes=0&scrollbar=0&zoom=page-fit`}
                  className="w-full h-[500px] md:h-[640px] block bg-[#0a0a12]"
                />
              </div>

              {/* Action bar */}
              <div className="flex items-center justify-between p-4 rounded-xl border border-white/[0.08] bg-white/[0.02]">
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `${color}18`,
                      border: `1px solid ${color}28`,
                    }}
                  >
                    <FileText size={16} style={{ color }} />
                  </div>
                  <div>
                    <p className="text-[#F0F0FA] font-sans text-sm font-medium">
                      {t(`resume.${key}_label`)}
                    </p>
                    <p className="text-[#8888A8] font-sans text-xs">
                      {t(`resume.${key}_subtitle`)}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-white/[0.08] text-[#8888A8] hover:text-[#F0F0FA] hover:bg-white/[0.06] transition-colors text-xs font-sans"
                  >
                    <Eye size={13} />
                    {t("resume.view")}
                  </a>
                  <a
                    href={file}
                    download
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-white text-xs font-sans transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
                    style={{ background: color }}
                  >
                    <Download size={13} />
                    {t("resume.download")}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
