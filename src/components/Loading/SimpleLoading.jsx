'use client';

import React from 'react';

export default function ExperienceLoading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gray-900">
      <div className="spinner">
        <span>L</span>
        <span>O</span>
        <span>A</span>
        <span>D</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
      </div>

      <style jsx>{`
        .spinner {
          height: 50px;
          width: max-content;
          font-size: 18px;
          font-weight: 600;
          font-family: monospace;
          letter-spacing: 1em;
          color: #FFD700; /* Yellowish-Golden */
          filter: drop-shadow(0 0 10px #FFD700);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .spinner span {
          animation: loading6454 1.75s ease infinite;
        }

        .spinner span:nth-child(2) {
          animation-delay: 0.25s;
        }

        .spinner span:nth-child(3) {
          animation-delay: 0.5s;
        }

        .spinner span:nth-child(4) {
          animation-delay: 0.75s;
        }

        .spinner span:nth-child(5) {
          animation-delay: 1s;
        }

        .spinner span:nth-child(6) {
          animation-delay: 1.25s;
        }

        .spinner span:nth-child(7) {
          animation-delay: 1.5s;
        }

        @keyframes loading6454 {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-10px);
          }
        }

        @media (max-width: 640px) {
          .spinner {
            font-size: 16px;
            letter-spacing: 0.5em;
          }
        }
      `}</style>
    </div>
  );
}
