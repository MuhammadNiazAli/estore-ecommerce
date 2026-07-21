import React, { useState, useEffect } from 'react'

const BestsellersNewsletter = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    setSuccess(false)

    if (!validateEmail(email)) {
      setError('Please enter a valid email address')
      return
    }

    setLoading(true)

    // Simulate async subscription API call (2 seconds)
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
      setEmail('')
    }, 2000)
  }

  // Auto clear success message after 5 seconds
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(false)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [success])

  return (
    <section className="bg-white rounded-xl max-w-3xl mx-auto p-8 sm:p-12 shadow-lg my-10 mb-[-100px]">
      <h2 className="text-amber-600 text-3xl font-extrabold mb-4 text-center select-none">
        Subscribe to Our Newsletter
      </h2>
      <p className="text-amber-500 mb-8 text-center max-w-xl mx-auto">
        Get the latest updates and exclusive offers delivered straight to your inbox.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row items-center gap-4 max-w-xl mx-auto"
        noValidate
      >
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            if (error) setError('')
            if (success) setSuccess(false)
          }}
          aria-label="Email address"
          className={`w-full px-5 py-3 rounded-full bg-amber-950 bg-opacity-20 text-amber-300 placeholder-amber-600
            focus:outline-none focus:ring-2 focus:ring-amber-600 transition-shadow duration-300
            ${
              error
                ? 'ring-2 ring-red-500 focus:ring-red-600'
                : 'ring-0'
            }`}
          disabled={loading}
        />
        <button
          type="submit"
          className={`w-full sm:w-auto px-8 py-3 bg-amber-600 hover:bg-amber-700 text-gray-900 font-semibold rounded-full shadow-md
            transition-colors duration-300 select-none flex justify-center items-center
            ${loading ? 'cursor-not-allowed opacity-70' : ''}`}
          disabled={loading}
          aria-live="polite"
        >
          {loading ? (
            <svg
              className="animate-spin h-5 w-5 text-gray-900"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
          ) : (
            'Subscribe'
          )}
        </button>
      </form>

      {error && (
        <p
          className="mt-4 text-center text-red-500 font-medium select-text"
          role="alert"
          aria-live="assertive"
        >
          {error}
        </p>
      )}

      {success && (
        <p
          className="mt-4 text-center text-amber-600 font-semibold select-text"
          role="status"
          aria-live="polite"
        >
          Thanks for subscribing!
        </p>
      )}
    </section>
  )
}

export default BestsellersNewsletter
