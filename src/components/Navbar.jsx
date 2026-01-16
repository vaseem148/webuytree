import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false); // mobile menu
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (id) => {
    setOpen(false); // close mobile menu
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${scrolled ? "bg-white shadow" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center">

        {/* LOGO */}
        <button
          onClick={() => goTo("home")}
          className={`text-lg font-semibold
          ${scrolled ? "text-green-900" : "text-white"}`}
        >
          WeBuyTrees
        </button>

        {/* DESKTOP LINKS */}
        <ul
          className={`ml-auto hidden md:flex gap-6 text-sm
          ${scrolled ? "text-gray-700" : "text-white"}`}
        >
          <li><button onClick={() => goTo("home")}>Home</button></li>
          <li><button onClick={() => goTo("whytreesmatter")}>Why Trees Matter</button></li>
          <li><button onClick={() => goTo("services")}>Services</button></li>
          <li><button onClick={() => goTo("documents")}>Documents</button></li>
          <li><button onClick={() => goTo("request")}>Request</button></li>
          <li><button onClick={() => goTo("contact")}>Contact</button></li>
        </ul>

        {/* CTA (desktop only) */}
        <button
          onClick={() => goTo("request")}
          className={`ml-6 px-5 py-2 rounded-full font-medium hidden md:block
          ${scrolled ? "bg-green-800 text-white" : "bg-white text-green-900"}`}
        >
          Submit Request
        </button>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className={`ml-auto md:hidden text-2xl
          ${scrolled ? "text-green-900" : "text-white"}`}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4">
          <button onClick={() => goTo("home")} className="block">Home</button>
          <button onClick={() => goTo("whytreesmatter")} className="block">Why Trees Matter</button>
          <button onClick={() => goTo("services")} className="block">Services</button>
          <button onClick={() => goTo("documents")} className="block">Documents</button>
          <button onClick={() => goTo("request")} className="block">Request</button>
          <button onClick={() => goTo("contact")} className="block">Contact</button>

          <button
            onClick={() => goTo("request")}
            className="w-full mt-2 bg-green-800 text-white py-2 rounded-full"
          >
            Submit Request
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
