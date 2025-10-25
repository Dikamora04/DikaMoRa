import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const roles = [
    "Desarrolladora Front-End 💻",
    "Creativa 🎨",
    "Diseñadora UX/UI ✨",
  ];

  const [currentRole, setCurrentRole] = useState(roles[0]);
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  // efecto de typing
  useEffect(() => {
    if (index === roles.length) return;
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
      if (!reverse && subIndex === roles[index].length) {
        setTimeout(() => setReverse(true), 1000);
      } else if (reverse && subIndex === 0) {
        setReverse(false);
        setIndex((prev) => (prev + 1) % roles.length);
      }
    }, reverse ? 50 : 120);

    setCurrentRole(roles[index].substring(0, subIndex));
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <section
      id="inicio"
      className="relative flex flex-col items-center justify-center min-h-screen text-center overflow-hidden "
    >
      {/* Luces difuminadas */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-80 h-80 bg-pink-300/40 rounded-full blur-3xl top-[-100px] left-[-50px] animate-pulse-slow" />
        <div className="absolute w-96 h-96 bg-purple-400/30 rounded-full blur-3xl bottom-[-100px] right-[-50px] animate-pulse-slow" />
        <div className="absolute w-60 h-60 bg-sky-200/30 rounded-full blur-3xl top-1/3 left-1/3 animate-pulse-slow" />
      </div>

      {/* Contenedor central */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl px-10 py-12 max-w-3xl"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-[0_2px_8px_rgba(255,255,255,0.3)] mb-4">
          ¡Bienvenid@ a mi Portafolio!
        </h1>

        <p className="text-lg md:text-xl text-pink-100 mb-6">
          Soy <span className="text-white font-semibold">Diana Morales</span>
        </p>

        {/* Texto animado */}
        <motion.div
          key={currentRole}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-2xl md:text-3xl font-semibold text-white h-[40px]"
        >
          {currentRole}
          <span className="text-pink-300 animate-pulse">|</span>
        </motion.div>

        {/* Botones */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a
            href="/proyectos"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-pink-400 to-fuchsia-500 hover:from-pink-500 hover:to-fuchsia-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all"
          >
             Ver Proyectos
          </motion.a>
          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-sky-400 to-cyan-500 hover:from-sky-500 hover:to-cyan-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all"
          >
             Contáctame
          </motion.a>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a
            href="/cv/CV_Diana.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-rose-400 to-purple-500 hover:from-rose-500 hover:to-purple-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all"
          >
             Curriculum
          </motion.a>
          <motion.a
            href="/juego"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-violet-500 to-fuchsia-600 hover:from-violet-600 hover:to-fuchsia-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all"
          >
             Juego <i className="bi bi-controller"></i>
          </motion.a>
        </div>
      </motion.div>

      {/* Logo flotante */}
      <motion.img
        src="/assets/LogoCompleto.png"
        alt="DK Logo"
        className="absolute bottom-8 right-8 w-28 opacity-80 hover:opacity-100 transition-all"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
      />
    </section>
  );
}

