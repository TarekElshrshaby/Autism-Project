import React, { useState } from "react";
import emailjs from "emailjs-com";

function Opinion() {
  const [feedback, setFeedback] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSending(true);

    
    const templateParams = {
      message: feedback,
      from_name: "مستخدم الموقع"
    };
    
    console.log("Template Params:", templateParams);
    
    emailjs.send(
      "service_knofnng",             // ← Service ID
      "template_ad2oodh",            // ← Template ID
      templateParams,
      "qGeGywA7NTabUfS1N"           // ← Public Key
    )
    .then(
      (response) => {
        console.log("Success:", response);
        alert("تم إرسال رأيك بنجاح!");
        setFeedback("");
        setSending(false);
      },
      (error) => {
        console.log("Error:", error);
        alert("حدث خطأ أثناء الإرسال. تأكد من الاتصال أو إعدادات EmailJS.");
        setSending(false);
      }
    );
    
    console.log("Template Params:", templateParams);

  };


  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 font-Cairo">
      <div className="bg-gray-50 p-6 rounded-lg shadow-lg w-2/3">
        <h2 className="text-3xl font-semibold text-center mb-2">
          تريد مشاركتنا برأيك؟
        </h2>
        <p className="text-gray-500 text-center mb-4">
          نسعى دائمًا لتحسين خدماتنا من أجل مساعدة الأطفال وعائلاتهم وزيادة
          الوعي بالظاهرة
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            dir="rtl"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows="4"
            placeholder="اكتب رأيك هنا..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
          ></textarea>
          <button
            type="submit"
            disabled={sending}
            className="w-full bg-blue-400 text-white py-2 rounded-lg hover:bg-blue-500 transition"
          >
            {sending ? "جاري الإرسال..." : "إرسال"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Opinion;
