import { useMemo } from "react";
import ProjectShowcase from "./ProjectShowcase";

const DULCETTO_IMAGES = [
  "/assets/Dulcetto/Screenshot 2025-10-21 214821.png",
  "/assets/Dulcetto/Screenshot 2025-10-21 214834.png",
  "/assets/Dulcetto/Screenshot 2025-10-21 214848.png",
  "/assets/Dulcetto/Screenshot 2025-10-21 214908.png",
  "/assets/Dulcetto/Screenshot 2025-10-21 214919.png",
  "/assets/Dulcetto/Screenshot 2025-10-21 214932.png",
  "/assets/Dulcetto/Screenshot 2025-10-21 214947.png",
  "/assets/Dulcetto/Screenshot 2025-10-21 215006.png",
  "/assets/Dulcetto/Screenshot 2025-10-21 215027.png",
  "/assets/Dulcetto/Screenshot 2025-10-21 215045.png",
  "/assets/Dulcetto/Screenshot 2025-10-21 215102.png",
];

const MELINDO_IMAGES = [
  "/assets/MeLindo/Screenshot 2025-09-11 130833.png",
  "/assets/MeLindo/Screenshot 2025-09-11 130149.png",
  "/assets/MeLindo/Screenshot 2025-09-11 130356.png",
  "/assets/MeLindo/Screenshot 2025-09-11 130503.png",
  "/assets/MeLindo/Screenshot 2025-09-11 131210.png",
  "/assets/MeLindo/Screenshot 2025-09-11 131253.png",
  "/assets/MeLindo/Screenshot 2025-09-11 131326.png",
  "/assets/MeLindo/Screenshot 2025-09-11 131627.png",
  "/assets/MeLindo/Screenshot 2025-09-11 131643.png",
];

const STRONYX_IMAGES = [
  "/assets/Stronyx/Screenshot 2025-10-22 104449.png",
  "/assets/Stronyx/Screenshot 2025-10-22 104506.png",
  "/assets/Stronyx/Screenshot 2025-10-22 104523.png",
  "/assets/Stronyx/Screenshot 2025-10-22 104542.png",
  "/assets/Stronyx/Screenshot 2025-10-22 104603.png",
  "/assets/Stronyx/Screenshot 2025-10-22 104621.png",
  "/assets/Stronyx/Screenshot 2025-10-22 104638.png",
  "/assets/Stronyx/Screenshot 2025-10-22 104706.png",
];

export default function Proyectos() {
  const dul = useMemo(() => DULCETTO_IMAGES, []);
  const mel = useMemo(() => MELINDO_IMAGES, []);
  const str = useMemo(() => STRONYX_IMAGES, []);

  return (
    <section className="pt-32 sm:pt-36 md:pt-40 pb-20 max-w-screen-xl mx-auto px-4 text-white font-semibold scroll-mt-32 sm:scroll-mt-36 md:scroll-mt-40 space-y-10">
      <h1 className="text-2xl sm:text-3xl font-semibold">Proyectos</h1>

      <ProjectShowcase
        title="Dulcetto"
        images={dul}
        description="Landing y catálogo para una marca de repostería. Incluye carrusel de productos, secciones con imágenes, menú, carrito de compras y estilos responsivos. Construido con React, Bootstrap y Vite. También cuenta con login y registro para nuevos usuarios y administrador para agregar o editar nuevos productos." 
        techs={[
          { label: 'React', icon: 'bi bi-filetype-jsx' },
          { label: 'TypeScript', icon: 'bi bi-filetype-tsx' },
          { label: 'Bootstrap', icon: 'bi bi-bootstrap' },
          { label: 'Vite', icon: 'bi bi-lightning-charge' },
        ]}
      />

      <ProjectShowcase
        title="MeLindo"
        images={mel}
        description="Landing Page creado con ReactJS, Bootstrap, Axios para las API's y I18Next para traducciones Inglés/Español. Manejo de Inicio de sesión y registro de nuevos usuarios."
        techs={[
          { label: 'React', icon: 'bi bi-filetype-jsx' },
          { label: 'JavaScript', icon: 'bi bi-filetype-js' },
          { label: 'Bootstrap', icon: 'bi bi-bootstrap' },
        ]}
      />

      <ProjectShowcase
        title="Stronyx"
        images={str}
        description="Página informativa con enfoque en componentes reutilizables, transiciones y buenas prácticas de UI. Formulario funcional con emailJS."
        ctaHref="https://stronyx.com"
        ctaLabel="Visitar stronyx.com"
        techs={[
          { label: 'React', icon: 'bi bi-filetype-jsx' },
          { label: 'TypeScript', icon: 'bi bi-filetype-tsx' },
          { label: 'Tailwind CSS', icon: 'bi bi-wifi' },
        ]}
      />
    </section>
  );
}
