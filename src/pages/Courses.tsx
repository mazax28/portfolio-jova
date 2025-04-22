function Courses() {
  const cursos = [
    {
      title: "MasterClass de Lumion + Photoshop",
      image: "/images/certificado_lumion.png",
      description: "Curso enfocado en la creación de renders arquitectónicos realistas y detallados utilizando Lumion.",
      etiquetas: ["Renderizado", "Visualización"],
      pdf: "/documents/certificado_lumion.pdf",
    },
    {
      title: "Autocad",
      image: "/images/certificado_autocad.png",
      description: "Capacitación para la elaboración de planos arquitectónicos con AutoCAD.",
      etiquetas: [ "Planos", "AutoCAD"],
      pdf: "/documents/certificado_autocad.pdf",
    },
    {
      title: "SketchUp",
      image: "/images/certificado.png",
      description: "Curso orientado al modelado 3D de entornos y estructuras arquitectónicas usando SketchUp.",
      etiquetas: ["Modelado 3D", "SketchUp"],
      pdf: "/pdfs/sketchup.pdf",
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

        {/* Grid de cursos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {cursos.map((curso, idx) => (
            <div
              key={idx}
              className="card w-full bg-white/5 backdrop-blur-md rounded-lg shadow-md overflow-hidden group relative"
            >
              <figure className="relative w-full h-[200px]">
                <img
                  src={curso.image}
                  alt={curso.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <a
                  href={curso.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300"
                >
                  <span className="btn btn-sm bg-[#fafafa] text-[#09090b] hover:bg-[#e4e4e7] font-semibold">
                    Ver certificado
                  </span>
                </a>
              </figure>
              <div className="card-body">
                <h2 className="card-title text-white">{curso.title}</h2>
                <p className="text-sm text-gray-300">{curso.description}</p>
                <div className="card-actions justify-end mt-4 flex flex-wrap gap-2">
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
