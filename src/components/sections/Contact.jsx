import { FiMail, FiLinkedin, FiGithub } from "react-icons/fi";

const Contact = () => {
  return (
    <section id="contact" className="bg-[#050713] text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-400/90 mb-4">Let's build together</p>
          <h2 className="text-4xl font-semibold mb-4">Let's Build Something</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Have a project in mind? Let's talk about making it real.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.9fr]">
          <form className="grid gap-6">
            <label className="grid gap-3 text-sm text-slate-300">
              Name
              <input
                type="text"
                placeholder="Your name"
                className="rounded-2xl border border-slate-800 bg-slate-950/40 px-4 py-4 text-white outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 placeholder:text-slate-500"
              />
            </label>

            <label className="grid gap-3 text-sm text-slate-300">
              Message
              <textarea
                rows="6"
                placeholder="Tell us about your project..."
                className="min-h-[220px] rounded-[28px] border border-slate-800 bg-slate-950/40 px-4 py-4 text-white outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 placeholder:text-slate-500"
              />
            </label>

            <button
              type="submit"
              className="mt-4 inline-flex w-full items-center justify-center rounded-3xl bg-[#5f5bff] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#7470ff]"
            >
              Send Message
            </button>
          </form>

          <div className="space-y-8 text-slate-300">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-white/70 mb-4">Direct Contact</p>
              <div className="space-y-4 text-sm">
                <div className="flex items-center gap-3 text-slate-300">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-cyan-300">
                    <FiMail className="h-5 w-5" />
                  </span>
                  <a href="mailto:hello@devstudio.dev" className="transition hover:text-white">
                    hello@devstudio.dev
                  </a>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-cyan-300">
                    <FiLinkedin className="h-5 w-5" />
                  </span>
                  <a href="https://www.linkedin.com/in/devstudio" target="_blank" rel="noreferrer" className="transition hover:text-white">
                    @devstudio
                  </a>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-white/70 mb-4">What to Expect</p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-cyan-400">✓</span>
                  <span>Response within 24 hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-cyan-400">✓</span>
                  <span>Free consultation call</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-cyan-400">✓</span>
                  <span>Custom project proposal</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-cyan-400">✓</span>
                  <span>Clear timeline & pricing</span>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-white/70 mb-4">Follow Us</p>
              <div className="flex items-center gap-4 text-slate-300">
                <a href="https://github.com/devstudio" target="_blank" rel="noreferrer" className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-slate-300 transition hover:text-white">
                  <FiGithub className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/in/devstudio" target="_blank" rel="noreferrer" className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-slate-300 transition hover:text-white">
                  <FiLinkedin className="h-5 w-5" />
                </a>
                <a href="mailto:hello@devstudio.dev" className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-slate-300 transition hover:text-white">
                  <FiMail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
