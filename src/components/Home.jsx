import React from 'react'

const Home = () => {
  return (
    <section id="home" className="relative min-h-screen text-white overflow-hidden">

        {/* 🎥 Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/forest2.mp4" type="video/mp4" />

        </video>

        {/* 🌿 Dark Overlay */}
        <div className="absolute inset-0 bg-[#0f2a1c]/60" />

        {/* Navbar */}
        {/* <Navbar /> */}

        {/* Content */}
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6">

          {/* Badge */}
          <div className="mb-6 px-5 py-2 rounded-full border border-green-400/40 bg-green-900/40 text-sm flex items-center gap-2 backdrop-blur">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Government Approved · Legally Compliant
          </div>

          <h1 className="font-serif text-5xl md:text-7xl font-semibold tracking-wide">
            WeBuyTrees
          </h1>

          <p className="mt-4 text-xl md:text-2xl opacity-90">
            Legal & Responsible Tree Management
          </p>

          <p className="mt-6 max-w-2xl opacity-80 leading-relaxed">
            We do not cut trees blindly.
            <br />
            Trees are removed or purchased only with
            <span className="text-green-400 font-medium"> legal approval</span>.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex gap-4 flex-wrap justify-center">
            
            <a
  href="#request"
  className="bg-white text-green-900 px-8 py-3 rounded-xl font-semibold hover:scale-105 transition"
>
  Submit Tree Request
</a>

<a
  href="#documents"
  className="border border-white/40 px-8 py-3 rounded-xl hover:bg-white/10 transition"
>
  View Documents
</a>

          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-10">
            <Stat value="1000+" label="Trees Managed" />
            <Stat value="100%" label="Legal Compliance" />
            <Stat value="500+" label="Happy Clients" />
            <Stat value="10+" label="Years Experience" />
          </div>
        </div>
      </section>

      
  )
};

const Stat = ({ value, label }) => (
  <div className="text-center">
    <h3 className="text-3xl font-semibold">{value}</h3>
    <p className="text-sm opacity-70">{label}</p>
  </div>
);

export default Home;