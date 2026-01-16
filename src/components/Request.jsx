import { motion } from "framer-motion";
import { Check, Send, ShieldCheck, Loader2 } from "lucide-react";
import { useState } from "react";
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
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [treeType, setTreeType] = useState("");
  const [purpose, setPurpose] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          full_name: fullName,
          phone,
          location,
          tree_type: treeType,
          purpose,
          message: details,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("success");
        setFullName("");
        setPhone("");
        setLocation("");
        setTreeType("");
        setPurpose("");
        setDetails("");
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
            Fill out the form with your details and we'll get back to you within
            24–48 hours.
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
          className="bg-[#ffffff] rounded-3xl p-10 shadow-xl border border-[#e6ede3]"
        >
          <form className="space-y-6" onSubmit={handleSubmit}>

            {/* ROW 1 */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm mb-1 text-[#0f2f1f]">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  placeholder="Your full name"
                  className="w-full rounded-xl bg-[#f4f2ea] border border-[#d7e1d6] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2f6f4f]"
                />
              </div>

              <div>
                <label className="block text-sm mb-1 text-[#0f2f1f]">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  placeholder="Your phone number"
                  className="w-full rounded-xl bg-[#f4f2ea] border border-[#d7e1d6] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2f6f4f]"
                />
              </div>
            </div>

            {/* LOCATION */}
            <div>
              <label className="block text-sm mb-1 text-[#0f2f1f]">
                Property Location *
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
                placeholder="Village, District, State"
                className="w-full rounded-xl bg-[#f4f2ea] border border-[#d7e1d6] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2f6f4f]"
              />
            </div>

            {/* ROW 2 */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm mb-1 text-[#0f2f1f]">
                  Tree Type/Species
                </label>
                <input
                  type="text"
                  value={treeType}
                  onChange={(e) => setTreeType(e.target.value)}
                  placeholder="e.g., Teak, Neem, Mango"
                  className="w-full rounded-xl bg-[#f4f2ea] border border-[#d7e1d6] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2f6f4f]"
                />
              </div>

              <div>
                <label className="block text-sm mb-1 text-[#0f2f1f]">
                  Purpose
                </label>
                <input
                  type="text"
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value)}
                  placeholder="Sale / Removal"
                  className="w-full rounded-xl bg-[#f4f2ea] border border-[#d7e1d6] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2f6f4f]"
                />
              </div>
            </div>

            {/* DETAILS */}
            <div>
              <label className="block text-sm mb-1 text-[#0f2f1f]">
                Additional Details
              </label>
              <textarea
                rows="4"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Number of trees, approximate age, any special circumstances..."
                className="w-full rounded-xl bg-[#f4f2ea] border border-[#d7e1d6] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2f6f4f]"
              />
            </div>

            {/* SUBMIT */}
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

            {/* NOTICE */}
            <div className="flex gap-3 bg-[#f4f2ea] rounded-xl p-4 text-sm text-[#355f4b]">
              <ShieldCheck className="w-5 h-5 shrink-0" />
              <p>
                <strong className="text-[#0f2f1f]">Important:</strong> Requests
                without proper documents will not be processed.
              </p>
            </div>

          </form>
        </motion.div>

      </div>
    </section>
  );
}
