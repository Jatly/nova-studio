import {
  FaArrowRight,
  FaBehance,
  FaDribbble,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-zinc-950">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-purple-600/10 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        {/* Top Section */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Brand */}
          <div>
            <div>
              <span className="inline-flex rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-purple-300">
                Creative Agency
              </span>

              <h2 className="mt-5 text-5xl font-black tracking-tight text-white">
                NOVA<span className="text-purple-400">.</span>
              </h2>
            </div>

            <p className="mt-5 max-w-md text-zinc-400 leading-relaxed">
              We craft meaningful digital experiences through thoughtful design,
              modern development, and strategic branding that helps businesses
              grow.
            </p>
            <p className="mt-6 text-sm font-medium text-zinc-500">
              hello@novastudio.com
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a
                href="https://www.behance.net"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/10 text-zinc-400 transition-all duration-300 hover:border-purple-500/40 hover:text-purple-400"
              >
                <FaBehance />
              </a>

              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/10 text-zinc-400 transition-all duration-300 hover:border-purple-500/40 hover:text-purple-400"
              >
                <FaDribbble />
              </a>

              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/10 text-zinc-400 transition-all duration-300 hover:border-purple-500/40 hover:text-purple-400"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/10 text-zinc-400 transition-all duration-300 hover:border-purple-500/40 hover:text-purple-400"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* CTA */}
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-10">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-purple-400">
              Let's Work Together
            </span>

            <h3 className="mt-4 text-4xl font-black leading-tight text-white">
              Ready to build something remarkable?{" "}
            </h3>

            <p className="mt-4 text-zinc-400">
              Let's create something exceptional together and turn your ideas
              into impactful digital experiences.
            </p>

            <a
              href="#contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-black transition-transform duration-300 hover:scale-105"
            >
              Start a Project
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />{" "}
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-14 border-t border-zinc-800" />
        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <p className="text-sm text-zinc-500">
            © {year} NOVA. Crafted with passion and precision.{" "}
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm text-zinc-500 transition-colors hover:text-white"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="text-sm text-zinc-500 transition-colors hover:text-white"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
