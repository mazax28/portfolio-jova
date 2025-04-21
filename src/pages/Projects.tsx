
function Projects() {
  return (
    <div id="projects" className="hero min-h-screen py-[2rem] px-[1rem] md:px-[2rem] lg:px-[4rem] ">
      <div className="hero-content flex-col w-full">
        <div className="w-full text-left">
          <h1 className="text-[50px] md:text-[70px] lg:text-[90px] font-semibold leading-tight mb-12">
            Proyectos
          </h1>

        </div>
        <div className="flex flex-col gap-12">
          
          {/* Proyecto 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-6">
            
            {/* Imagen del proyecto */}
            <div className="flex-1">
              <img 
                  src="/images/proyecto2.jpg" // Asegúrate que esta imagen exista en la carpeta public/images

                alt="Proyecto 1"
                className="w-[400px] h-[300px] rounded-lg shadow-lg object-cover md:w-[500px] md:h-[400px] lg:w-[600px] lg:h-[500px]"
              />
            </div>

            {/* Info del proyecto */}
            <div className="flex-1 card border border-[#fafafa] rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-2">Nombre del Proyecto 1</h2>
              <p className="text-sm mb-4 text-gray-300">
                Breve descripción del proyecto, sus objetivos, metodología y resultados clave. Un proyecto de diseño que explora formas sostenibles de habitar espacios urbanos.
              </p>
              <div>
                  <a 
                  href="/proyecto1.pdf" // Asegúrate que este archivo exista o usa una URL válida
                  download
                  className="btn font-semibold bg-[#fafafa] text-[#09090b] hover:bg-[#e4e4e7]"
      >
                  Descargar Proyecto
                  </a>

              </div>
            </div>
          </div>

          {/* Proyecto 2 */}
          <div className="flex flex-col lg:flex-row items-center gap-8">
            
            {/* Imagen del proyecto */}
            <div className="flex-1">
              <img 
                  src="images/proyecto3.jpg" // Asegúrate que esta imagen exista en la carpeta public/images

                alt="Proyecto 2"
                className="w-[400px] h-[300px] rounded-lg shadow-lg object-cover md:w-[500px] md:h-[400px] lg:w-[600px] lg:h-[500px]"
              />
            </div>

            {/* Info del proyecto */}
            <div className="flex-1 card border border-[#fafafa] rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-2">Nombre del Proyecto 2</h2>
              <p className="text-sm mb-4 text-gray-300">
                Este proyecto se centró en la reestructuración de espacios interiores, integrando elementos de diseño biofílico y materiales reciclables.
              </p>
              <div>
                  <a 
                  href="/proyecto1.pdf" // Asegúrate que este archivo exista o usa una URL válida
                  download
                  className="btn font-semibold bg-[#fafafa] text-[#09090b]  hover:bg-[#e4e4e7]"
      >
                  Descargar Proyecto
                  </a>

              </div>
              
            </div>
          </div>

          {/* Puedes seguir agregando más proyectos con la misma estructura */}

        </div>

      </div>
      {/* Título principal */}

      {/* Lista de Proyectos */}
    </div>
  );
}

export default Projects;
