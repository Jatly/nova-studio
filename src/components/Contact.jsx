import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setError("Please fill in all fields.");
      setSuccess(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address.");
      setSuccess(false);
      return;
    }

    setError("");
    setSuccess(true);

    setFormData({
      name: "",
      email: "",
      message: "",
    });

    setTimeout(() => {
      setSuccess(false);
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-zinc-950 py-24 sm:py-32"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-300">
              Contact Us
            </span>

            <h2 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl">
              Let's create
              <span className="block text-zinc-400">something remarkable.</span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-zinc-400">
              Whether you're launching a new product, redesigning an existing
              experience, or building your brand from scratch, we're ready to
              help bring your vision to life.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-zinc-500">
              <span>UI/UX Design</span>
              <span>•</span>
              <span>Web Development</span>
              <span>•</span>
              <span>Brand Strategy</span>
            </div>

            <div className="mt-12 space-y-6">
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-white/5 p-3">
                  <Mail className="text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500">Email</p>
                  <p className="text-white">contact@nova.agency</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-white/5 p-3">
                  <Phone className="text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500">Phone</p>
                  <p className="text-white">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-white/5 p-3">
                  <MapPin className="text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500">Location</p>
                  <p className="text-white">Chennai, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[32px] border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-8 backdrop-blur-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-300">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-zinc-500 focus:border-purple-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-300">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-zinc-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-300">
                  Message
                </label>

                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-zinc-500 focus:border-purple-500 focus:outline-none"
                />
              </div>

              {error && <p className="text-sm text-red-400">{error}</p>}

              {success && (
                <p className="text-sm text-green-400">
                  Message sent successfully!
                </p>
              )}

              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 font-semibold text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
              >
                Send Message
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />{" "}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
