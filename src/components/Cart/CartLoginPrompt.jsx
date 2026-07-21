'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF, FaApple, FaUserCircle, FaSpinner, FaTimes } from 'react-icons/fa';

const loginProviders = [
  { id: 'google', name: 'Google', icon: <FcGoogle className="w-6 h-6" /> },
  { id: 'facebook', name: 'Facebook', icon: <FaFacebookF className="w-6 h-6 text-black" /> },
  { id: 'apple', name: 'Apple', icon: <FaApple className="w-6 h-6" /> },
];

const CartLoginPrompt = ({ onLogin, onContinueAsGuest }) => {
  const [showModal, setShowModal] = useState(false);
  const [loadingProvider, setLoadingProvider] = useState(null);
  const [loadingGuest, setLoadingGuest] = useState(false);
  const [loggedInProvider, setLoggedInProvider] = useState(null);
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);
  const modalRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    if (showModal) {
      setTimeout(() => headingRef.current?.focus(), 100);
    }
  }, [showModal]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        if (!loadingProvider) setShowModal(false);
      }
    };
    if (showModal) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [showModal, loadingProvider]);

  const handleProviderLogin = async (providerId) => {
    setLoadingProvider(providerId);
    try {
      await new Promise((res) => setTimeout(res, 1500));
      setLoggedInProvider(providerId);
      setShowSuccessMsg(true);
      setTimeout(() => {
        setShowModal(false);
        setShowSuccessMsg(false);
      }, 2000);
      if (onLogin) await onLogin(providerId);
    } catch {
      // Handle login error here if needed
    } finally {
      setLoadingProvider(null);
    }
  };

  const handleContinueGuest = async () => {
    setLoadingGuest(true);
    try {
      await new Promise((res) => setTimeout(res, 1500));
      if (onContinueAsGuest) await onContinueAsGuest();
    } finally {
      setLoadingGuest(false);
    }
  };

  return (
    <section
      className="w-full bg-white flex flex-col items-center justify-center px-4 sm:px-6 py-16 text-gray-900 min-h-[350px]"
      role="region"
      aria-label="Login and guest options"
    >
      <div className="max-w-md w-full flex flex-col sm:flex-row gap-4">
        {!loggedInProvider ? (
          <>
            <button
              onClick={() => setShowModal(true)}
              type="button"
              aria-haspopup="dialog"
              aria-expanded={showModal}
              className="flex-grow bg-black hover:bg-black text-gray-900 font-semibold px-6 py-3 rounded-full shadow-lg transition focus:outline-none focus:ring-4 focus:ring-black focus:ring-opacity-60"
            >
              Log In
            </button>
            <button
              onClick={handleContinueGuest}
              disabled={loadingGuest}
              type="button"
              aria-label="Continue as guest without logging in"
              aria-busy={loadingGuest}
              className="flex-grow border border-black text-black hover:bg-black hover:text-gray-900 font-semibold px-6 py-3 rounded-full transition disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-black focus:ring-opacity-40"
            >
              {loadingGuest ? <Spinner /> : 'Continue as Guest'}
            </button>
          </>
        ) : (
          <Link
            href="/profile"
            aria-label="Go to your profile page"
            className="flex items-center justify-center gap-3 bg-black text-gray-900 font-semibold px-6 py-3 rounded-full shadow-lg transition hover:bg-black focus:outline-none focus:ring-4 focus:ring-black focus:ring-opacity-60 w-full"
          >
            <FaUserCircle className="w-6 h-6" />
            Your Profile
          </Link>
        )}
      </div>

      {showModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="login-modal-title"
          tabIndex={-1}
          className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-70 px-4"
        >
          <div
            ref={modalRef}
            className="bg-white rounded-lg max-w-md w-full p-6 relative shadow-xl"
          >
            <h3
              id="login-modal-title"
              ref={headingRef}
              tabIndex={-1}
              className="text-xl font-semibold text-black mb-6"
            >
              Choose a login method
            </h3>
            <button
              onClick={() => !loadingProvider && setShowModal(false)}
              aria-label="Close login options"
              className="absolute top-4 right-4 text-black hover:text-black focus:outline-none"
            >
              <FaTimes className="w-6 h-6" />
            </button>

            {showSuccessMsg && (
              <div
                role="status"
                aria-live="polite"
                className="bg-black bg-opacity-80 px-4 py-3 rounded text-black font-semibold mb-4 text-center"
              >
                Successfully logged in with{' '}
                {loginProviders.find((p) => p.id === loggedInProvider)?.name}!
              </div>
            )}

            {!showSuccessMsg && (
              <div className="flex flex-col gap-4">
                {loginProviders.map(({ id, name, icon }) => (
                  <button
                    key={id}
                    onClick={() => handleProviderLogin(id)}
                    type="button"
                    disabled={loadingProvider !== null}
                    aria-busy={loadingProvider === id}
                    className="flex items-center gap-3 justify-center rounded-full px-5 py-3 font-semibold shadow-lg transition disabled:opacity-60 disabled:cursor-not-allowed bg-white hover:bg-gray-500 focus:outline-none focus:ring-4 focus:ring-black focus:ring-opacity-50"
                  >
                    {loadingProvider === id ? (
                      <Spinner />
                    ) : (
                      <>
                        <span className="text-lg">{icon}</span>
                        <span>Continue with {name}</span>
                      </>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

const Spinner = () => (
  <FaSpinner
    className="animate-spin text-black w-5 h-5 mx-auto"
    aria-hidden="true"
  />
);

export default CartLoginPrompt;
