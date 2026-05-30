import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import heroMockup from "../assets/hero-mockup.jpg";

const Hero = () => {
return ( <section
   id="hero"
   className="relative overflow-hidden bg-zinc-950 pt-24"
 >
{/* Background Effects */} <div className="absolute inset-0 overflow-hidden"> <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-3xl" /> <div className="absolute left-0 bottom-0 h-[500px] w-[500px] rounded-full bg-fuchsia-500/10 blur-3xl" /> <div className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-indigo-500/10 blur-3xl" /> </div>

  <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
    <div className="grid items-center gap-10 py-20 lg:grid-cols-2">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Badge */}
        <span className="inline-flex rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-300">
          ✨ Award-Winning Creative Agency
        </span>

        {/* Heading */}
        <h1 className="mt-8 text-6xl font-black leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-[88px]">
  We Create

  <span className="block bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
    Digital Products
  </span>

  People Love.
</h1>

        {/* Description */}
        <p className="mt-8 max-w-lg text-lg leading-relaxed text-zinc-400">
          We partner with ambitious startups and modern brands
          to design, build, and scale digital products that
          drive growth, engage users, and create lasting impact.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105"
          >
            View Our Work
            <ArrowRight size={18} />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
          >
            <Play size={18} />
            Start a Project
          </a>
        </div>

        {/* Trust Line */}
        <div className="mt-10 flex flex-wrap items-center gap-4 text-sm text-zinc-500">
          <span>Trusted by growing startups</span>
          <span>•</span>
          <span>UI/UX Design</span>
          <span>•</span>
          <span>Web Development</span>
          <span>•</span>
          <span>Brand Strategy</span>
        </div>
      </motion.div>

      {/* Right Visual */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative hidden lg:flex justify-center"
      >
        <div className="relative">
          {/* Glow */}
          <div className="absolute -inset-6 rounded-[40px] bg-gradient-to-r from-purple-500/10 to-indigo-500/10 blur-3xl" />

          {/* Image */}
          <img
            src={heroMockup}
            alt="UI Design Showcase"
            className="relative w-full max-w-[650px] rotate-1 rounded-[32px] border border-white/10 shadow-2xl transition-all duration-500 hover:rotate-0 hover:scale-[1.02]"
          />

          {/* Featured Project Badge */}
          <div className="absolute left-4 top-8 rounded-2xl border border-white/10 bg-zinc-900/90 px-5 py-4 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-wider text-zinc-400">
              Featured Project
            </p>

            <h4 className="mt-1 text-lg font-bold text-white">
              PetConnect Platform
            </h4>
          </div>

          {/* Case Study Badge */}
          <div className="absolute right-4 bottom-8 rounded-2xl border border-white/10 bg-zinc-900/90 px-5 py-4 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-wider text-zinc-400">
              Case Study
            </p>

            <h4 className="mt-1 text-lg font-bold text-white">
              120% User Growth
            </h4>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</section>


);
};

export default Hero;
