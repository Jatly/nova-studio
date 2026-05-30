import { services } from "../data/services";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-black py-24 sm:py-32"
    >
      {/* Background Glow */}{" "}
      <div className="absolute inset-0 pointer-events-none">
        {" "}
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />{" "}
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />{" "}
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
            Our Services
          </span>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Creative solutions
            <span className="block text-zinc-400">for modern businesses.</span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-zinc-400">
            We combine strategy, design, and technology to create exceptional
            digital experiences that help brands grow, engage customers, and
            stand out in competitive markets.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-purple-500/30 hover:shadow-[0_0_40px_rgba(168,85,247,0.12)]"
              >
                {/* Card Glow */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl" />
                </div>

                <div className="relative">
                  {/* Icon */}
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-purple-500/20 bg-purple-500/10 text-purple-400 transition-all duration-300 group-hover:scale-110">
                    <Icon size={30} />
                  </div>

                  {/* Content */}
                  <h3 className="mt-8 text-xl font-bold tracking-tight text-white">
                    {service.title}
                  </h3>

                  <p className="mt-4 leading-relaxed text-zinc-400">
                    {service.description}
                  </p>

                  {/* Learn More */}
                  <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-purple-400 transition-all duration-300 group-hover:translate-x-1">
                    Learn More
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="relative mt-24 overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-10 lg:p-12"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
          </div>

          <div className="relative flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
            <div>
              <h3 className="text-3xl font-black text-white">
                Ready to build something extraordinary?
              </h3>

              <p className="mt-3 max-w-xl text-zinc-400">
                Partner with us to transform ideas into impactful digital
                experiences that delight users and drive business growth.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-black transition-all duration-300 hover:scale-105"
            >
              Start Your Project
              <ArrowUpRight size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
