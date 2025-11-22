import React from "react";

const TermsHero = () => {
  return (
    <section
      aria-labelledby="terms-title"
      className="bg-gray-900 text-yellow-400 min-h-screen py-12 my-[-50px]"
    >
      <div className="max-w-3xl mx-auto px-6 sm:px-8">
        <h1
          id="terms-title"
          tabIndex={-1}
          className="text-3xl sm:text-4xl font-extrabold tracking-wide"
        >
          Terms and Conditions
        </h1>

        <p className="mt-6 text-yellow-300 leading-relaxed sm:text-lg">
          Welcome to eStore. By using our services, you agree to these Terms and applicable laws. Please read carefully.
        </p>

        <section className="mt-10 space-y-8 text-yellow-300 text-sm sm:text-base leading-relaxed">
          <article>
            <h2 className="text-xl font-semibold mb-2">1. User Responsibilities</h2>
            <p>
              Comply with all laws and avoid misuse of the Service. Keep your account credentials confidential.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold mb-2">2. Intellectual Property</h2>
            <p>
              All content is our property or licensed to us. Do not copy or exploit without permission.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold mb-2">3. Privacy</h2>
            <p>
              We respect your privacy. See our Privacy Policy for details on data use and protection.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold mb-2">4. Liability Limitation</h2>
            <p>
              The Service is provided "as is." We are not liable for damages arising from its use.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold mb-2">5. Account Suspension</h2>
            <p>
              We may suspend or terminate access if Terms are violated.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold mb-2">6. Changes to Terms</h2>
            <p>
              Terms may update periodically. Continued use means acceptance.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold mb-2">7. Governing Law</h2>
            <p>
              These Terms are governed by laws of our incorporation jurisdiction.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold mb-2">8. User Content</h2>
            <p>
              You grant us rights to use content you upload for service operation.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold mb-2">9. Indemnification</h2>
            <p>
              You agree to hold us harmless from claims arising from your use of the Service.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold mb-2">10. Disclaimer</h2>
            <p>
              No warranties; use Service at your own risk.
            </p>
          </article>
        </section>

        <p className="mt-12 text-yellow-300 text-sm sm:text-base">
          Questions? Contact us at{" "}
          <a
            href="mailto:support@example.com"
            className="underline text-yellow-200"
          >
            support@example.com
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default TermsHero;
