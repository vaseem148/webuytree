import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
// import Whytreesmatter from "./components/Whytreesmatter"
// import WhyTreeRemoval from "./components/WhyTreeRemoval"
// import Services from "./components/Services"
// import Documents from "./components/Documents"
// import Request from "./components/Request"
// import Contact from "./components/Contact"
// import LegalDisclaimer from "./components/LegalDisclaimer"
import HomePage from "./pages/HomePage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsofService"


function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          {/* <Route path="Navbar" element={<Navbar />} />
          <Route path="Footer" element={<Footer />} />
          <Route path="Whytreesmatter" element={<Whytreesmatter />} />
          <Route path="WhyTreeRemoval" element={<WhyTreeRemoval />} />
          <Route path="Services" element={<Services />} />
          <Route path="Request" element={<Request />} />
          <Route path="Documents" element={<Documents />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="LegalDisclaimer" element={<LegalDisclaimer />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
