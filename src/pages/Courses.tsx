function Courses() {
    const cursos = [
      {
        title: "Diseño Arquitectónico",
        image: "/images/certificado.png",
        description: "Curso sobre técnicas modernas de diseño sostenible.",
        etiquetas: ["Arquitectura", "Diseño"],
      },
      {
        title: "Revit Avanzado",
        image: "/images/certificado.png",
        description: "Domina modelado BIM con Revit.",
        etiquetas: ["BIM", "Revit"],
      },
      {
        title: "Renderizado con Lumion",
        image: "/images/certificado.png",
        description: "Aprende a crear renders realistas y animaciones.",
        etiquetas: ["Lumion", "Render"],
      },
    ];
  
    return (
      <div id="courses" className="hero min-h-screen py-[2rem] px-[1rem] md:px-[2rem] lg:px-[4rem]">
        <div className="hero-content flex-col w-full gap-12">
          <div className="w-full text-left">
            <h1 className="text-[50px] md:text-[70px] lg:text-[90px] font-semibold leading-tight mb-4">
              Cursos
            </h1>
          </div>
  
          {/* Título alineado izquierda */}
          
  
          {/* Grid de cursos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {cursos.map((curso, idx) => (
              <div
                key={idx}
                className="card w-full bg-white/5 backdrop-blur-md rounded-lg shadow-md"
              >
                <figure>
                  <img
                    src={curso.image}
                    alt={curso.title}
                    className="w-full h-[200px] object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-white">
                    {curso.title}
                  </h2>
                  <p className="text-sm text-gray-300">{curso.description}</p>
                  <div className="card-actions justify-end mt-4">
                    {curso.etiquetas.map((tag, i) => (
                      <div key={i} className="badge badge-outline text-gray-400 border-[#fafafa]">
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  export default Courses;
  