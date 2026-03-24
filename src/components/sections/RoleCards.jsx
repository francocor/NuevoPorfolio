import React, { useState } from "react";
import RoleCard from "@/components/cards/RoleCard";
import { I18nProvider, useI18n } from "@/lib/i18n";
import devImg from "@/assets/porfoliofullstack.png";
import uxuiImg from "@/assets/porfoliouxui.png";

export default function RoleCards() {
  const [openDev, setOpenDev] = useState(false);
  const [openUx, setOpenUx] = useState(false);
  const { t } = useI18n();

  return (
    <section className="py-12 font-gugi text-white">
      <div className="flex flex-wrap justify-center gap-12 items-center">
        <RoleCard
          theme="blue"
          imageSrc={devImg}
          imageAlt="Developer at desk"
          hoverColor="rgba(59,130,246,1)"
          role={t("roles.dev_title")}
          quote={t("roles.dev_quote")}
          open={openDev}
          onToggle={() => setOpenDev(v => !v)}
        />

        <RoleCard
          theme="violet"
          imageSrc={uxuiImg}
          imageAlt="UX/UI designer"
          hoverColor="rgba(162,89,255,1)"
          role={t("roles.ux_title")}
          quote={t("roles.ux_quote")}
          open={openUx}
          onToggle={() => setOpenUx(v => !v)}
        />
      </div>
    </section>
  );
}