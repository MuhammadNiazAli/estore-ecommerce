'use client';

import React, { useState, useRef, useEffect } from 'react';
import { FiCopy, FiChevronLeft } from 'react-icons/fi';

// 20+ professional predefined questions
const predefinedQuestions = [
  "Who is Mr. Niaz Ali?",
  "What technologies does Mr. Niaz Ali use?",
  "Is Mr. Niaz Ali a front-end or full-stack developer?",
  "Where is Mr. Niaz Ali from?",
  "How experienced is Mr. Niaz Ali?",
  "Can I hire Mr. Niaz Ali for freelance work?",
  "What projects has Mr. Niaz Ali worked on?",
  "How can I contact Mr. Niaz Ali?",
  "Is Mr. Niaz Ali active on GitHub?",
  "What makes this website special?",
  "Who designed the UI of this website?",
  "Is the codebase of this site custom-built?",
  "Is Mr. Niaz Ali good with responsive design?",
  "What’s the tech stack of this website?",
  "Does Mr. Niaz Ali know Next.js?",
  "What is Mr. Niaz Ali's role in this project?",
  "Does Mr. Niaz Ali write backend code too?",
  "How fast does Mr. Niaz Ali respond to client needs?",
  "Has Mr. Niaz Ali worked with animations?",
  "Is Mr. Niaz Ali an expert in Tailwind CSS?",
  "Does Mr. Niaz Ali contribute to open-source?",
];

// Detailed professional answers keyed by keywords for matching
const answers = {
  "niaz": "Mr. Niaz Ali is a highly skilled full-stack developer known for creating premium, professional, and responsive websites with modern design principles.",
  "technolog": "Mr. Niaz Ali uses React, Next.js, Tailwind CSS, Framer Motion, Three.js, MongoDB, Node.js, and more cutting-edge technologies.",
  "front": "He is a full-stack developer, with strong expertise in both front-end and back-end engineering.",
  "from": "He is based in Pakistan and serves global clients with passion and professionalism.",
  "experienc": "He has several years of hands-on experience in commercial projects and advanced eCommerce platforms.",
  "freelance": "Yes, Mr. Niaz Ali is open to freelance opportunities, depending on availability and project scope.",
  "project": "His portfolio includes eCommerce platforms, interactive user interfaces, 3D visualizations, and complex web applications.",
  "contact": "You can reach Mr. Niaz Ali via LinkedIn, GitHub, or his portfolio website. Details are available in the footer of this site.",
  "github": "Yes, Mr. Niaz Ali is very active on GitHub, regularly sharing clean, structured, and documented code.",
  "special": "This website is fully custom-coded with advanced UI/UX, optimized for performance and scalability.",
  "ui": "Mr. Niaz Ali personally designed this UI using Figma and custom CSS frameworks such as Tailwind CSS.",
  "custom": "Absolutely. Every part of this website is built from scratch by Mr. Niaz Ali using modern frameworks and best practices.",
  "responsive": "Yes, he ensures every layout works perfectly on all devices — mobile, tablet, laptop, and desktop.",
  "stack": "The tech stack includes Next.js, React, Tailwind CSS, Node.js, MongoDB, Framer Motion, and more.",
  "next": "Yes! This site is built with Next.js 15, leveraging SSR, the App Router, and edge functions.",
  "role": "Mr. Niaz Ali is the sole designer and developer of this website — from concept to deployment.",
  "backend": "He writes scalable backend code using Express, MongoDB, Firebase, and related technologies.",
  "respond": "Mr. Niaz Ali is known for quick turnaround times and clear communication with clients.",
  "animation": "Yes! He uses Framer Motion, GSAP, and CSS animations to create engaging interactive experiences.",
  "tailwind": "He is an expert in Tailwind CSS and follows utility-first, scalable design principles.",
  "source": "He actively contributes to open-source projects and maintains personal frontend libraries.",
};

