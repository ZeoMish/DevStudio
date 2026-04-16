const testimonials = [
  {
    quote: "DevStudio delivered our booking platform in 4 weeks. The speed and attention to detail exceeded our expectations. Within the first month, we tripled our bookings.",
    name: "Sarah Chen",
    role: "Founder at TravelNow Hotels",
  },
  {
    quote: "We needed a complex dashboard that could handle real-time data. Not only did they deliver exactly what we needed, but they also optimized it for performance. Incredibly professional team.",
    name: "Marcus Johnson",
    role: "CTO at Blueprint Ventures",
  },
  {
    quote: "Going from no online ordering to handling hundreds of orders daily was seamless with their platform. The customer support was exceptional throughout.",
    name: "Emily Rodriguez",
    role: "Operations Manager at Artisan Eats",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-slate-950 text-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-400/80 mb-4">Loved by Clients</p>
        <h2 className="text-4xl font-semibold">Loved by Clients</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {testimonials.map((item) => (
          <div key={item.name} className="rounded-[32px] border border-slate-800/80 bg-slate-900/60 p-8 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.9)]">
            <p className="text-slate-100 leading-relaxed mb-8">“{item.quote}”</p>
            <div>
              <p className="text-xl font-semibold text-white mb-1">{item.name}</p>
              <p className="text-slate-400">{item.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
