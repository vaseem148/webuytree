import {
  FileText,
  Tractor,
  AlertTriangle,
  Sofa,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";

/* ================= ANIMATIONS ================= */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const iconAnim = {
  hidden: { scale: 0.9, rotate: -5, opacity: 0 },
  show: {
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/* ================= COMPONENT ================= */

export default function WhyTreeRemoval() {
  return (
    <section
      id="whytreeremoval"
      className="bg-[#faf8f2] py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

        {/* LEFT CONTENT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <span className="inline-block mb-6 px-5 py-2 text-sm rounded-full bg-[#e8efe6] text-[#2f4f3a]">
            Understanding the Need
          </span>

          <h2 className="text-5xl leading-tight font-serif text-[#0f2f1f] mb-6">
            Why Tree Removal Is <br /> Sometimes Necessary
          </h2>

          <p className="text-lg text-[#355f4b] max-w-xl mb-12">
            While we value every tree, there are legitimate situations where
            tree removal becomes necessary. We ensure all removals are
            justified, documented, and approved by relevant authorities.
          </p>

          {/* IMPORTANT NOTICE */}
          <motion.div
            variants={fadeUp}
            className="flex gap-4 bg-[#eef3ec] border border-[#d7e1d6] rounded-2xl p-6 max-w-xl"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#dde6dc]">
              <AlertTriangle className="w-6 h-6 text-[#0f2f1f]" />
            </div>

            <div>
              <h4 className="font-semibold text-[#0f2f1f] mb-1">
                Important Notice
              </h4>
              <p className="text-[#355f4b] text-sm leading-relaxed">
                We do NOT promote or participate in illegal tree cutting. All
                our operations comply with government regulations.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT CARDS */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {[
            {
              icon: FileText,
              title: "New Construction",
              desc: "When land development requires tree removal for approved structures.",
            },
            {
              icon: Tractor,
              title: "Agriculture Issues",
              desc: "Trees affecting crop growth or land usage for farming.",
            },
            {
              icon: AlertTriangle,
              title: "Safety Concerns",
              desc: "Dead or dangerous trees posing risks to people or property.",
            },
            {
              icon: Sofa,
              title: "Furniture Purpose",
              desc: "Sustainably sourced timber used for furniture manufacturing.",
            },
            {
              icon: MapPin,
              title: "Land Sale",
              desc: "Land clearance required for legal property transactions.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              transition={{ type: "spring", stiffness: 220, damping: 16 }}
              className="group flex gap-4 bg-[#f5f7f2] border border-[#d7e1d6] rounded-2xl p-6 cursor-pointer shadow-sm hover:shadow-xl transition-shadow"
            >
              {/* ICON */}
              <motion.div
                variants={iconAnim}
                className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#e1e8df] shrink-0 group-hover:scale-110 transition"
              >
                <item.icon className="w-6 h-6 text-[#0f2f1f]" />
              </motion.div>

              {/* TEXT */}
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <h4 className="text-lg font-semibold text-[#0f2f1f] mb-1">
                  {item.title}
                </h4>
                <p className="text-[#355f4b] text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
