import { motion } from "framer-motion";
import PerfilImg from "/assets/animacion.png"; 

export default function SobreMi() {
  return (
    <section
      id="sobre"
      className="relative pt-32 sm:pt-36 md:pt-40 pb-16 px-6 md:px-16 overflow-hidden scroll-mt-32 sm:scroll-mt-36 md:scroll-mt-40"
    >
      {/* Fondo de burbujas animadas */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-24 h-24 bg-pink-200 rounded-full opacity-40 blur-2xl animate-float-slow" />
        <div className="absolute top-1/3 right-16 w-20 h-20 bg-sky-200 rounded-full opacity-30 blur-2xl animate-float-medium" />
        <div className="absolute bottom-10 left-1/4 w-28 h-28 bg-pink-300 rounded-full opacity-30 blur-3xl animate-float-fast" />
        <div className="absolute bottom-16 right-1/3 w-16 h-16 bg-sky-100 rounded-full opacity-40 blur-2xl animate-float-slow" />
      </div>

      <div className="w-full max-w-screen-lg mx-auto rounded-2xl bg-pink-50/20 backdrop-blur-md ring-1 ring-pink-200/40 shadow-xl p-4 sm:p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
      {/* Texto principal */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="md:w-[65%] text-center md:text-left"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-pink-500 mb-6">
          SOBRE MÍ
        </h2>

        <p className="text-white text-lg leading-relaxed mb-4">
          ¡Hola! Soy <span className="text-pink-600 font-semibold">Diana Morales</span>, 
          <span className="text-pink-600 font-semibold">Desarrolladora Frontend Jr</span> y estudiante de Ingeniería en Sistemas. 
          Soy una profesional apasionada por crear interfaces de usuario intuitivas y funcionales.
          Me especializo en <span className="font-semibold text-pink-600">desarrollo web moderno con React</span>, 
          construyendo proyectos con <span className="font-semibold text-pink-600">TypeScript, SASS, PHP y Bootstrap</span>.
      </p>

      <p className="text-white  text-lg leading-relaxed mb-4">
          Mi experiencia incluye el desarrollo de aplicaciones web responsivas, la conexión de vistas dinámicas a APIs, y la gestión de datos con <span className="italic">SQL y Power BI</span>. 
          Busco que la tecnología sea <span className="italic">eficiente, adaptable y funcional</span>.
      </p>

      <p className="text-white  text-lg leading-relaxed mb-8">
          Si buscas llevar tu proyecto frontend a otro nivel con un enfoque en la calidad del código y la experiencia de usuario, <span className="font-semibold text-pink-600">trabajemos juntos</span> 
          y hagamos que tus ideas brillen.
      </p>

        {/* Información extendida */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-3 gap-x-4 text-white  mb-8">
          <p><span className="font-semibold text-pink-600">📍 Ubicación:</span>Veracruz, México (remoto)</p>
          <p><span className="font-semibold text-pink-600">💼 Rol:</span> Desarrollador Front-end</p>
          <p><span className="font-semibold text-pink-600">🤝 Disponible:</span> Nuevos proyectos</p>
          <p><span className="font-semibold text-pink-600">⚙️ Tecnologías:</span> React, JS, HTML, CSS, Bootstrap</p>
        </div>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <motion.a
            href="/#contacto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-pink-400 to-sky-300 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:from-pink-500 hover:to-sky-400 transition-all"
          >
             Contáctame
          </motion.a>

          <motion.a
            href="/cv/CV_Diana.pdf"
            download="DianaMorales_CV.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white border-2 border-pink-300 text-pink-600 font-semibold px-8 py-3 rounded-full hover:bg-pink-50 shadow-sm transition-all"
          >
             Descargar CV
          </motion.a>
        </div>
      </motion.div>

      {/* Imagen o ilustración */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="md:w-[35%] flex justify-center"
      >
        <img
          src={PerfilImg}
          alt="Ilustración Diana Morales"
          className="w-[80%] md:w-[70%] max-w-sm drop-shadow-[0_8px_15px_rgba(255,182,193,0.4)]"
        />
      </motion.div>
      </div>
    </section>
  );
}



