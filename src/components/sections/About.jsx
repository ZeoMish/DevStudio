const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "5yrs+", label: "Combined Experience" },
];

const About = () => {
  return (
    <section id="about" className="bg-slate-900 text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-400/80 mb-4">About Us</p>
          <h2 className="text-4xl font-semibold mb-6">About Us</h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            We're a small team of 2 developers with a big focus: turning ideas into digital products that drive real business results. With combined experience across startups, agencies, and enterprises, we understand what it takes to ship fast without compromising quality.
          </p>
          <p className="text-slate-300 leading-relaxed mb-6">
            Our approach is straightforward—we focus on what matters: modern architecture, clean code, and results-driven design. No unnecessary complexity. No bloated features. Just solid engineering that converts.
          </p>
          <p className="text-white font-semibold mb-6">Speed • Quality • Modern Tech</p>
          <p className="text-slate-300 leading-relaxed">
            Whether you need a simple landing page or a complex fullstack application, we deliver on time, on budget, and with the polish that impresses clients.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((item) => (
            <div key={item.value} className="rounded-[32px] border border-slate-800/80 bg-slate-950/60 p-8 text-center shadow-[0_20px_60px_-40px_rgba(15,23,42,0.9)]">
              <p className="text-4xl font-bold text-cyan-400 mb-3">{item.value}</p>
              <p className="text-slate-300 text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
