import React, { useState } from 'react';
import backgroundImage from '../../../images/gradLogo2.png'; // عدّل حسب مسار الصورة

const ChatbotUI = () => {
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState([
    { type: 'bot', text: '👋 أهلاً' },
    { type: 'bot', text: 'هذا البوت هنا لمساعدتك في أي تساؤل لديك' }
  ]);
  const [loading, setLoading] = useState(false);

  const cleanText = (text) => {
    return text.replace(/<br\s*\/?>/g, '');
  };

  const sendMessage = async () => {
    if (!question.trim()) return;

    const token = localStorage.getItem('token');
    const userMessage = { type: 'user', text: question };
    setMessages(prev => [...prev, userMessage]);
    setQuestion('');
    setLoading(true);

    try {
      const res = await fetch('https://graduation-project-production-6390.up.railway.app/api/child/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ question })
      });

      const data = await res.json();
      const botReply = { type: 'bot', text: cleanText(data?.data || 'لم يتم العثور على رد.') };
      setMessages(prev => [...prev, botReply]);
    } catch (err) {
      setMessages(prev => [...prev, { type: 'bot', text: 'حدث خطأ في الاتصال بالخادم.' }]);
    }

    setLoading(false);
  };

  return (
    <div className="relative h-screen w-full overflow-x-hidden" dir="rtl">
      {/* الخلفية */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-cover z-0"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      {/* Overlay أسود شفاف فوق الخلفية */}
      <div className="absolute inset-0 bg-black opacity-20 z-0"></div> 

      {/* المحتوى */}
      <div className="relative z-10 flex flex-col h-full">
        {/* الرسائل */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex w-full ${
                msg.type === 'user' ? 'justify-start' : 'justify-end'
              }`}
            >
              <div
                className={`max-w-sm px-4 py-2 rounded-xl text-sm ${
                  msg.type === 'user' ? 'bg-blue-200 text-right' : 'bg-gray-50 text-right'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex w-full justify-end">
              <div className="max-w-xs px-4 py-2 rounded-xl bg-gray-100 text-sm animate-pulse">
                جاري الكتابة...
              </div>
            </div>
          )}
        </div>

        {/* إدخال الرسالة */}
        <div className="flex items-center p-4 border-t bg-white">
          <button
            onClick={sendMessage}
            className="ml-2 text-xl"
            disabled={loading}
          >
            ⮝
          </button>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="اكتب رسالتك"
            className="flex-1 border rounded-full px-4 py-2 text-sm focus:outline-none"
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatbotUI;
