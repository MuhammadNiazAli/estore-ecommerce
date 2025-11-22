import React from "react";

const TermsDisputeResolution = () => {
  return (
    <section
      aria-labelledby="dispute-resolution-title"
      className="bg-gray-900 text-yellow-400 py-12"
    >
      <div className="max-w-3xl mx-auto px-6 sm:px-8" style={{ boxSizing: "border-box" }}>
        <h2
          id="dispute-resolution-title"
          tabIndex={-1}
          className="text-2xl sm:text-3xl font-semibold tracking-wide"
        >
          Dispute Resolution
        </h2>

        <p className="mt-6 text-yellow-300 leading-relaxed sm:text-lg">
          If any dispute arises from these Terms, both parties agree to try resolving it
          through good-faith negotiations first.
        </p>

        <p className="mt-6 text-yellow-300 leading-relaxed sm:text-lg">
          If unresolved within 30 days after written notice, the dispute will be settled by
          binding arbitration under rules of a recognized arbitration institution in the
          applicable jurisdiction.
        </p>

        <p className="mt-6 text-yellow-300 leading-relaxed sm:text-lg">
          Arbitration will occur in the agreed language and location. If no agreement is
          reached, the arbitration body will decide. The decision is final, binding, and
          enforceable in court.
        </p>

        <p className="mt-6 text-yellow-300 leading-relaxed sm:text-lg">
          By agreeing to arbitration, both parties waive rights to jury trials, class actions,
          or court trials except where the law prohibits such waivers.
        </p>

        <p className="mt-6 text-yellow-300 leading-relaxed sm:text-lg">
          However, either party may seek court orders to protect intellectual property or
          confidential information.
        </p>

        <p className="mt-6 text-yellow-300 leading-relaxed sm:text-lg">
          These terms on dispute resolution remain effective even after termination of these Terms.
        </p>
      </div>
    </section>
  );
};

export default TermsDisputeResolution;
