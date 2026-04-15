import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 border-b border-slate-700/20 bg-slate-950/95 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <div className="flex items-center gap-3">
          <div className="w-14">
            <img src="src/assets/Пиксель-removebg-preview.png" alt="" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Portfolio Studio</p>
            <span className="text-white font-semibold">Zenvrix</span>
          </div>
        </div>

        <ul className="hidden md:flex gap-8 text-sm text-slate-300">
          <li>
            <a href="#services" className="hover:text-white transition">Services</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-white transition">Work</a>
          </li>
          <li>
            <a href="#about" className="hover:text-white transition">About</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </li>
        </ul>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="md:hidden rounded-lg p-2 text-white hover:bg-slate-800 transition focus:outline-none focus:ring-2 focus:ring-cyan-400"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      <div
        className={`md:hidden absolute top-full left-0 w-full bg-slate-950/98 border-b border-slate-800 shadow-2xl transition-all duration-300 overflow-hidden ${
          open ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-4 gap-4 text-slate-300">
          <li>
            <a onClick={() => setOpen(false)} href="#services" className="block py-2 hover:text-white">Services</a>
          </li>
          <li>
            <a onClick={() => setOpen(false)} href="#projects" className="block py-2 hover:text-white">Work</a>
          </li>
          <li>
            <a onClick={() => setOpen(false)} href="#about" className="block py-2 hover:text-white">About</a>
          </li>
          <li>
            <a onClick={() => setOpen(false)} href="#contact" className="block py-2 hover:text-white">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
