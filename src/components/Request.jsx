import { motion } from "framer-motion";
import { Check, Send, ShieldCheck, Loader2 } from "lucide-react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

/* ================= ANIMATION ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

export default function TreeRequestForm() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("success");
        formRef.current.reset();
      })
      .catch(() => setStatus("error"))
      .finally(() => setLoading(false));
  };

  return (
    <section id="request" className="bg-[#faf8f2] py-28">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20">

        {/* LEFT CONTENT */}
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <motion.span variants={fadeUp} className="inline-block mb-6 px-5 py-2 text-sm rounded-full bg-[#e8efe6] text-[#2f4f3a]">
            Get Started
          </motion.span>

          <motion.h2 variants={fadeUp} className="text-5xl font-serif text-[#0f2f1f] leading-tight mb-6">
            Submit Your Tree Request
          </motion.h2>

          <motion.p variants={fadeUp} className="text-lg text-[#355f4b] max-w-xl mb-10">
            Fill out the form with your details and we'll get back to you within 24–48 hours.
          </motion.p>

          <motion.ul variants={stagger} className="space-y-4">
            {[
              "Free initial consultation",
              "No obligation to proceed",
              "Confidential handling of your information",
              "Expert guidance throughout the process",
            ].map((item, i) => (
              <motion.li key={i} variants={fadeUp} className="flex items-center gap-3 text-[#0f2f1f]">
                <span className="w-6 h-6 rounded-full bg-[#e8efe6] flex items-center justify-center">
                  <Check className="w-4 h-4" />
                </span>
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-10 shadow-xl border border-[#e6ede3]"
        >
          <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm mb-1 text-[#0f2f1f]">Full Name *</label>
                <input
                  type="text"
                  name="full_name"
                  required
                  placeholder="Your full name"
                  className="w-full rounded-xl bg-[#f4f2ea] border border-[#d7e1d6] px-4 py-3 focus:ring-2 focus:ring-[#2f6f4f] outline-none"
                />
              </div>

              <div>
                <label className="block text-sm mb-1 text-[#0f2f1f]">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="Your phone number"
                  className="w-full rounded-xl bg-[#f4f2ea] border border-[#d7e1d6] px-4 py-3 focus:ring-2 focus:ring-[#2f6f4f] outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-1 text-[#0f2f1f]">Property Location *</label>
              <input
                type="text"
                name="location"
                required
                placeholder="Village, District, State"
                className="w-full rounded-xl bg-[#f4f2ea] border border-[#d7e1d6] px-4 py-3 focus:ring-2 focus:ring-[#2f6f4f] outline-none"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm mb-1 text-[#0f2f1f]">Tree Type / Species</label>
                <input
                  type="text"
                  name="tree_type"
                  placeholder="Teak, Neem, Mango"
                  className="w-full rounded-xl bg-[#f4f2ea] border border-[#d7e1d6] px-4 py-3 focus:ring-2 focus:ring-[#2f6f4f] outline-none"
                />
              </div>

              <div>
                <label className="block text-sm mb-1 text-[#0f2f1f]">Purpose</label>
                <input
                  type="text"
                  name="purpose"
                  placeholder="Sale / Removal"
                  className="w-full rounded-xl bg-[#f4f2ea] border border-[#d7e1d6] px-4 py-3 focus:ring-2 focus:ring-[#2f6f4f] outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-1 text-[#0f2f1f]">Additional Details</label>
              <textarea
                name="message"
                rows="4"
                placeholder="Number of trees, age, any special details..."
                className="w-full rounded-xl bg-[#f4f2ea] border border-[#d7e1d6] px-4 py-3 focus:ring-2 focus:ring-[#2f6f4f] outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-3 bg-[#173f2a] hover:bg-[#145c3a] text-white rounded-xl py-4 font-semibold transition"
            >
              {loading ? <Loader2 className="animate-spin" /> : <Send className="w-5 h-5" />}
              {loading ? "Sending..." : "Submit Request"}
            </button>

            {status === "success" && (
              <p className="text-green-700 text-sm">✅ Request sent successfully.</p>
            )}
            {status === "error" && (
              <p className="text-red-600 text-sm">❌ Failed to send. Try again.</p>
            )}

            <div className="flex gap-3 bg-[#f4f2ea] rounded-xl p-4 text-sm text-[#355f4b]">
              <ShieldCheck className="w-5 h-5 shrink-0" />
              <p>
                <strong className="text-[#0f2f1f]">Important:</strong> Requests without proper documents will not be processed.
              </p>
            </div>

          </form>
        </motion.div>
      </div>
    </section>
  );
}
