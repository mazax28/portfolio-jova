
function Home() {
  return (
    <div id="home" className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row justify-between w-full">
        
        {/* Columna 1 - Título alineado a la izquierda y abajo */}
        <div className="flex-1 flex items-end justify-start">
          <h1 className="text-[60px] md:text-[80px] lg:text-[112px] font-semibold leading-tight">
            Estudiante <br />de <br />Arquitectura
          </h1>
        </div>

        {/* Columna 2 - Card alineado arriba */}
        <div className="flex-1 flex items-start justify-end">
          <div className="card max-w-sm border border-[#fafafa] rounded-lg shadow-2xl p-6">
            <h2 className="text-2xl font-bold mb-2">Hola, soy Jorge Vazquez</h2>
            <p className="text-[14px] text-gray-300 font-semibold ">
              Soy un estudiante apasionado por el diseño arquitectónico, con enfoque en la innovación y sostenibilidad.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;
