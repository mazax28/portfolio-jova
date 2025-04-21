
function About() {
  return (
    <div id="about" className="min-h-screen px-12 py-8">
      
      {/* Título arriba */}
      <h1 className="text-[50px] md:text-[70px] lg:text-[90px] font-semibold leading-tight mb-8">
        Sobre mí
      </h1>

      {/* Contenido principal: Imagen + Cards */}
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        
        {/* Imagen a la izquierda */}
        <div className="flex-1 flex justify-center w-full">

          <img 
             src="/images/jorgevazquez.jpg" // Asegúrate que esta imagen exista en la carpeta public/images
            alt="Foto de Jorge Vázquez"
            className="w-full max-w-sm rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Cartas a la derecha */}
        <div className="flex-1 grid gap-6">
          
          {/* Quién soy */}
          <div className="card border border-[#fafafa] rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-2">Hola, soy Jorge Vázquez</h2>
            <p className="text-sm text-gray-300">
              Estudiante apasionado por el diseño arquitectónico, enfocado en la innovación y sostenibilidad.
            </p>
          </div>

          {/* Habilidades */}
          <div className="card border border-[#fafafa] rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-2">Habilidades</h2>
            <p className="text-sm text-gray-300">
              AutoCAD, Revit, SketchUp, Adobe Creative Suite, diseño sostenible, modelado 3D, trabajo en equipo.
            </p>
          </div>

          {/* Experiencia */}
          <div className="card border border-[#fafafa] rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-2">Experiencia</h2>
            <p className="text-sm text-gray-300">
              Prácticas en despacho de arquitectura, participación en concursos estudiantiles de diseño.
            </p>
          </div>

          {/* Educación */}
          <div className="card border border-[#fafafa] rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-2">Educación</h2>
            <p className="text-sm text-gray-300">
              Estudiante de Arquitectura en [Nombre de tu universidad], actualmente en [tu semestre/año].
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default About;
