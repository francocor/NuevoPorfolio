import { Card, CardContent } from "@/components/ui/card";
import { useI18n } from "@/lib/i18n";

export default function About() {
  const { t } = useI18n();

  return (
    <section id="about" className="px-6 md:px-[154px] py-16 font-gugi">
      <h2 className="text-4xl md:text-6xl text-white text-center font-gugi text-shadow-black mb-8">
        {t("about.title")}
      </h2>

      <Card className="rounded-[20px] border-[3px] border-[#007acc] shadow-[2px_4px_2.4px_3px_#a259ff] bg-transparent">
        <CardContent className="p-6 md:p-8">
          <p className="text-white text-xl md:text-2xl font-gugi leading-relaxed space-y-4">
            <span>{t("about.p1")}</span>
            <br />
            <span>{t("about.p2")}</span>
            <br />
            <span>{t("about.p3")}</span>
            <br />
            <span>{t("about.p4")}</span>
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
