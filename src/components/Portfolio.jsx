import { projects } from "../data/projects";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <section id="portfolio" className="relative bg-zinc-950 py-24 sm:py-32">
      {/* Background Glow */}{" "}
      <div className="absolute inset-0 pointer-events-none">
        {" "}
        <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-purple-500/10 blur-3xl" />{" "}
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Divider */}
        {/* <div className="mx-auto mb-20 h-px max-w-7xl bg-gradient-to-r from-transparent via-white/10 to-transparent" /> */}

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="inline-flex rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-300">
            Selected Work
          </span>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Projects that create
            <span className="block text-zinc-400">meaningful impact.</span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-zinc-400">
            We partner with startups and growing brands to design products that
            engage users, solve problems, and drive measurable business growth.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-all duration-500 hover:-translate-y-2 hover:border-purple-500/30 hover:shadow-[0_0_40px_rgba(168,85,247,0.12)]"
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-t-3xl">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-90" />
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="inline-flex rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-300">
                  {project.category}
                </span>

                <div className="mt-4 flex items-start justify-between gap-4">
                  <h3 className="text-xl font-bold tracking-tight text-white">
                    {project.title}
                  </h3>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 group-hover:rotate-45 group-hover:border-purple-500 group-hover:bg-purple-500">
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-400">
                    React
                  </span>

                  <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-400">
                    Tailwind
                  </span>

                  <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-400">
                    UI/UX
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="relative mt-24 overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-12 text-center"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-500/10 blur-3xl" />
          </div>

          <div className="relative">
            <h3 className="text-3xl font-black text-white">
              Have a project in mind?
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
              Let's collaborate and create digital experiences that delight
              users and drive business success.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105"
            >
              Let's Talk
              <ArrowUpRight size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
