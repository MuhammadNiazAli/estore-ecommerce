import React from "react";

const TermsContactInfo = () => {
  return (
    <section
      aria-labelledby="contact-info-title"
      className="bg-white text-black py-12 mb-[-150px]"
    >
      <div className="max-w-3xl mx-auto px-6 sm:px-8">
        <h2
          id="contact-info-title"
          tabIndex={-1}
          className="text-2xl sm:text-3xl font-semibold tracking-wide"
        >
          Contact Information
        </h2>

        <p className="mt-6 text-black leading-relaxed sm:text-lg">
          Have questions or need help? Reach out to us anytime via the channels below. We’re here to assist you quickly and effectively.
        </p>

        <section className="mt-8 space-y-8 text-black text-sm sm:text-base leading-relaxed">
          <article>
            <h3 className="text-xl font-semibold mb-2">Email Support</h3>
            <p>
              For general inquiries or support, email us at{" "}
              <a
                href="mailto:support@example.com"
                className="underline hover:text-black break-words"
              >
                support@example.com
              </a>
              . We typically respond within 1-2 business days.
            </p>
          </article>

          <article>
            <h3 className="text-xl font-semibold mb-2">Phone Support</h3>
            <p>
              Prefer to speak directly? Call us at{" "}
              <a
                href="tel:+1234567890"
                className="underline hover:text-black"
              >
                +1 (234) 567-890
              </a>{" "}
              during business hours (Mon–Fri, 9 AM–5 PM local time).
            </p>
          </article>

          <article>
            <h3 className="text-xl font-semibold mb-2">Mailing Address</h3>
            <address className="not-italic">
              123 Business Road,<br />
              Suite 456,<br />
              Cityville, State 78910,<br />
              Country
            </address>
            <p className="mt-2">
              Use this address for formal correspondence or legal notices.
            </p>
          </article>

          <article>
            <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
            <p>
              Need quick answers? Use our live chat on the website, available
              Mon–Fri, 9 AM–5 PM.
            </p>
          </article>

          <article>
            <h3 className="text-xl font-semibold mb-2">Social Media</h3>
            <p>Connect with us on:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                <a
                  href="https://twitter.com/example"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-black"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com/example"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-black"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/example"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-black"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </article>

          <article>
            <h3 className="text-xl font-semibold mb-2">Support Hours</h3>
            <p>
              Our team is available Mon–Fri, 9 AM–5 PM (local time), excluding public holidays. Messages received outside these hours will be answered the next business day.
            </p>
          </article>

          <article>
            <h3 className="text-xl font-semibold mb-2">Feedback</h3>
            <p>
              We value your feedback! Please send suggestions or comments to our support email.
            </p>
          </article>

          <article>
            <h3 className="text-xl font-semibold mb-2">Accessibility</h3>
            <p>
              If you need accommodations or assistance, contact us by email or phone. We’re committed to equal access for all users.
            </p>
          </article>
        </section>
      </div>
    </section>
  );
};

export default TermsContactInfo;
