import { Phone, Mail, MapPin, Clock, Store } from "lucide-react";

export default function ContactUs() {
  return (
    <section
      id="contact"
      className="relative bg-[#0f2f1f] text-white py-32 overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#1f4d37,transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        
        {/* LEFT */}
        <div>
          <span className="inline-block mb-6 text-sm tracking-widest text-[#9fc5b2]">
            CONTACT
          </span>

          <h2 className="text-5xl leading-tight font-semibold mb-8">
            We don’t just respond. <br />
            <span className="text-[#9fc5b2]">We act fast.</span>
          </h2>

          <p className="text-lg text-[#cfe3d9] max-w-md">
            Whether it’s selling trees, documentation, or land-related queries,
            our team connects directly without delays.
          </p>
        </div>

        {/* RIGHT */}
        <div className="space-y-10">

          {/* PHONE */}
          <a
            href="tel:+919876543210"
            className="flex gap-6 items-start hover:opacity-80 transition"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1f4d37]">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="uppercase text-xs tracking-wider text-[#9fc5b2]">
                Phone
              </p>
              <p className="text-xl font-medium mt-1">
                +91 98765 43210
              </p>
            </div>
          </a>

          {/* EMAIL */}
          <a
            href="mailto:info@webuytrees.com"
            className="flex gap-6 items-start hover:opacity-80 transition"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1f4d37]">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="uppercase text-xs tracking-wider text-[#9fc5b2]">
                Email
              </p>
              <p className="text-xl font-medium mt-1">
                info@webuytrees.com
              </p>
            </div>
          </a>

          {/* LOCATION */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=South+India"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-6 items-start hover:opacity-80 transition"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1f4d37]">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="uppercase text-xs tracking-wider text-[#9fc5b2]">
                Location
              </p>
              <p className="text-xl font-medium mt-1">
                South India
              </p>
            </div>
          </a>

          {/* WORKING HOURS */}
          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1f4d37]">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="uppercase text-xs tracking-wider text-[#9fc5b2]">
                Working Hours
              </p>
              <p className="text-xl font-medium mt-1">
                Mon – Sat · 9:00 AM – 6:00 PM
              </p>
            </div>
          </div>

          {/* SHOP OPEN */}
          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1f4d37]">
              <Store className="w-5 h-5" />
            </div>
            <div>
              <p className="uppercase text-xs tracking-wider text-[#9fc5b2]">
                Shop Status
              </p>
              <p className="flex items-center gap-2 text-xl font-medium mt-1 text-green-300">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                Shop Open
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
