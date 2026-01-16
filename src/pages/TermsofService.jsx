const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-[#faf8f2] px-4 py-20">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
        
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
          Terms of Service
        </h1>
        <p className="text-gray-600 mb-10">
          Last updated: January 2026
        </p>

        {/* Section 1 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            1. Acceptance of Terms
          </h2>
          <p className="text-gray-700 leading-relaxed">
            By accessing or using our website and services, you agree to be bound
            by these Terms of Service. If you do not agree with any part of these
            terms, you must not use our services.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            2. Use of Our Services
          </h2>
          <p className="text-gray-700 leading-relaxed">
            You agree to use our services only for lawful purposes and in a way
            that does not infringe the rights of others or restrict their use
            and enjoyment of the website.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            3. User Responsibilities
          </h2>
          <p className="text-gray-700 leading-relaxed">
            You are responsible for providing accurate information and for
            maintaining the confidentiality of any details you submit through
            our forms or contact channels.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            4. Intellectual Property
          </h2>
          <p className="text-gray-700 leading-relaxed">
            All content on this website, including text, graphics, logos, and
            design, is the property of the website owner and is protected by
            applicable intellectual property laws.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            5. Limitation of Liability
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We shall not be liable for any direct, indirect, incidental, or
            consequential damages arising out of your use of our services or
            inability to access the website.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            6. Termination
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We reserve the right to suspend or terminate access to our services
            at any time without prior notice if these terms are violated.
          </p>
        </section>

        {/* Section 7 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            7. Changes to These Terms
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We may update these Terms of Service from time to time. Any changes
            will be posted on this page, and continued use of the website means
            you accept those changes.
          </p>
        </section>

        {/* Section 8 */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            8. Contact Us
          </h2>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions about these Terms of Service, please
            contact us through the information provided on our website.
          </p>
        </section>

      </div>
    </div>
  );
};

export default TermsOfService;
