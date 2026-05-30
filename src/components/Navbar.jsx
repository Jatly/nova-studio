import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { name: "Services", href: "#services" },
  { name: "Work", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
  className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
    scrolled
      ? "bg-zinc-950/80 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.3)]"
      : "bg-transparent"
  }`}

    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex h-20 items-center justify-between">
                    {/* Logo */}

          <a href="#hero" className="group flex items-center">
  <span className="text-3xl font-black tracking-tight text-white">
    NOVA
    <span className="text-purple-400">.</span>
  </span>
</a>
         
           {/* Desktop Navigation */}

          <nav className="hidden md:flex items-center gap-10">

            {links.map((link) => (

              <a

                key={link.name}

                href={link.href}

                className="relative text-[15px] font-medium tracking-wide text-zinc-400 transition-colors duration-300 hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-purple-400 after:transition-all after:duration-300 hover:after:w-full"

              >

                {link.name}

              </a>

            ))}

          </nav>

          {/* CTA */}

          <div className="hidden md:flex">

            <a

              href="#contact"

className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-lg"            >

              Start Project

              <ArrowUpRight

                size={16}

                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"

              />

            </a>

          </div>
          {/* Mobile Menu Button */}

          <button

            onClick={() => setMobileMenu(!mobileMenu)}

            className="md:hidden text-white"

            aria-label="Toggle menu"

          >

            {mobileMenu ? <X size={26} /> : <Menu size={26} />}

          </button>

        </div>

      </div>



      {/* Mobile Navigation */}

      <div

        className={`md:hidden overflow-hidden transition-all duration-300 ${

          mobileMenu ? "max-h-[400px] border-t border-white/10" : "max-h-0"

        }`}

      >
      
        <div className="bg-zinc-950/30 backdrop-blur-xl px-6 py-6">
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenu(false)}
                className="text-lg font-medium text-zinc-300 transition-colors hover:text-white"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMobileMenu(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-white px-5 py-3 font-medium text-black transition-all hover:scale-[1.02]"
            >
              Start Project
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;