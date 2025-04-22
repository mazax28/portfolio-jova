function About() {
  return (
    <div id="about" className="hero min-h-screen">
      <div className="hero-content flex-col justify-between w-full">
        <div className="w-full text-left">
          <h1 className="text-[50px] md:text-[70px] lg:text-[90px] font-semibold leading-tight mb-8">
            Sobre mí
          </h1>
        </div>

        {/* Columna 2 - Card alineado arriba */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Imagen a la izquierda */}
          <div className="flex-1 flex justify-center w-full">
            <img 
              src="/images/jorgevazquez.jpg" 
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
                Estudiante de Arquitectura y Urbanismo con sólidos conocimientos en planos arquitectónicos, modelado 3D y render enfocado en la arquitectura. Me destaco por mi energía, compromiso y deseo constante de crecer profesionalmente, contribuyendo al éxito de los equipos con los que colaboro.
              </p>
            </div>

            {/* Habilidades */}
            <div className="card border border-[#fafafa] rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold mb-2">Habilidades</h2>
              <p className="text-sm text-gray-300">
                Modelado 3D, Dibujo Técnico, Diseño Arquitectónico, Renderizado, AutoCAD, SketchUp, Lumion, Photoshop, Atención al Cliente, Facturación, Uso de Herramientas Digitales, Buena comunicación.
              </p>
            </div>

            {/* Experiencia */}
            <div className="card border border-[#fafafa] rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold mb-2">Experiencia</h2>
              <p className="text-sm text-gray-300">
                <strong>Auxiliar Administrativo – OdontoVisión</strong> (2021 - 2022): Gestión documental, atención al cliente, coordinación de turnos y apoyo en facturación. <br />
                <strong>Render y Modelado 3D – Lic. Laura Casañas</strong> (2024): Modelado arquitectónico y creación de renders detallados para proyectos.
              </p>
            </div>

            {/* Educación */}
            <div className="card border border-[#fafafa] rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold mb-2">Educación</h2>
              <p className="text-sm text-gray-300">
                Facultad de Arquitectura, Diseño y Arte - Universidad Nacional de Asunción (UNA). <br />
                Carrera: Arquitectura y Urbanismo (2022 - Actualidad).
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
