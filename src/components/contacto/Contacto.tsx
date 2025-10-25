import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function Contacto() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    emailjs
      .send("default_service", "template_zojx34j", data, "QBa9u5zhn3s32qR7J")
      .then(
        () => {
          Swal.fire({
            title: "🌸 ¡Mensaje enviado!",
            text: "Gracias por contactarme, te responderé muy pronto 💌",
            icon: "success",
            background: "linear-gradient(135deg, #fce7f3, #e0f2fe)",
            color: "#374151",
            confirmButtonText: "Perfecto ",
            confirmButtonColor: "#f472b6",
            customClass: {
              popup: "rounded-3xl shadow-2xl backdrop-blur-md",
              title: "text-2xl font-semibold",
              confirmButton: "rounded-full px-5 py-2",
            },
          });
          reset();
        },
        (error) => {
          console.error(error.text);
          Swal.fire({
            title: "💔 Ocurrió un error",
            text: "No se pudo enviar el mensaje, intenta más tarde.",
            icon: "error",
            background: "linear-gradient(135deg, #fee2e2, #fae8ff)",
            color: "#374151",
            confirmButtonText: "Entendido",
            confirmButtonColor: "#f87171",
            customClass: {
              popup: "rounded-3xl shadow-lg backdrop-blur-md",
              confirmButton: "rounded-full px-5 py-2",
            },
          });
        }
      );
  };

  return (
    <section
      id="contacto"
      className="flex justify-center items-center pb-16 scroll-mt-32 sm:scroll-mt-36 md:scroll-mt-40"
    >
      <div className="w-full max-w-screen-md mx-auto flex justify-center rounded-2xl bg-pink-50/20 backdrop-blur-md ring-1 ring-pink-200/40 shadow-xl p-4 sm:p-6 md:p-8">
      <motion.form
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md mx-auto bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-pink-100"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-2xl font-semibold text-center text-pink-600 mb-6"
        >
          Contáctame 
        </motion.h2>

        {/* Nombre */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <input
            {...register("name", { required: "Por favor ingresa tu nombre" })}
            placeholder="Tu nombre"
            className="w-full p-3 border rounded-lg focus:outline-pink-400 focus:ring-2 focus:ring-pink-200"
          />
          {errors.name?.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.name.message}
            </p>
          )}
        </motion.div>

        {/* Email */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <input
            {...register("email", {
              required: "Por favor ingresa tu correo",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Correo inválido",
              },
            })}
            placeholder="Tu correo"
            className="w-full p-3 border rounded-lg focus:outline-pink-400 focus:ring-2 focus:ring-pink-200"
          />
          {errors.email?.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.email.message}
            </p>
          )}
        </motion.div>

        {/* Mensaje */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <textarea
            {...register("message", { required: "Escribe tu mensaje" })}
            placeholder="Tu mensaje..."
            className="w-full p-3 border rounded-lg focus:outline-pink-400 focus:ring-2 focus:ring-pink-200 h-28 resize-none"
          />
          {errors.message?.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          type="submit"
          className="w-full bg-gradient-to-r from-pink-500 to-sky-400 hover:from-pink-600 hover:to-sky-500 
                     text-white font-medium py-2 rounded-lg shadow-lg transition-all"
        >
          Enviar 
        </motion.button>
      </motion.form>
      </div>
    </section>
  );
}
