import { motion } from "framer-motion";
import { Scale, ShieldCheck, Leaf, Landmark } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

export default function LegalDisclaimer() {
  return (
    <section id="legaldisclaimber" className="bg-[#faf8f2] py-28">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-6 text-center"
      >
        {/* TITLE */}
        <motion.h2
          variants={fadeUp}
          className="flex items-center justify-center gap-3 text-3xl font-serif text-[#0f2f1f] mb-8"
        >
          <Scale className="w-6 h-6" />
          Legal Disclaimer
        </motion.h2>

        {/* CONTENT */}
        <motion.p
          variants={fadeUp}
          className="text-[#355f4b] leading-relaxed mb-6"
        >
          WeBuyTrees operates in full compliance with the Indian Forest Act,
          State Forest Laws, and all applicable environmental regulations. We do
          not engage in, promote, or facilitate any illegal tree cutting or
          removal activities.
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="text-[#355f4b] leading-relaxed mb-6"
        >
          All tree transactions and removals are subject to verification of
          ownership documents and necessary government approvals. For protected
          species including Teak, Sandalwood, and Rosewood, additional Forest
          Department permissions are mandatory.
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="text-[#355f4b] leading-relaxed mb-12"
        >
          The information provided on this website is for general informational
          purposes only. Actual services may vary based on location, tree
          species, and applicable regulations. We reserve the right to decline
          any request that does not meet legal requirements.
        </motion.p>

        {/* ICON POINTS */}
        <motion.div
          variants={stagger}
          className="flex flex-wrap justify-center gap-10"
        >
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-3 text-[#0f2f1f]"
          >
            <ShieldCheck className="w-5 h-5" />
            <span className="text-sm">100% Legal Operations</span>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex items-center gap-3 text-[#0f2f1f]"
          >
            <Leaf className="w-5 h-5" />
            <span className="text-sm">Environmentally Responsible</span>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex items-center gap-3 text-[#0f2f1f]"
          >
            <Landmark className="w-5 h-5" />
            <span className="text-sm">Government Compliant</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
