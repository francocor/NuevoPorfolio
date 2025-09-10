function Tile({ children }) {
  return (
    <div className="w-full h-[135px] rounded-[20px] border border-[#007acc] shadow-[2px_2px_2.4px_3px_#a259ff] bg-transparent flex items-center justify-center p-4">
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
        {Array.from({ length: 12 }).map((_, i) => (
          <Tile key={i}>
            {/* Reemplazá con tus íconos/imágenes */}
            <span className="text-white text-2xl">Tech {i + 1}</span>
          </Tile>
        ))}
      </div>

      <h3 className="text-3xl md:text-4xl text-white [font-family:'Gugi-Regular',Helvetica] [text-shadow:0px_3px_0px_#00000066] mb-6">
        🧰 Herramientas de trabajo
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {Array.from({ length: 12 }).map((_, i) => (
          <Tile key={i}>
            <span className="text-white text-2xl">Tool {i + 1}</span>
          </Tile>
        ))}
      </div>
    </section>
  );
}