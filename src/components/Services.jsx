import { motion } from "framer-motion";
import { Check } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function OurServices() {
  return (
    <section id="services" className="bg-[#f6f8f4] py-20 sm:py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-3xl mb-20 sm:mb-28"
        >
          <span className="inline-block mb-4 px-5 py-2 text-xs sm:text-sm rounded-full bg-[#e2eee6] text-[#1f3f2b]">
            Our Expertise
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-serif text-[#0f2f1f] mb-6 leading-tight">
            High-Value Tree <br className="hidden sm:block" /> Services You Can Trust
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-[#355f4b] max-w-2xl">
            Premium tree solutions designed for landowners who value legality,
            transparency, and environmental responsibility.
          </p>
        </motion.div>

        <div className="space-y-20 sm:space-y-28">

          {/* CARD 1 */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{ y: -12 }}
            transition={{ type: "spring", stiffness: 120, damping: 16 }}
            className="relative"
          >
            <div className="absolute inset-0 translate-x-4 sm:translate-x-6 translate-y-4 sm:translate-y-6 bg-[#dbe9dd] rounded-[28px] sm:rounded-[36px]" />

            <div className="relative grid lg:grid-cols-2 gap-10 bg-[#0f2f1f] text-white rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 lg:p-14 shadow-2xl overflow-hidden min-h-[auto] lg:min-h-[520px]">

              {/* LEFT */}
              <div className="flex flex-col justify-between">
                <div>
                  <span className="inline-block mb-6 px-4 py-2 rounded-full bg-white/10 text-xs sm:text-sm">
                    Premium Service
                  </span>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif mb-5">
                    We Buy Valuable Trees
                  </h3>

                  <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                    Acquisition of premium timber trees with fair valuation,
                    instant payment, and complete legal handling.
                  </p>
                </div>

                <ul className="space-y-3 sm:space-y-4 mt-8 sm:mt-10">
                  {[
                    "Market-driven pricing",
                    "Same-day payment",
                    "Legal & permit handling",
                    "Transport & logistics",
                    "Eco-compliant process",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 sm:gap-4 text-sm">
                      <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#3fa63f] flex items-center justify-center">
                        <Check className="w-3 h-3 sm:w-4 sm:h-4" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* RIGHT VIDEO */}
              <div className="relative h-64 sm:h-80 lg:h-full rounded-2xl sm:rounded-3xl overflow-hidden">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover"
                >
                  <source src="/forest7.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/30" />
              </div>
            </div>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{ y: -12 }}
            transition={{ type: "spring", stiffness: 120, damping: 16 }}
            className="relative"
          >
            <div className="absolute inset-0 -translate-x-4 sm:-translate-x-6 translate-y-4 sm:translate-y-6 bg-[#e7efe8] rounded-[28px] sm:rounded-[36px]" />

            <div className="relative grid lg:grid-cols-2 gap-10 bg-white rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 lg:p-14 shadow-xl overflow-hidden min-h-[auto] lg:min-h-[520px]">

              {/* LEFT VIDEO */}
              <div className="relative h-64 sm:h-80 lg:h-full rounded-2xl sm:rounded-3xl overflow-hidden order-2 lg:order-1">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover"
                >
                  <source src="/s1.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-white/15" />
              </div>

              {/* RIGHT CONTENT */}
              <div className="order-1 lg:order-2 max-w-xl">
                <span className="inline-block mb-5 px-4 py-2 rounded-full bg-[#e8efe6] text-xs sm:text-sm text-[#0f2f1f]">
                  Professional Service
                </span>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#0f2f1f] mb-4">
                  Tree Removal Service
                </h3>

                <p className="text-[#355f4b] text-base sm:text-lg leading-relaxed mb-8 sm:mb-10">
                  Safe and certified removal of hazardous or unwanted trees with
                  permits, insurance, and expert supervision.
                </p>

                <ul className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  {[
                    "Risk assessment",
                    "Controlled removal",
                    "Debris management",
                    "Permit assistance",
                    "Insured operations",
                    "Insured operations",
                    "Insured operations",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-[#355f4b]">
                      <span className="w-5 h-5 rounded-full bg-[#e8efe6] flex items-center justify-center">
                        <Check className="w-3 h-3 text-[#0f2f1f]" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
