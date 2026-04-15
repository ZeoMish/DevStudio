const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "5yrs+", label: "Combined Experience" },
];

const Stats = () => {
  return (
    <section id="stats" className="bg-slate-950 text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-5">
          {stats.map((stat) => (
            <div key={stat.value} className="rounded-[32px] border border-slate-800/80 bg-slate-900/60 p-8 text-center shadow-[0_20px_60px_-40px_rgba(15,23,42,0.9)]">
              <p className="text-4xl font-bold text-cyan-400 mb-3">{stat.value}</p>
              <p className="text-slate-300 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
