const About = () => {
  return (
    <section id="about" className="bg-slate-900 text-white py-24 px-6">
      <div className="max-w-6xl mx-auto grid gap-16 lg:grid-cols-[1.2fr_0.8fr] items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-400/80 mb-4">About me</p>
          <h2 className="text-4xl font-semibold mb-6">I help brands grow through modern web products.</h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            I build websites and applications with strong visual polish, smooth performance, and a clear business focus.
            Every project is designed to improve conversion, engagement, and long-term customer retention.
          </p>
          <p className="text-slate-300 leading-relaxed">
            Whether you need a landing page, a SaaS dashboard, or a full product launch, I partner with you from strategy to launch and beyond.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {[
            { label: "Design systems", value: "UX-focused interfaces" },
            { label: "Performance", value: "Fast loading experiences" },
            { label: "Strategy", value: "Product-first solutions" },
            { label: "Support", value: "Responsive collaboration" },
          ].map((item) => (
            <div key={item.label} className="rounded-3xl bg-slate-950/80 border border-slate-800 p-6">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400 mb-3">{item.label}</p>
              <p className="text-lg font-medium text-white">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
