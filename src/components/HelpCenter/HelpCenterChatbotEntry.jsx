'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  MessageCircle,
  X,
  List,
  ChevronLeft,
  Copy,
} from 'lucide-react';

const predefinedQuestions = [
  'How do I track my order?',
  'What payment methods do you accept?',
  'How do I start a return?',
  'Can I change my shipping address?',
  'How do I reset my password?',
  'What is your refund policy?',
];

const ChatMessage = ({ from, text }) => (
  <div
    className={`max-w-[80%] p-3 rounded-lg ${
      from === 'bot'
        ? 'bg-yellow-400 text-black self-start rounded-bl-none'
        : 'bg-gray-700 text-white self-end rounded-br-none'
    } break-words`}
    aria-live="polite"
    role="article"
  >
    {text}
  </div>
);

const HelpCenterChatbotEntry = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! How can I assist you today?' },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, sidebarOpen]);

  const simulateBotReply = (question) => {
    setIsTyping(true);

    const answers = {
      'How do I track my order?':
        'You can track your order by logging into your account and visiting "My Orders".',
      'What payment methods do you accept?':
        'We accept credit cards, debit cards, PayPal, and other popular payment options.',
      'How do I start a return?':
        'To start a return, go to "My Orders", select the order, and click "Start Return".',
      'Can I change my shipping address?':
        'You can change your shipping address before the order ships by updating it in your account.',
      'How do I reset my password?':
        'Click on "Forgot Password" at login and follow the instructions to reset your password.',
      'What is your refund policy?':
        'Refunds are processed within 5-7 business days after we receive the returned item.',
    };

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { from: 'bot', text: answers[question] || "I'm sorry, I don't have an answer for that." },
      ]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages((prev) => [...prev, { from: 'user', text: userMessage }]);
    setInput('');
    simulateBotReply(userMessage);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleQuestionClick = (question) => {
    setMessages((prev) => [...prev, { from: 'user', text: question }]);
    simulateBotReply(question);
    setSidebarOpen(false);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-5 right-5 z-[9999] flex items-center space-x-2">
        <button
          onClick={() => {
            setIsOpen((prev) => !prev);
            if (sidebarOpen) setSidebarOpen(false);
          }}
          className="bg-yellow-400 hover:bg-yellow-300 text-black w-12 h-12 flex items-center justify-center rounded-full shadow-lg transition duration-300 focus:outline-none focus:ring-4 focus:ring-yellow-400"
          aria-label={isOpen ? 'Close Chat' : 'Open Chat'}
          title={isOpen ? 'Close Chat' : 'Open Chat'}
        >
          {isOpen ? <X size={20} /> : <MessageCircle size={20} />}
        </button>
      </div>

      {/* Chat Panel */}
      {isOpen && (
        <section
          className={`fixed bottom-16 right-5 z-[9998] flex flex-col bg-gray-900 border border-yellow-400 rounded-xl shadow-2xl
            h-[400px]
            max-w-full
            overflow-hidden
            ${sidebarOpen ? 'w-[600px] sm:w-[600px]' : 'w-[320px] sm:w-[320px]'}
            transition-width duration-300 ease-in-out
          `}
          role="dialog"
          aria-modal="true"
          aria-label="Help Center Chatbot"
        >
          {/* Header */}
          <header className="flex items-center justify-between p-3 border-b border-yellow-400">
            <h2 className="text-yellow-300 font-semibold text-lg select-none">
              Need Help?
            </h2>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSidebarOpen((prev) => !prev)}
                aria-expanded={sidebarOpen}
                aria-controls="chatbot-sidebar"
                aria-label={`${sidebarOpen ? 'Close' : 'Open'} questions sidebar`}
                className="p-2 rounded-md hover:bg-yellow-400 hover:text-black transition focus:outline-none focus:ring-2 focus:ring-yellow-400"
                title={`${sidebarOpen ? 'Close' : 'Open'} questions sidebar`}
              >
                <List size={20} />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
                className="p-2 rounded-md hover:bg-yellow-400 hover:text-black transition focus:outline-none focus:ring-2 focus:ring-yellow-400"
                title="Close chat"
              >
                <X size={20} />
              </button>
            </div>
          </header>

          <div className="flex flex-1 overflow-hidden relative">
            {/* Chat messages area */}
            <main
              className={`flex-1 flex flex-col overflow-y-auto p-4 gap-3 scrollbar-thin scrollbar-thumb-yellow-400 scrollbar-track-gray-700 transition-all duration-300
                ${sidebarOpen ? 'pr-[280px]' : 'pr-4'}
              `}
            >
              {messages.map((msg, i) => (
                <ChatMessage key={i} from={msg.from} text={msg.text} />
              ))}
              {isTyping && (
                <div className="self-start bg-yellow-400 rounded-bl-none rounded-lg px-3 py-2 animate-pulse text-black max-w-[60%]">
                  Bot is typing...
                </div>
              )}
              <div ref={chatEndRef} />
            </main>

            {/* Sidebar drawer */}
            <aside
              id="chatbot-sidebar"
              className={`absolute top-0 right-0 bottom-0 w-[280px] bg-gray-800 border-l border-yellow-400 rounded-tl-xl rounded-bl-xl shadow-xl
              flex flex-col p-4
              transform transition-transform duration-300 ease-in-out
              ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'}
              `}
              aria-hidden={!sidebarOpen}
            >
              <h3 className="text-yellow-400 font-semibold mb-4 text-lg select-none">
                Frequently Asked Questions
              </h3>
              <ul className="flex flex-col gap-3 overflow-y-auto scrollbar-thin scrollbar-thumb-yellow-400 scrollbar-track-gray-700">
                {predefinedQuestions.map((q, i) => (
                  <li key={i}>
                    <button
                      onClick={() => handleQuestionClick(q)}
                      className="w-full text-left bg-gray-700 hover:bg-yellow-400 hover:text-black rounded-md px-3 py-2 transition flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      aria-label={`Ask chatbot: ${q}`}
                      type="button"
                    >
                      <Copy size={16} />
                      {q}
                    </button>
                  </li>
                ))}
              </ul>
            </aside>
          </div>

          {/* Input & Send */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 border-t border-yellow-400 flex gap-2"
          >
            <textarea
              rows={1}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your question..."
              className="resize-none flex-grow bg-gray-800 text-white placeholder-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              aria-label="Type your question"
              maxLength={300}
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="bg-yellow-400 hover:bg-yellow-300 text-black px-4 py-2 rounded-md font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-yellow-400"
              aria-label="Send message"
            >
              Send
            </button>
          </form>
        </section>
      )}

      <style jsx>{`
        section[role='dialog'] {
          width: 320px;
        }
        @media (min-width: 640px) {
          section[role='dialog'] {
            width: 320px;
          }
        }
        section[role='dialog'].w-[600px] {
          width: 600px;
        }
        /* Transition-width polyfill */
        .transition-width {
          transition-property: width;
          transition-duration: 0.3s;
          transition-timing-function: ease-in-out;
        }
      `}</style>
    </>
  );
};

export default HelpCenterChatbotEntry;
