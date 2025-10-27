import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "/assets/LogoSF.png";

type NavItem = { id: number; title: string; link: string };
type SocialItem = { id: number; title: string; link: string; icon: string };

const navbarLinks: NavItem[] = [  { id: 1, title: "Inicio", link: "/" }, 
   { id: 2, title: "Sobre Mí", link: "/sobre" },
    { id: 3, title: "Proyectos", link: "/proyectos" },
      { id: 4, title: "Contacto", link: "/#contacto" },
        { id: 5, title: "Juego", link: "/juego" }];

const navbarRedes: SocialItem[] = [
  { id: 1, title: "GitHub", link: "https://github.com/Dikamora04", icon: "bi bi-github" },
  { id: 2, title: "LinkedIn", link: "https://www.linkedin.com/in/diana-morales130916", icon: "bi bi-linkedin" },
  { id: 3, title: "Whatsapp", link: "https://wa.me/522292168608", icon: "bi bi-whatsapp" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen((v) => !v);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md border-b border-pink-300/20
        ${
          scrolled
            ? "bg-yellow-950/30 shadow-[0_0_12px_rgba(255,182,193,0.55)]"
            : "bg-yellow-950/10 shadow-none"
        }`}
    >
      {/* Contenedor principal */}
      <div className="flex justify-between items-center px-3 sm:px-6 py-[3px] sm:py-[5px]">
        {/* Logo */}
        <Link to="/" aria-label="Ir a inicio">
          <img src={Logo} alt="logo" className="w-[65px] sm:w-[75px]" />
        </Link>

        {/* Botón móvil */}
        <button onClick={toggleMenu} className="md:hidden" aria-label="Abrir menú">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Navegación escritorio */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6">
            {navbarLinks.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={item.link}
                  className={({ isActive }) =>
                    `font-semibold tracking-wide text-[15px] sm:text-[16px] transition-all duration-300 hover:scale-105 ${
                      isActive ? "text-white" : "text-pink-300 hover:text-white"
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Redes */}
          <ul className="flex space-x-3 ml-3">
            {navbarRedes.map((link) => (
              <li key={link.id}>
                <a href={link.link} target="_blank" rel="noopener noreferrer">
                  <i
                    className={`${link.icon} text-pink-300 text-[18px] sm:text-[19px] hover:text-white transition-all duration-300`}
                  ></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Menú móvil */}
      <div
        className={`md:hidden absolute w-full bg-pink-300 transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <ul className="flex flex-col px-3 py-2">
          {navbarLinks.map((item) => (
            <li key={item.id} className="py-1 text-center">
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  `block text-base font-semibold ${
                    isActive ? "text-stone-200" : "text-white hover:text-stone-200"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>

        <ul className="flex space-x-4 px-4 py-1 border-t border-white justify-center">
          {navbarRedes.map((link) => (
            <li key={link.id}>
              <a
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
                onClick={() => setIsOpen(false)}
              >
                <i className={`${link.icon} text-lg text-white hover:text-stone-600`}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