// Helper function to generate unique IDs for messages
function generateUniqueId() {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

const LiveChatSupport = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: generateUniqueId(),
      sender: 'ai',
      text: "Hello! I'm your ecommerce assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [currentTypingText, setCurrentTypingText] = useState('');
  const typingIntervalRef = useRef(null);
  const messagesEndRef = useRef(null);

  // Scroll to bottom on messages update, but not while typing word by word to avoid jumpiness
  useEffect(() => {
    if (!typing) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, typing]);

  // Toggle main chat window
  const toggleChat = () => {
    setIsOpen(prev => !prev);
    setShowSidebar(false);
  };

  // Toggle sidebar with predefined questions
  const toggleSidebar = () => setShowSidebar(prev => !prev);

  // Function to start typing effect word-by-word
  const startTypingEffect = (fullText) => {
    setTyping(true);
    setCurrentTypingText('');
    const words = fullText.split(' ');
    let index = 0;

    return new Promise((resolve) => {
      typingIntervalRef.current = setInterval(() => {
        if (index >= words.length) {
          clearInterval(typingIntervalRef.current);
          setTyping(false);
          setCurrentTypingText('');
          resolve();
          return;
        }
        setCurrentTypingText((prev) => (prev ? prev + ' ' : '') + words[index]);
        index++;
      }, 200); // 200ms delay per word, adjust speed as needed
    });
  };

  // Send user message and start AI typing
  const handleSend = async () => {
    if (!input.trim()) return;

    // Add user message
    const userMsg = {
      id: generateUniqueId(),
      sender: 'user',
      text: input.trim(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    // Get AI response text
    const aiResponseText = generateAIResponse(userMsg.text);

    // Start word-by-word typing effect
    await startTypingEffect(aiResponseText);

    // After typing done, add AI message to messages
    setMessages((prev) => [
      ...prev,
      {
        id: generateUniqueId(),
        sender: 'ai',
        text: aiResponseText,
      },
    ]);
  };

  // Generate AI response by keyword matching
  const generateAIResponse = (text) => {
    const lower = text.toLowerCase();
    for (let key in answers) {
      if (lower.includes(key)) return answers[key];
    }
    return "I'm here to assist you with anything you need regarding our store or Mr. Niaz Ali's expertise.";
  };

  // Enter key sends message
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // When user clicks a predefined question: insert question in input and close sidebar
  const handleQuestionClick = (q) => {
    setInput(q);
    setShowSidebar(false);
  };

  return (
    <>
      {/* Toggle chat button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-4 right-4 bg-amber-800 text-gray-900 px-4 py-2 rounded-full z-50 shadow-lg"
      >
        {isOpen ? 'Close Chat' : 'Chat with Us'}
      </button>

      {/* Background overlay when chat is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-white/40 backdrop-blur-sm z-40"
          onClick={toggleChat}
        />
      )}

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 left-4 sm:left-auto sm:right-4 sm:w-full max-w-md bg-white text-sm text-black flex flex-col shadow-2xl rounded-xl overflow-hidden z-50 h-[80vh] sm:h-[70vh]">
          {/* Header */}
          <div className="flex justify-between items-center p-4 bg-amber-800 text-gray-900">
            <span>Live Support</span>
            <button onClick={toggleChat} className="text-2xl" aria-label="Close chat">
              &times;
            </button>
          </div>

          {/* Chat body */}
          <div className="relative flex-1 flex overflow-hidden">
            {/* Messages area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`max-w-[80%] p-2 rounded-lg break-words ${
                    m.sender === 'ai'
                      ? 'bg-amber-300 text-black self-start'
                      : 'bg-amber-800 text-gray-900 self-end'
                  }`}
                >
                  {m.text}
                </div>
              ))}

              {/* Typing animation area */}
              {typing && (
                <div className="bg-amber-300 text-black self-start p-2 px-3 rounded-lg w-fit whitespace-pre-wrap">
                  {currentTypingText || <span className="animate-pulse">Typing...</span>}
                </div>
              )}

              {/* Anchor for auto-scroll */}
              <div ref={messagesEndRef} />
            </div>

            {/* Sidebar with predefined questions */}
            {showSidebar && (
              <div className="absolute right-0 top-0 bottom-0 w-64 bg-gray-100 border-l border-gray-300 p-4 space-y-3 overflow-y-auto z-50">
                <h3 className="font-semibold mb-2 text-black">You can ask me:</h3>
                {predefinedQuestions.map((q) => (
                  <div
                    key={q}
                    className="flex justify-between items-center bg-white p-2 rounded-lg shadow-sm"
                  >
                    <span className="text-xs text-gray-800 line-clamp-2">{q}</span>
                    <button
                      onClick={() => handleQuestionClick(q)}
                      className="text-amber-800 hover:text-amber-900"
                      aria-label="Copy question"
                    >
                      <FiCopy className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Input area */}
          <div className="p-4 border-t border-gray-200 flex items-center gap-2">
            <button
              onClick={toggleSidebar}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Toggle question sidebar"
            >
              <FiChevronLeft
                className={`w-6 h-6 transition-transform ${showSidebar ? 'rotate-180' : ''}`}
              />
            </button>
            <textarea
              rows={1}
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 resize-none border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-700 text-black"
            />
            <button
              onClick={handleSend}
              className="bg-amber-800 text-gray-900 px-4 py-2 rounded-md hover:bg-amber-900"
              aria-label="Send message"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default LiveChatSupport;
