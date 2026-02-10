import { motion } from "framer-motion";

/* ================= DATA ================= */
const CARDS = [
  {
    icon: "🍃",
    title: "Oxygen Production",
    desc: "A single mature tree can produce enough oxygen for 2–10 people annually.",
  },
  {
    icon: "🌬️",
    title: "Carbon Absorption",
    desc: "Trees absorb CO₂ and harmful gases, purifying the air naturally.",
  },
  {
    icon: "💧",
    title: "Water Conservation",
    desc: "Trees help maintain groundwater levels and prevent soil erosion.",
  },
  {
    icon: "💚",
    title: "Biodiversity Support",
    desc: "Trees provide shelter for birds, insects, and wildlife.",
  },
];

/* ================= ANIMATIONS (SMOOTH) ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 18,
    },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.15,
    },
  },
};

/* ================= COMPONENT ================= */
const WhyTreesMatter = () => {
  return (
    <section id="whytreesmatter" className="bg-[#faf8f2] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* ===== Heading ===== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block mb-4 px-5 py-2 rounded-full bg-green-100 text-sm text-green-900">
            Environmental Importance
          </span>

          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[#143d2b]">
            Why Trees Matter
          </h2>

          <p className="mt-6 text-lg text-[#365f4a] leading-relaxed">
            Trees are the lungs of our planet. We approach every project with
            care, responsibility, and respect for nature.
          </p>
        </motion.div>

        {/* ===== Cards ===== */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {CARDS.map((card, i) => (
            <Card key={i} {...card} />
          ))}
        </motion.div>

        {/* ===== Commitment ===== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative mt-24 rounded-3xl overflow-hidden"
        >
          <video
  autoPlay
  loop
  muted
  playsInline
  preload="auto"
  className="absolute inset-0 w-full h-full object-cover scale-105"
>
  <source
    src="https://res.cloudinary.com/dqar0wfzw/video/upload/v1770713404/forest3_gyevgv.mp4"
    type="video/mp4"
  />
</video>


          <div className="absolute inset-0 bg-[#0f2a1c]/60" />

          <div className="relative z-10 p-10 md:p-14 flex flex-col md:flex-row gap-8 items-start text-white">
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 80 }}
              viewport={{ once: true }}
              className="w-20 h-20 rounded-2xl bg-green-600 flex items-center justify-center text-4xl shadow-md"
            >
              🍃
            </motion.div>

            <div>
              <h3 className="text-2xl md:text-3xl font-serif font-semibold">
                Our Commitment to the Environment
              </h3>

              <p className="mt-4 text-base md:text-lg leading-relaxed max-w-4xl text-white/90">
                At WeBuyTrees, we follow sustainable practices. Trees are removed
                only after proper assessment and government approval. Every tree
                is documented and handled legally and responsibly.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

/* ================= CARD (ULTRA SMOOTH) ================= */
const Card = ({ icon, title, desc }) => (
  <motion.div
    variants={fadeUp}
    whileHover={{
      y: -8,
      scale: 1.03,
      transition: { type: "spring", stiffness: 300 },
    }}
    className="
      bg-white
      rounded-2xl
      p-6
      border border-green-600
      shadow-sm
      hover:shadow-lg
      transition-shadow duration-300
    "
  >
    <div className="
      w-14 h-14 rounded-xl
      bg-green-600
      flex items-center justify-center
      text-3xl text-white
      mb-4
    ">
      {icon}
    </div>

    <h4 className="text-lg font-semibold text-[#143d2b]">
      {title}
    </h4>

    <p className="mt-2 text-sm leading-relaxed text-[#365f4a]">
      {desc}
    </p>
  </motion.div>
);

export default WhyTreesMatter;
