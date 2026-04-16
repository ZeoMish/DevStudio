const techItems = [
  { title: "React", label: "Frontend" },
  { title: "Next.js", label: "Framework" },
  { title: "TypeScript", label: "Language" },
  { title: "Tailwind CSS", label: "Styling" },
  { title: "Node.js", label: "Backend" },
  { title: "PostgreSQL", label: "Database" },
  { title: "MongoDB", label: "Database" },
  { title: "Redis", label: "Cache" },
];

const TechStack = () => {
  return (
    <section id="tech" className="bg-slate-950 text-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-400/80 mb-4">Tech Stack</p>
        <h2 className="text-4xl font-semibold mb-4">Modern, scalable, and battle-tested technologies</h2>
        <p className="text-slate-400 mb-12 max-w-3xl mx-auto">
          The tools and platforms we use to build fast, reliable, and maintainable digital products.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {techItems.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-[28px] border border-slate-800/80 bg-slate-900/70 p-8 text-left shadow-[0_25px_70px_-40px_rgba(15,23,42,0.9)] transition duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:bg-slate-900"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
              <div className="relative min-h-[120px]">
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
