import { services } from '../data/content';
import { motion } from 'framer-motion';

const ServicesCards = () => (
  <section className="py-20">
    <div className="container-base relative z-10">

      {/* 🔥 Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-2xl"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-brand-navy to-brand-yellow bg-clip-text text-transparent">
          Our Core Services
        </h2>
        <p className="mt-3 text-gray-600 leading-relaxed">
          End-to-end painting solutions for homes, apartments, villas, and commercial spaces.
        </p>
      </motion.div>

      {/* 🚀 Cards */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <motion.article
            key={service.title}

            /* ✨ Animation */
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}

            className="group relative overflow-hidden rounded-2xl border border-white/30 bg-white/60 backdrop-blur-xl p-6 shadow-md transition duration-300 hover:-translate-y-3 hover:shadow-2xl"
          >

            {/* ✨ Glow Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-brand-navy/10 to-brand-yellow/10 blur-xl"></div>

            {/* 🔝 Top Gradient Border */}
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-navy to-brand-yellow"></div>

            {/* 🧩 Icon */}
            <div className="relative z-10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-sky text-2xl transition group-hover:scale-110 group-hover:rotate-6">
              {service.icon}
            </div>

            {/* 📝 Title */}
            <h3 className="relative z-10 text-lg font-semibold text-brand-navy transition group-hover:text-brand-yellow">
              {service.title}
            </h3>

            {/* 📄 Description */}
            <p className="relative z-10 mt-2 text-sm leading-relaxed text-gray-600">
              {service.description}
            </p>

            {/* 👉 CTA */}
            <div className="relative z-10 mt-4 text-sm font-semibold opacity-0 transition group-hover:opacity-100">
              <span className="inline-flex items-center gap-1 text-brand-navy group-hover:text-brand-yellow">
                Explore 
                <span className="transition group-hover:translate-x-1">→</span>
              </span>
            </div>

          </motion.article>
        ))}
      </div>

    </div>
  </section>
);

export default ServicesCards;