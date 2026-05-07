// src/pages/AIAssistant.jsx
import { useState, useRef, useEffect } from 'react';
import { chatBotResponses } from '../data/dummyData';

export default function AIAssistant() {
  const [messages, setMessages] = useState([{ text: chatBotResponses.default, sender: 'bot' }]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const endRef = useRef(null);

  const scrollToBottom = () => endRef.current?.scrollIntoView({ behavior: 'smooth' });
  useEffect(scrollToBottom, [messages, isTyping]);

  const handleSend = async (e) => {
    e?.preventDefault();
    if (!input.trim()) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { text: userMsg, sender: 'user' }]);
    setInput('');
    setIsTyping(true);

    // Dummy logic to pick a response based on keywords
    let botResponse = chatBotResponses.default;
    const lower = userMsg.toLowerCase();
    if (lower.includes('study') || lower.includes('plan')) botResponse = chatBotResponses.study;
    else if (lower.includes('dsa') || lower.includes('algorithm')) botResponse = chatBotResponses.dsa;
    else if (lower.includes('ml') || lower.includes('machine learning')) botResponse = chatBotResponses.ml;
    else if (lower.includes('resume') || lower.includes('cv')) botResponse = chatBotResponses.resume;

    // Simulate network delay
    await new Promise(r => setTimeout(r, 1200));
    setIsTyping(false);
    setMessages(prev => [...prev, { text: botResponse, sender: 'bot' }]);
  };

  return (
    <div className="edu-card overflow-hidden" style={{ height: 'calc(100vh - 110px)', display: 'flex', flexDirection: 'column' }}>
      <div className="p-3 border-bottom border-custom d-flex align-items-center gap-3" style={{ background: 'var(--surface-2)' }}>
        <div style={{ width: 40, height: 40, borderRadius: 10, background: 'linear-gradient(135deg, #4361ee, #4cc9f0)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <i className="bi bi-robot text-white fs-5" />
        </div>
        <div>
          <h6 style={{ margin: 0, fontWeight: 700 }}>EduBot AI</h6>
          <span style={{ fontSize: 12, color: '#06d6a0', fontWeight: 600 }}><i className="bi bi-circle-fill me-1" style={{ fontSize: 8 }} />Online</span>
        </div>
      </div>

      <div className="chat-messages" style={{ flex: 1, overflowY: 'auto', padding: '20px' }}>
        {messages.map((msg, i) => (
          <div key={i} className={`chat-bubble ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
        {isTyping && (
          <div className="chat-bubble bot" style={{ width: 60, display: 'flex', justifyContent: 'center', gap: 4 }}>
            <span className="spinner-grow spinner-grow-sm" style={{ width: 6, height: 6 }} />
            <span className="spinner-grow spinner-grow-sm" style={{ width: 6, height: 6, animationDelay: '0.2s' }} />
            <span className="spinner-grow spinner-grow-sm" style={{ width: 6, height: 6, animationDelay: '0.4s' }} />
          </div>
        )}
        <div ref={endRef} />
      </div>

      <div className="chat-input-bar bg-surface">
        <form onSubmit={handleSend} className="w-100 d-flex gap-2">
          <input
            type="text"
            className="form-control"
            style={{ borderRadius: 99, padding: '10px 20px', background: 'var(--surface-2)', border: '1px solid var(--border)', color: 'var(--text)' }}
            placeholder="Ask me anything about your studies..."
            value={input}
            onChange={e => setInput(e.target.value)}
          />
          <button type="submit" className="btn-primary-custom" style={{ borderRadius: '50%', width: 44, height: 44, padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <i className="bi bi-send-fill" />
          </button>
        </form>
      </div>
    </div>
  );
}
