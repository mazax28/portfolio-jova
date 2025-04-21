import React from 'react';

function Projects() {
  return (
    <div className="min-h-screen px-12 py-8">
      
      {/* Título principal */}
      <h1 className="text-[50px] md:text-[70px] lg:text-[90px] font-semibold leading-tight mb-12">
        Proyectos
      </h1>

      {/* Lista de Proyectos */}
      <div className="flex flex-col gap-12">
        
        {/* Proyecto 1 */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          
          {/* Imagen del proyecto */}
          <div className="flex-1">
            <img 
                src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"

              alt="Proyecto 1"
              className="w-[300px] h-[200px] rounded-lg shadow-lg object-cover"
            />
          </div>

          {/* Info del proyecto */}
          <div className="flex-1 card border border-[#fafafa] rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-2">Nombre del Proyecto 1</h2>
            <p className="text-sm mb-4">
              Breve descripción del proyecto, sus objetivos, metodología y resultados clave. Un proyecto de diseño que explora formas sostenibles de habitar espacios urbanos.
            </p>
            <div>
                <a 
                href="/proyecto1.pdf" // Asegúrate que este archivo exista o usa una URL válida
                download
                className="btn bg-[#fafafa] text-[#09090b] hover:bg-[#e4e4e7]"
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
                src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"

              alt="Proyecto 2"
              className="w-[300px] h-[200px] rounded-lg shadow-lg object-cover"
            />
          </div>

          {/* Info del proyecto */}
          <div className="flex-1 card border border-[#fafafa] rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-2">Nombre del Proyecto 2</h2>
            <p className="text-sm mb-4">
              Este proyecto se centró en la reestructuración de espacios interiores, integrando elementos de diseño biofílico y materiales reciclables.
            </p>
            <div>
                <a 
                href="/proyecto1.pdf" // Asegúrate que este archivo exista o usa una URL válida
                download
                className="btn bg-[#fafafa] text-[#09090b]  hover:bg-[#e4e4e7]"
    >
                Descargar Proyecto
                </a>

            </div>
            
          </div>
        </div>

        {/* Puedes seguir agregando más proyectos con la misma estructura */}

      </div>
    </div>
  );
}

export default Projects;
