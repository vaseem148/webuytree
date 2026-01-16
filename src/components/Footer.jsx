const Footer = () => {
  return (
    <footer className="bg-[#163f2a] text-white">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">🌳</span>
            <h2 className="text-xl font-semibold">WeBuyTrees</h2>
          </div>

          <p className="text-sm leading-relaxed opacity-90 max-w-sm">
            Legal and responsible tree buying & removal services. We
            operate with full government compliance and environmental
            responsibility.
          </p>

          <p className="mt-6 text-sm text-green-200">
            Government Approved &nbsp;·&nbsp; Eco-Friendly &nbsp;·&nbsp; Trusted
          </p>
        </div>

        {/* Quick Links */}
        {/* Quick Links */}
<div>
  <h3 className="text-lg font-semibold mb-5">Quick Links</h3>

  <ul className="space-y-3 text-sm opacity-90">
    <li>
      <a href="#whytreesmatter" className="hover:opacity-100">
        Why Trees Matter
      </a>
    </li>

    <li>
      <a href="#services" className="hover:opacity-100">
        Our Services
      </a>
    </li>

    <li>
      <a href="#documents" className="hover:opacity-100">
        Documents Required
      </a>
    </li>

    <li>
      <a href="#request" className="hover:opacity-100">
        Submit Request
      </a>
    </li>
  </ul>
</div>


        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-5">Contact Us</h3>

          <div className="space-y-4 text-sm opacity-90">
            <div className="flex items-start gap-3">
              <span>📞</span>
              <div>
                <p className="font-medium">+91 98765 43210</p>
                <p className="text-xs opacity-80">Mon-Sat, 9am-6pm</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span>✉️</span>
              <p>info@webuytrees.com</p>
            </div>

            <div className="flex items-start gap-3">
              <span>📍</span>
              <p className="max-w-xs">
                Serving across Tamil Nadu, Karnataka, Kerala, and Andhra
                Pradesh
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm opacity-80">
          <p>© 2026 WeBuyTrees. All rights reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">

            <a href="privacy-policy">
              <span className="hover:opacity-100 cursor-pointer">
               
              </span> Privacy Policy</a>
            
            <a href="terms-of-service">
            <span className="hover:opacity-100 cursor-pointer">
              Terms of Service
            </span>
            </a>


          </div>



        </div>
      </div>
    </footer>
  );
};

export default Footer;
