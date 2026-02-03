import React from "react";
import { Phone, Mail, MapPin, Clock, Store, ArrowRight } from "lucide-react";
import { motion } from "framer-motion"; // Add 'framer-motion' for animations

export default function ContactUs() {
  const contactDetails = [
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 98765 43210",
      href: "tel:+919876543210",
      color: "text-blue-400",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "info@webuytrees.com",
      href: "mailto:info@webuytrees.com",
      color: "text-emerald-400",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Kanchipuram, Tamil Nadu",
      href: "https://goo.gl/maps/yourlink",
      color: "text-red-400",
    },
  ];

  return (
    <section id="contact" className="relative bg-[#163f2a] text-white py-24 lg:py-32 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#1f4d37]/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#143a2a]/40 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 mb-6 text-xs font-bold tracking-[0.2em] text-[#9fc5b2]">
              GET IN TOUCH
            </span>

            <h2 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8">
              We don’t just respond. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9fc5b2] to-[#4ade80]">
                We act fast.
              </span>
            </h2>

            <p className="text-xl text-[#cfe3d9]/80 max-w-md leading-relaxed mb-10">
              Whether it’s selling trees or land documentation, our experts are ready to assist you instantly.
            </p>

            {/* STATUS BADGE */}
            <div className="inline-flex items-center gap-4 p-1 pr-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500/20 text-green-400">
                <Store className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-white/50">Status</p>
                <p className="flex items-center gap-2 text-sm font-bold text-green-400">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-ping" />
                  SHOP OPEN NOW
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT CONTENT - CONTACT CARDS & MAP */}
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-4">
              {contactDetails.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-all duration-500 overflow-hidden"
                >
                  <div className={`mb-4 transition-transform duration-500 group-hover:scale-110 ${item.color}`}>
                    {item.icon}
                  </div>
                  <p className="text-sm text-white/50 uppercase tracking-tighter">{item.label}</p>
                  <p className="text-lg font-semibold mt-1 group-hover:text-[#9fc5b2] transition-colors">{item.value}</p>
                  
                  {/* Hover Arrow */}
                  <ArrowRight className="absolute bottom-6 right-6 w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-white/20" />
                </motion.a>
              ))}

              {/* Working Hours Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="p-6 rounded-3xl bg-gradient-to-br from-[#1f4d37] to-[#0f2f1f] border border-white/10"
              >
                <Clock className="w-6 h-6 mb-4 text-[#9fc5b2]" />
                <p className="text-sm text-white/50 uppercase">Working Hours</p>
                <p className="text-lg font-semibold mt-1">Mon – Sat</p>
                <p className="text-sm text-[#9fc5b2]">9:00 AM – 6:00 PM</p>
              </motion.div>
            </div>

            {/* MAP SECTION */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden border border-white/10 h-[300px] shadow-2xl group"
            >
              <iframe
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124440.3344131584!2d79.62319047913364!3d12.830219602495603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52da700140232b%3A0x6a090432367d2ca!2sKanchipuram%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000"
                className="w-full h-full grayscale-[0.8] invert-[0.9] contrast-[1.2] group-hover:grayscale-0 group-hover:invert-0 transition-all duration-1000"
                loading="lazy"
              />
              {/* Map Overlay for better blending */}
              <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/20 rounded-3xl" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}