import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import TechBanner from "./components/TechBanner"
import Proyectos from "./components/proyectos/Proyectos"
import Sobre from "./components/sobre/Sobre"
import Contacto from "./components/contacto/Contacto"
import Juego from "./components/juego/Juego";
import Curriculum from "./components/Curriculum";

function Landing() {
  return (
    <>

      <Hero/>

      <Curriculum/>

      <Contacto/>

      <TechBanner/>

    </>
  )
}

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar/>
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/proyectos" element={<Proyectos/>} />
          <Route path="/sobre" element={<Sobre/>} />
          <Route path="/juego" element={<Juego/>} />

        </Routes>
      </main>
      <Footer/>
    </div>
  )
}

export default App;
