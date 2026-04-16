import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import TechStack from "./components/sections/TechStack";
import Projects from "./components/sections/Projects";
import About from "./components/sections/About";
import Testimonials from "./components/sections/Testimonials";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <Navbar />

      <main className="pt-20">
        <Hero />
        <Services />
        <TechStack />
        <Projects />
        <About />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}

export default App;
