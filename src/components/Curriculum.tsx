import { motion } from "framer-motion";

const Curriculum: React.FC = () => {
  return (
    <section
      id="cv"
      className="relative pb-16 px-6 flex flex-col items-center justify-center overflow-hidden scroll-mt-32 sm:scroll-mt-36 md:scroll-mt-40"
    >

      {/* Contenido dentro de un contenedor translúcido */}
      <div className="w-full max-w-screen-md rounded-2xl bg-pink-50/20 backdrop-blur-md ring-1 ring-pink-200/40 shadow-xl p-4 sm:p-6 md:p-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-col items-center text-center space-y-6 max-w-3xl w-full"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4">
           Mi Currículum
        </h2>

        <p className="text-white text-base md:text-lg leading-relaxed max-w-xl">
          Aquí puedes ver o descargar mi currículum actualizado.
        </p>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
          <motion.a
            href="/cv/CVDKMR.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-pink-400 to-sky-400 hover:from-pink-500 hover:to-sky-500
                       text-white font-medium py-2 px-8 rounded-full shadow-lg transition-all"
          >
             Ver CV
          </motion.a>

          <motion.a
            href="/cv/CVDKMR.pdf"
            download="DianaMorales_CV.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white border border-pink-300 text-pink-600 hover:bg-pink-100
                       font-medium py-2 px-8 rounded-full shadow-md transition-all"
          >
             Descargar CV
          </motion.a>
        </div>

        {/* Mostrar CV como imagen */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full mt-8 flex justify-center"
        >
          <img
            src="/cv/CVDKMR.png"
            alt="CV Diana Morales"
            className="rounded-2xl shadow-xl w-full max-w-3xl"
          />
        </motion.div>
      </motion.div>
      </div>
    </section>
  );
};

export default Curriculum;
