"use client";

import { useState, useRef, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
  text: string;
  isUser: boolean;
  timestamp: Date;
};

const ChatBot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hello! How can I help you today?",
      isUser: false,
      timestamp: new Date()
    },
  ]);
  const [currentMessage, setCurrentMessage] = useState("");
  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  const handleSendMessage = (e: FormEvent) => {
    e.preventDefault();
    if (!currentMessage.trim()) return;

    const userMessage: Message = {
      text: currentMessage,
      isUser: true,
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMessage]);
    setCurrentMessage("");

    setTimeout(() => {
      const botResponse: Message = {
        text: "Thanks for your message! This is a demo - our team will assist you shortly.",
        isUser: false,
        timestamp: new Date()
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.2 }}
            className="w-80 bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[70vh] mb-4"
          >
            {/* Header */}
            <div className="bg-purple-600 px-4 py-3 flex justify-between items-center flex-shrink-0">
              <div>
                <span className="text-white font-medium text-sm block">Sangfroid</span>
                <span className="text-purple-200 text-xs">Online</span>
              </div>
              <button
                onClick={() => setIsChatOpen(false)}
                className="text-white/70 hover:text-white transition-colors p-1"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div
              ref={chatContainerRef}
              className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50 min-h-[200px] max-h-[40vh]"
            >
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[80%] ${message.isUser ? "order-1" : ""}`}>
                    <div
                      className={`px-4 py-2 rounded-2xl text-sm ${
                        message.isUser
                          ? "bg-purple-600 text-white rounded-br-md"
                          : "bg-white text-gray-900 shadow-sm rounded-bl-md"
                      }`}
                    >
                      {message.text}
                    </div>
                    <div className={`text-xs text-gray-400 mt-1 ${message.isUser ? "text-right" : ""}`}>
                      {formatTime(message.timestamp)}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <form onSubmit={handleSendMessage} className="p-3 border-t border-gray-100 bg-white flex-shrink-0">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-2 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900"
                />
                <motion.button
                  type="submit"
                  disabled={!currentMessage.trim()}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsChatOpen(!isChatOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-purple-600 text-white p-4 rounded-full shadow-lg hover:bg-purple-700 transition-colors"
      >
        {isChatOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </motion.button>
    </div>
  );
};

export default ChatBot;
