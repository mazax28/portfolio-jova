import { useForm } from "react-hook-form";
type FormData = {
  name: string;
  lastname: string;
  email: string;
  phone: string;
  message: string;
};
function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      lastname: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (data:FormData) => {
    console.log("Form submitted:", data);
    reset();
  };
  const fields = ["name", "lastname", "email", "phone"] as const;

  return (
    <div id="contact" className="hero min-h-screen py-[2rem] px-[1rem] md:px-[2rem] lg:px-[4rem]">
      <div className="hero-content flex-col w-full gap-4">
        <div className="w-full text-left">
          <h1 className="text-[50px] md:text-[70px] lg:text-[90px] font-semibold leading-tight mb-4">
            Contacto
          </h1>
        </div>
    

        {/* Contenido principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full md:justify-items-center  ">
          {/* Formulario */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 w-full"
          >
            {fields.map((field) => (
              <div key={field}>
                <input
                  type="text"
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  className="input w-full bg-white/5 backdrop-blur-sm  text-sm placeholder:text-gray-400 focus:outline-none focus:border-[#fafafa]"
                  {...register(field, {
                    required: "Este campo es requerido",
                    ...(field === "email" && {
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Correo electrónico inválido",
                      },
                    }),
                    ...(field === "phone" && {
                      pattern: {
                        value: /^\+?[0-9]{10,}$/,
                        message: "Número de teléfono inválido",
                      },
                    }),
                  })}
                />
                <span className="text-xs text-red-400 mt-1 block min-h-[1.25rem]">
                  {errors[field]?.message || "\u00A0"}
                </span>
              </div>
            ))}

            <div>
              <textarea
                placeholder="Mensaje"
                className="textarea w-full bg-white/5 backdrop-blur-sm text-sm placeholder:text-gray-400 focus:outline-none focus:border-[#fafafa]"
                {...register("message", {
                  required: "El mensaje es requerido",
                  minLength: {
                    value: 5,
                    message: "Debe tener al menos 5 caracteres",
                  },
                })}
              />
              <span className="text-xs text-red-400 mt-1 block min-h-[1.25rem]">
                {errors.message?.message || "\u00A0"}
              </span>
            </div>

            <button
              type="submit"
              className="btn bg-[#fafafa] text-[#09090b] hover:bg-[#e4e4e7] transition-colors"
            >
              Enviar
            </button>
          </form>

          {/* Información de contacto */}
          <div className="flex flex-col justify-center items-start gap-6 text-gray-300 text-left">
            <div className="flex gap-4 items-center">
              <i className="ri-mail-line text-4xl text-[#fafafa]"></i>
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <p className="text-sm">Jorgevazquezarq1@gmail.com</p>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <i className="ri-phone-fill text-4xl text-[#fafafa]"></i>
              <div>
                <p className="text-gray-400 text-sm">Teléfono</p>
                <p className="text-sm">(+595) 961 411 695</p>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <i className="ri-map-pin-2-line text-4xl text-[#fafafa]"></i>
              <div>
                <p className="text-gray-400 text-sm">Ubicación</p>
                <p className="text-sm">San Lorenzo, Paraguay</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
