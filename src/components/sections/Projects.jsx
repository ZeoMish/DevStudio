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
            category: "Hospitality SaaS",
            summary: "Booking management made fast and reliable for hotels and travel services.",
            problem: "Hotels needed a dependable booking engine that handled availability, payments, and confirmations in one place.",
            solution: "Built a web platform with real-time availability checks, secure card payments, and automated guest notifications.",
            result: "Improved booking conversion and reduced manual reservation errors.",
            tags: ["React", "Node", "Stripe"],
          }, {
            title: "Pizza Ordering System",
            category: "Food Tech",
            summary: "Smart online ordering with real-time kitchen updates and order tracking.",
            problem: "Local restaurants lacked a modern ordering experience and real-time order status for customers.",
            solution: "Delivered a sleek ordering flow with live kitchen tracking and push notifications.",
            result: "Increased order frequency and reduced call volume.",
            tags: ["Next.js", "TypeScript", "Firebase"],
          }, {
            title: "SaaS Analytics Dashboard",
            category: "Business Intelligence",
            summary: "Data-driven dashboards to help teams monitor revenue, usage, and growth.",
            problem: "Teams struggled to surface product metrics and take action from raw data.",
            solution: "Created a fully customizable analytics dashboard with charts, filters, and exports.",
            result: "Enabled faster decisions with clear real-time insights.",
            tags: ["React", "D3.js", "PostgreSQL"],
          }, {
            title: "E-commerce Storefront",
            category: "Retail",
            summary: "A fast, conversion-first storefront with secure payment and inventory sync.",
            problem: "The client needed an online shop that looked premium and handled product updates automatically.",
            solution: "Built a polished storefront with inventory sync, checkout flow, and merchandising controls.",
            result: "Lifted average order value and increased repeat purchases.",
            tags: ["Next.js", "Tailwind", "Stripe"],
          }, {
            title: "Project Management Tool",
            category: "Productivity",
            summary: "A clean workspace for teams to manage tasks, roadmaps and communication.",
            problem: "Teams were using fragmented tools and wanted a single place to plan work.",
            solution: "Developed a collaboration dashboard with task boards, timelines, and team chat.",
            result: "Streamlined planning and improved project visibility.",
            tags: ["React", "WebSockets", "PostgreSQL"],
          }, {
            title: "Brand Website Redesign",
            category: "Marketing",
            summary: "Modern brand presence with compelling storytelling and polished UX.",
            problem: "The previous site felt outdated and failed to showcase the brand’s value.",
            solution: "Redesigned the site with a bold visual system, performance-first layout, and conversion-focused copy.",
            result: "Increased lead quality and time on page.",
            tags: ["Figma", "React", "SEO"],
          }].map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-4xl border border-slate-800/90 bg-slate-900/80 p-8 shadow-[0_25px_70px_-35px_rgba(15,23,42,0.9)] transition hover:-translate-y-1 hover:border-cyan-500/50"
            >
              <div className="relative mb-6 overflow-hidden rounded-3xl bg-linear-to-br from-slate-800 via-slate-900 to-slate-950 p-6">
                <span className="absolute inset-x-0 top-0 h-1 bg-cyan-500/20 blur-xl"></span>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-3xl font-semibold text-white max-w-[70%]">{project.title}</h3>
                  <span className="rounded-full border border-slate-700 px-4 py-2 text-xs uppercase tracking-[0.3em] text-slate-400">
                    {project.category}
                  </span>
                </div>
              </div>
              <p className="text-slate-400 mb-5 leading-relaxed">{project.summary}</p>
              <div className="space-y-4 mb-6 text-sm">
                <div>
                  <p className="font-semibold text-white mb-1">Problem</p>
                  <p className="text-slate-400 leading-relaxed">{project.problem}</p>
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">Solution</p>
                  <p className="text-slate-400 leading-relaxed">{project.solution}</p>
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">Result</p>
                  <p className="text-slate-400 leading-relaxed">{project.result}</p>
                </div>
              </div>
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
