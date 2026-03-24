import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { techIcons } from "./techIcons";
import { toolIcons } from "./toolIcons";
import { useI18n } from "@/lib/i18n";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

function TechTile({ name, icon: Icon }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -2, scale: 1.02 }}
      className="group flex flex-col items-center justify-center gap-2 p-4 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#6C63FF]/40 transition-all duration-200 cursor-default"
    >
      {Icon && (
        <Icon
          size={30}
          className="text-[#8888A8] group-hover:text-[#F0F0FA] transition-colors duration-200"
        />
      )}
      <span className="text-[#8888A8] group-hover:text-[#F0F0FA] text-xs font-sans text-center transition-colors duration-200 leading-tight">
        {name}
      </span>
    </motion.div>
  );
}

export default function TechGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useI18n();

  return (
    <section ref={ref} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-label mb-4"
        >
          {"// " + t("stack.tech_label")}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-sora font-bold text-3xl md:text-4xl text-[#F0F0FA] mb-10"
        >
          {t("stack.tech_title")}
        </motion.h2>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-3 mb-16"
        >
          {techIcons.map((item) => (
            <TechTile key={item.name} name={item.name} icon={item.icon} />
          ))}
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="font-sora font-bold text-3xl md:text-4xl text-[#F0F0FA] mb-10"
        >
          {t("stack.tools_title")}
        </motion.h2>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3"
        >
          {toolIcons.map((item) => (
            <TechTile key={item.name} name={item.name} icon={item.icon} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
