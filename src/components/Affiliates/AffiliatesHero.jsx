"use client";
import React, { useState } from "react";
import { CheckCircle, AlertTriangle, Loader2 } from "lucide-react";

const AffiliatesHero = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [error, setError] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubscribe = async (e) => {
    e.preventDefault();

    // Reset states
    setError("");
    setStatus("loading");

    if (!email) {
      setStatus("error");
      setError("Please enter your email address.");
      return;
    }
    if (!emailRegex.test(email)) {
      setStatus("error");
      setError("Please enter a valid email address.");
      return;
    }

    // Simulate async API call
    await new Promise((res) => setTimeout(res, 1600));

    // Simulated response (fake backend logic)
    const fakeSuccess = Math.random() > 0.1; // 90% success
    if (fakeSuccess) {
      setStatus("success");
      setEmail("");
    } else {
      setStatus("error");
      setError("Something went wrong. Please try again later.");
    }
  };

  return (
    <section
      aria-label="Affiliate Program Hero Section"
      className="relative w-full px-4 py-10 sm:py-16 bg-gray-900 text-yellow-100 flex justify-center overflow-hidden my-[-100px] mb-0"
    >
      <div className="relative z-10 max-w-[960px] w-full text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4">
          Join Our Affiliate Program
        </h1>
        <p className="text-yellow-300 text-base sm:text-lg md:text-xl mb-8 max-w-xl mx-auto leading-relaxed opacity-90">
          Promote our products, earn high commissions, and grow with us. Quick setup, powerful tools, real results.
        </p>

        {status === "success" ? (
          <div className="text-green-400 font-semibold flex items-center justify-center gap-2 text-lg mb-6 animate-fade-in" role="alert">
            <CheckCircle size={22} />
            Thank you for subscribing! We’ll be in touch shortly.
          </div>
        ) : (
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-md mx-auto"
            noValidate
          >
            <label htmlFor="affiliateEmail" className="sr-only">
              Email address
            </label>
            <input
              id="affiliateEmail"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-invalid={error ? "true" : "false"}
              aria-describedby={error ? "emailError" : "emailHelp"}
              required
              disabled={status === "loading"}
              className={`w-full sm:flex-1 rounded-lg border bg-gray-800 border-yellow-600 text-yellow-100 placeholder-yellow-500
              px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition
              ${error ? "border-red-500 focus:ring-red-500" : ""}
              disabled:opacity-50`}
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 focus:bg-yellow-700
              text-gray-900 font-semibold px-6 py-3 rounded-lg shadow-lg flex items-center justify-center gap-2
              transition-all duration-200 disabled:cursor-not-allowed"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="animate-spin" size={18} />
                  Subscribing...
                </>
              ) : (
                "Subscribe"
              )}
            </button>
          </form>
        )}

        {status === "error" && (
          <p
            id="emailError"
            className="mt-3 text-red-500 text-sm font-medium flex items-center justify-center gap-1 animate-shake"
            role="alert"
          >
            <AlertTriangle size={16} /> {error}
          </p>
        )}

        <p
          id="emailHelp"
          className="mt-6 text-yellow-400 text-xs max-w-sm mx-auto opacity-70"
        >
          We respect your privacy. No spam — unsubscribe anytime.
        </p>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease forwards;
        }
        @keyframes shake {
          0% { transform: translateX(0); }
          25% { transform: translateX(-4px); }
          50% { transform: translateX(4px); }
          75% { transform: translateX(-4px); }
          100% { transform: translateX(0); }
        }
        .animate-shake {
          animation: shake 0.3s ease;
        }
      `}</style>
    </section>
  );
};

export default AffiliatesHero;
