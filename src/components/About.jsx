import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
  <section id="about" className="px-6 md:px-[154px] py-16 font-gugi">
  <h2 className="text-4xl md:text-6xl text-white text-center font-gugi [text-shadow:0px_3px_0px_#00000066] mb-8">
        Mi camino en el desarrollo
      </h2>

      <Card className="rounded-[20px] border-[3px] border-[#007acc] shadow-[2px_4px_2.4px_3px_#a259ff] bg-transparent">
        <CardContent className="p-6 md:p-8">
          <p className="text-white text-xl md:text-2xl font-gugi leading-relaxed">
            Soy programador Full Stack y diseñador UX/UI de San Miguel de Tucumán, Argentina.
            <br />
            Actualmente trabajo como freelancer y estoy en constante aprendizaje, combinando lógica y creatividad para desarrollar soluciones digitales funcionales y atractivas.
            <br />📚 Graduado en la UTN Argentina, ahora curso una
            especialización en Diseño UX/UI, para crear productos centrados en el usuario.
            <br />🎮 Fuera del código disfruto los videojuegos, el gym y las buenas series.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}