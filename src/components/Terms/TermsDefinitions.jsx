import React from "react";

const TermsDefinitions = () => {
  return (
    <section
      aria-labelledby="definitions-title"
      className="bg-white text-black py-12"
    >
      <div className="max-w-3xl mx-auto px-6 sm:px-8" style={{ boxSizing: "border-box" }}>
        <h2
          id="definitions-title"
          tabIndex={-1}
          className="text-2xl sm:text-3xl font-semibold tracking-wide"
        >
          Key Definitions
        </h2>

        <dl className="mt-8 space-y-8 text-black text-sm sm:text-base leading-relaxed max-w-full">
          <div>
            <dt className="font-semibold text-lg sm:text-xl">User</dt>
            <dd className="mt-2 ml-6">
              Any individual or entity who accesses, registers, or uses our Services,
              including visitors, customers, and authorized agents. All Users must
              follow our Terms and policies.
            </dd>
          </div>

          <div>
            <dt className="font-semibold text-lg sm:text-xl">Services</dt>
            <dd className="mt-2 ml-6">
              The entire online platform and related offerings provided by the Company,
              including websites, apps, features, content, updates, and support.
            </dd>
          </div>

          <div>
            <dt className="font-semibold text-lg sm:text-xl">Content</dt>
            <dd className="mt-2 ml-6">
              All text, images, audio, video, and other materials available through the
              Services, protected by intellectual property rights.
            </dd>
          </div>

          <div>
            <dt className="font-semibold text-lg sm:text-xl">Privacy Policy</dt>
            <dd className="mt-2 ml-6">
              Our official statement on how we collect, use, and protect Users’ personal
              data. It forms part of these Terms.
            </dd>
          </div>

          <div>
            <dt className="font-semibold text-lg sm:text-xl">Terms</dt>
            <dd className="mt-2 ml-6">
              These Terms and Conditions, including all updates and related policies,
              which govern your use of our Services.
            </dd>
          </div>

          <div>
            <dt className="font-semibold text-lg sm:text-xl">Company / We / Us</dt>
            <dd className="mt-2 ml-6">
              The legal entity providing and managing the Services, including its affiliates
              and representatives.
            </dd>
          </div>

          <div>
            <dt className="font-semibold text-lg sm:text-xl">Third-Party Services</dt>
            <dd className="mt-2 ml-6">
              Products or services offered by others that may be integrated or linked to
              our platform, governed by their own terms.
            </dd>
          </div>

          <div>
            <dt className="font-semibold text-lg sm:text-xl">Account</dt>
            <dd className="mt-2 ml-6">
              A registered profile created by a User to access specific features of the
              Services, requiring personal information and acceptance of these Terms.
            </dd>
          </div>

          <div>
            <dt className="font-semibold text-lg sm:text-xl">User-Generated Content</dt>
            <dd className="mt-2 ml-6">
              Any materials posted or uploaded by Users, such as reviews, comments,
              or media, for which Users retain ownership but license usage rights to
              the Company.
            </dd>
          </div>

          <div>
            <dt className="font-semibold text-lg sm:text-xl">Effective Date</dt>
            <dd className="mt-2 ml-6">
              The date these Terms take effect, typically when you first use the Services
              or as specified in this document.
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
};

export default TermsDefinitions;
