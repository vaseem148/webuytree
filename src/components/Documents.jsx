import { motion } from "framer-motion";
import {
  FileText,
  FileCheck,
  Landmark,
  AlertCircle,
} from "lucide-react";

/* ================= FAST ANIMATIONS ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const cardFade = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

/* ================= COMPONENT ================= */
export default function DocumentsRequired() {
  return (
    <section id="documents" className="bg-[#faf8f2] py-28">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20">

        {/* LEFT CONTENT */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.span
            variants={fadeUp}
            className="inline-block mb-6 px-5 py-2 text-sm rounded-full bg-[#e8efe6] text-[#2f4f3a]"
          >
            Legal Requirements
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="text-5xl font-serif text-[#0f2f1f] mb-6"
          >
            Documents Required
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-lg text-[#355f4b] max-w-xl mb-12"
          >
            To ensure legal compliance and protect all parties involved, we
            require specific documentation before processing any tree request.
          </motion.p>

          {/* DOCUMENT LIST */}
          <motion.div variants={stagger} className="space-y-6 max-w-xl">
            {[
              {
                icon: FileText,
                title: "VAO Letter",
                desc: "Village Administrative Officer's letter confirming land ownership and tree details.",
              },
              {
                icon: FileCheck,
                title: "Land Documents",
                desc: "Original land ownership documents proving your legal right to the property.",
              },
              {
                icon: Landmark,
                title: "Patta",
                desc: "Land revenue document issued by the state government as proof of ownership.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={cardFade}
                whileHover={{ y: -3, transition: { duration: 0.15 } }}
                className="flex gap-4 bg-[#f5f7f2] border border-[#d7e1d6] rounded-2xl p-6 shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#e1e8df] flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-[#0f2f1f]" />
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h4 className="font-semibold text-[#0f2f1f]">
                      {item.title}
                    </h4>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-[#e8efe6] text-[#2f4f3a]">
                      Required
                    </span>
                  </div>
                  <p className="text-sm text-[#355f4b] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT NOTICE CARD */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-[#f4f2ea] border border-[#d9d1c5] rounded-3xl p-10 shadow-lg"
        >
          <div className="flex gap-4 mb-6 items-center">
            <div className="w-12 h-12 rounded-xl bg-[#e8e1d6] flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-[#6b4b1f]" />
            </div>
            <h3 className="text-xl font-semibold text-[#0f2f1f]">
              Special Notice for Teak Wood
            </h3>
          </div>

          <p className="text-[#355f4b] mb-4 leading-relaxed">
            For <strong>Teak wood</strong> and other protected species,
            additional permissions from the Forest Department are mandatory.
          </p>

          <p className="text-[#355f4b] mb-8 leading-relaxed">
            This includes species listed under the Indian Forest Act and
            state-specific regulations. We will guide you through the entire
            permission process.
          </p>

          <div className="bg-[#fdfdfb] border border-[#d7e1d6] rounded-2xl p-6">
            <h4 className="font-semibold text-[#0f2f1f] mb-4">
              Required for Protected Species:
            </h4>

            <ul className="space-y-3 text-sm text-[#355f4b] list-disc list-inside">
              <li>Forest Department Permission</li>
              <li>Species Identification Certificate</li>
              <li>Transit Permit (if applicable)</li>
              <li>Environmental Clearance</li>
            </ul>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
