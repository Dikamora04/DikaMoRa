import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="pt-32 sm:pt-36 md:pt-40 pb-16 px-6 flex items-center justify-center text-center scroll-mt-32 sm:scroll-mt-36 md:scroll-mt-40">
      <div className="w-full max-w-screen-md mx-auto rounded-2xl bg-white/10 backdrop-blur-md ring-1 ring-pink-200/40 shadow-xl p-6 sm:p-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-fuchsia-600 mb-3">404</h1>
        <p className="text-white/90 mb-6">La página que buscas no existe.</p>
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-400 to-fuchsia-500 hover:from-pink-500 hover:to-fuchsia-600 text-white font-medium py-2 px-5 rounded-full shadow-lg transition-all"
          >
            Volver al inicio
          </Link>
          <Link
            to="/proyectos"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-400 to-cyan-500 hover:from-sky-500 hover:to-cyan-600 text-white font-medium py-2 px-5 rounded-full shadow-lg transition-all"
          >
            Ver proyectos
          </Link>
        </div>
      </div>
    </section>
  );
}
