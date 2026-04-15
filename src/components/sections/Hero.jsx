const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex justify-center bg-slate-950 text-white py-24">
      <div className="max-w-5xl mx-auto text-center">

        <div className="inline-block mb-6 px-4 py-2 rounded-full border border-cyan-500/30 text-cyan-300 text-sm">
          Web development made fast
        </div>

        <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-6">
          Digital products that_
          <span className="bg-linear-to-r from-indigo-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
            drive business growth
          </span>
        </h1>

        <p className="text-slate-300 text-lg mb-10 max-w-3xl mx-auto">
          We build high-converting websites and fullstack applications. Fast turnarounds, modern tech, and results that matter.
        </p>

        <div className="grid gap-4 sm:grid-cols-[1fr_auto] justify-center">
          <div className="flex flex-col gap-3">
            <a href="#contact" className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-linear-to-r from-indigo-500 to-cyan-500 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5">
              Start your project
            </a>
            <a href="#projects" className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border border-slate-700 bg-slate-900/80 px-8 py-3 text-sm font-medium text-slate-200 transition hover:border-cyan-500 hover:text-white">
              View case studies
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
