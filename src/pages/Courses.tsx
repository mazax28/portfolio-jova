function Courses() {
    const cursos = [
      {
        title: "Diseño Arquitectónico",
        image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
        description: "Curso sobre técnicas modernas de diseño sostenible.",
        etiquetas: ["Arquitectura", "Diseño"],
      },
      {
        title: "Revit Avanzado",
        image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
        description: "Domina modelado BIM con Revit.",
        etiquetas: ["BIM", "Revit"],
      },
      {
        title: "Renderizado con Lumion",
        image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
        description: "Aprende a crear renders realistas y animaciones.",
        etiquetas: ["Lumion", "Render"],
      },
    ];
  
    return (
      <div id="courses" className="min-h-screen py-12 px-4">
        <div className="hero-content flex-col w-full gap-12">
  
          {/* Título alineado izquierda */}
          <h1 className="text-[60px] md:text-[80px] lg:text-[112px] font-semibold leading-tight self-start text-left">
            Cursos
          </h1>
  
          {/* Grid de cursos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {cursos.map((curso, idx) => (
              <div
                key={idx}
                className="card w-full bg-white/5 backdrop-blur-md border border-[#fafafa] rounded-lg shadow-md"
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
  