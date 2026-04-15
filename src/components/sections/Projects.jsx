const Projects = () => {
  return (
    <section id="projects" className="w-full bg-slate-950 text-white py-28 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400/80 mb-3">Featured work</p>
          <h2 className="text-4xl font-semibold">Recent projects that deliver results</h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            A selection of digital products designed for conversion, performance and long-term growth.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[{
            title: "Hotel Booking Platform",
            summary: "Booking management made fast and reliable for hotels and travel services.",
            tags: ["React", "Node", "Stripe"],
          }, {
            title: "Pizza Ordering System",
            summary: "Smart online ordering with real-time kitchen updates and order tracking.",
            tags: ["Next.js", "TypeScript", "Firebase"],
          }, {
            title: "SaaS Analytics Dashboard",
            summary: "Data-driven dashboards to help teams monitor revenue, usage, and growth.",
            tags: ["React", "D3.js", "PostgreSQL"],
          }, {
            title: "E-commerce Storefront",
            summary: "A fast, conversion-first storefront with secure payment and inventory sync.",
            tags: ["Next.js", "Tailwind", "Stripe"],
          }, {
            title: "Project Management Tool",
            summary: "A clean workspace for teams to manage tasks, roadmaps and communication.",
            tags: ["React", "WebSockets", "PostgreSQL"],
          }, {
            title: "Brand Website Redesign",
            summary: "Modern brand presence with compelling storytelling and polished UX.",
            tags: ["Figma", "React", "SEO"],
          }].map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-4xl border border-slate-800/90 bg-slate-900/80 p-6 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.8)] transition hover:-translate-y-1 hover:border-cyan-500/50"
            >
              <div className="relative mb-6 overflow-hidden rounded-3xl bg-linear-to-br from-slate-800 via-slate-900 to-slate-950 p-6">
                <span className="absolute inset-x-0 top-0 h-1 bg-cyan-500/20 blur-xl"></span>
                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              </div>
              <p className="text-slate-400 mb-6 leading-relaxed">{project.summary}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition hover:text-white"
              >
                Talk about a similar project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
