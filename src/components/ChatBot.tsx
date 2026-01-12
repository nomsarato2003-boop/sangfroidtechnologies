"use client";

import { useState, useRef, useEffect, FormEvent } from "react";

type Message = {
  text: string;
  isUser: boolean;
  timestamp: Date;
};

const ChatBot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hello! I'm your Sangfroid Technologies assistant. How can I help you today?",
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

    // Simulate bot thinking delay
    setTimeout(() => {
      const botResponses = [
        "I understand you're asking about:",
        "That's a great question! Let me help you with that.",
        "Thanks for your inquiry. Here's what I can tell you:",
        "I'd be happy to assist you with that!"
      ];

      const botResponse: Message = {
        text: `${botResponses[Math.floor(Math.random() * botResponses.length)]} "${currentMessage}". This is a demo response - our team will provide detailed assistance shortly.`,
        isUser: false,
        timestamp: new Date()
      };

      setMessages((prev) => [...prev, botResponse]);
    }, 1000 + Math.random() * 1000);

    setMessages((prev) => [...prev, userMessage]);
    setCurrentMessage("");
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className={`fixed bottom-4 right-4 z-50 ${isChatOpen ? "w-80 sm:w-96" : "w-auto"}`}>
      {isChatOpen ? (
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-purple-200 max-h-[80vh] flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-orange-500 p-3 flex justify-between items-center flex-shrink-0">
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 p-2 rounded-full">
                <i className="fas fa-robot text-white text-sm" />
              </div>
              <div>
                <span className="text-white font-semibold block">Sangfroid Assistant</span>
                <span className="text-orange-200 text-xs">Online - Ready to help</span>
              </div>
            </div>
            <button
              onClick={() => setIsChatOpen(false)}
              className="text-white hover:text-orange-200 transition-all duration-200 transform hover:rotate-90 p-2"
            >
              <i className="fas fa-times text-lg" />
            </button>
          </div>

          {/* Chat Messages */}
          <div
            ref={chatContainerRef}
            className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-purple-50 to-white min-h-[200px] max-h-[50vh]"
          >
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isUser ? "justify-end" : "justify-start"} group`}
              >
                <div className={`flex flex-col max-w-[85%] ${message.isUser ? "items-end" : "items-start"}`}>
                  {/* Message Bubble */}
                  <div
                    className={`relative p-4 rounded-2xl shadow-sm ${message.isUser
                        ? "bg-gradient-to-br from-purple-600 to-orange-500 text-white rounded-br-md"
                        : "bg-white text-purple-800 border border-purple-100 rounded-bl-md shadow-md"
                      }`}
                  >
                    {/* Tail for message bubble */}
                    <div className={`absolute bottom-0 w-3 h-3 ${message.isUser
                        ? "right-0 transform translate-x-1 bg-orange-500 rotate-45"
                        : "left-0 transform -translate-x-1 bg-white border-l border-b border-purple-100 rotate-45"
                      }`} />

                    <p className="text-sm leading-relaxed relative z-10">{message.text}</p>
                  </div>

                  {/* Timestamp */}
                  <div className={`flex items-center space-x-1 mt-2 px-1 ${message.isUser ? "text-purple-600" : "text-purple-500"
                    }`}>
                    <i className="fas fa-clock text-xs opacity-70" />
                    <span className="text-xs font-medium opacity-80">
                      {formatTime(message.timestamp)}
                    </span>
                    {message.isUser && (
                      <i className="fas fa-check text-xs opacity-70 ml-1" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Input Form */}
          <form onSubmit={handleSendMessage} className="border-t border-purple-200 bg-white p-3 flex-shrink-0">
            <div className="flex space-x-3">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  placeholder="Type your message here..."
                  className="w-full px-4 py-3 border border-purple-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-purple-900 placeholder-purple-400 text-sm bg-purple-50/50"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-400">
                  <i className="fas fa-edit text-sm" />
                </div>
              </div>
              <button
                type="submit"
                disabled={!currentMessage.trim()}
                className="bg-gradient-to-r from-purple-600 to-orange-500 text-white px-5 py-3 rounded-xl hover:from-purple-700 hover:to-orange-600 transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-50 disabled:transform-none disabled:hover:shadow-none disabled:cursor-not-allowed"
              >
                <i className="fas fa-paper-plane" />
              </button>
            </div>
            <p className="text-xs text-purple-500 text-center mt-3">
              Typically replies in a few seconds
            </p>
          </form>
        </div>
      ) : (
        <button
          onClick={() => setIsChatOpen(true)}
          className="group bg-gradient-to-r from-purple-600 to-orange-500 text-white p-5 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-110"
        >
          <div className="relative">
            <i className="fas fa-comments text-xl" />
          </div>
        </button>
      )}
    </div>
  );
};

export default ChatBot;
