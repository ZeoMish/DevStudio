const services = [
  {
    title: "Landing Pages",
    desc: "High-converting landing pages that turn visitors into customers. Optimized for conversions.",
    icon: "🎯",
  },
  {
    title: "Business Websites",
    desc: "Professional business sites that establish credibility and attract qualified leads.",
    icon: "🌐",
  },
  {
    title: "Fullstack Apps",
    desc: "Complex web applications with real-time features, databases, and user authentication.",
    icon: "⚙️",
  },
  {
    title: "Admin Panels",
    desc: "Intuitive dashboards and management systems for controlling your business data.",
    icon: "📊",
  },
  {
    title: "API Development",
    desc: "Robust REST and GraphQL APIs that power mobile apps and integrations.",
    icon: "🔌",
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-slate-950 text-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-cyan-500/20 bg-slate-900/80 px-4 py-2 text-sm text-cyan-300">
          Services for ambitious businesses
        </div>

        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          What we build
        </h2>

        <p className="text-slate-400 mb-12 max-w-2xl mx-auto">
          Beautiful websites, powerful applications, and digital experiences that help your brand stand out.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-slate-800/90 bg-slate-900/70 p-7 text-left shadow-lg shadow-slate-950/20 transition duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:bg-slate-900"
            >
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-500 to-cyan-500 text-2xl shadow-lg shadow-cyan-500/20">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3 text-white">
                {item.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;