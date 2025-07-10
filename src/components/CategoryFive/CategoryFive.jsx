import { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import diagnosticbackground from "../../../images/WhatsApp Image 2025-04-30 at 20.52.41_85ae1b64.jpg";

const answerOptions = [
  { answer: 'نعم', value: 3 },
  { answer: 'احيانا', value: 2 },
  { answer: 'نادرا', value: 1 },
  { answer: 'لا', value: 0 },
];

const questions = [
  { id: 1, question: " هل تلاحظ أن الطفل لا يستطيع التنقل ببصره بين شيئين مثل(النظر إلي لعبة ثم النظر إلي لعبة آخري)؟" },
  { id: 2, question: "هل تلاحظ أن الطفل لا يستطيع التنقل ببصره بين شخص وشيء مثل(النظر إلي شخص ثم النظر إلي لعبة)؟" },
  { id: 3, question: " هل تلاحظ أن الطفل لا يستطيع التنقل ببصره بين شخص وشيئين مثل( النظر إلي لعبة ثم النظر إلي شخص ثم النظر إلي اللعبة مره آخري)؟  "},
  { id: 4, question: "هل تلاحظ أن الطفل لا يستطيع النظر في عينيك أثناء حديثك معه إلا ثواني معدوده؟" },
  { id: 5, question: "هل تلاحظ أنه إذا حدث أي شيء بسيط قد يخرج الطفل من تركيزه ويصيبه بتشتت الانتباه مثلا (إذا كان يكتب، فيترك القلم)؟" },
  { id: 6, question: "هل تلاحظ أن الطفل غير منتبه للأشياء المحيطة به مثال( قد يكون جائعا والطعام بجانبه، لكنه غير مدرك لذلك)؟" },
];

function CategoryFive() {
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleAnswerChange = (questionId, selectedAnswer) => {
    const answerData = answerOptions.find((opt) => opt.answer === selectedAnswer);
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answerData.value,
    }));
  };

  const handleSubmit = async () => {
    const unanswered = questions.some((q) => answers[q.id] === undefined);
    if (unanswered) {
      toast.error('.رجاءً أجب على جميع الأسئلة قبل الانتقال');
      return;
    }
  
    const token = localStorage.getItem("token");
    if (!token) {
      alert('لا يوجد رمز توثيق، الرجاء تسجيل الدخول.');
      navigate('/login');
      return;
    }
    const childId = localStorage.getItem("child_id");

  
    const payload = {
      child_id: childId,
      category_id: 5,
      answers: questions.map((q) => ({
        value: answers[q.id],
      })),
    };
  
    // ✅ اطبع البيانات هنا
    console.log("🚀 البيانات المرسلة للباك:", payload);
  
    try {
      setLoading(true);
      await axios.post(
        'https://graduation-project-production-6390.up.railway.app/api/child/category-score',
        payload,
        {
          headers: {
            "Authorization": `Bearer ${token}`,
            "Accept": "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      toast.success('تم إرسال الإجابات بنجاح!');
      setTimeout(() => {
        navigate('/report');
        window.scrollTo({ top: 0, behavior: 'instant' }); 
      }, 1500);
    } catch (error) {
      console.error(error.response?.data || error.message);
      if (error.response?.status === 401) {
        alert('انتهت صلاحية الجلسة، الرجاء تسجيل الدخول مجددًا.');
        navigate('/login');
      } else {
        toast.error('حدث خطأ أثناء إرسال الإجابات.');
      }
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="relative min-h-screen font-Cairo text-end">
      {/* الخلفية */}
      <div
        className="absolute inset-0 bg-cover bg-center -z-10"
        style={{
          backgroundImage: `url(${diagnosticbackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15,
        }}
      ></div>

      {/* المحتوى */}
      <div className="max-w-4xl mx-auto py-10 px-10">
        <h2 className="text-4xl font-bold text-center text-primary-50 mb-12">
        الانتباه 
        </h2>

        <div className="space-y-8 text-end">
          {questions.map((q) => (
            <div key={q.id} className="p-6 border rounded-lg shadow-lg bg-white">
              <p className="mb-4 font-semibold text-lg">{q.question}</p>
              <div className="flex flex-col gap-3 text-end">
                {answerOptions.map((opt) => (
                  <label
                    key={opt.value}
                    className="flex justify-end items-center border border-gray-300 rounded-md px-4 py-3 w-full cursor-pointer hover:bg-gray-50 text-end"
                  >
                    <span className="text-gray-700">{opt.answer}</span>

                    <input
                      type="radio"
                      name={`question-${q.id}`}
                      value={opt.answer}
                      checked={answers[q.id] === opt.value}
                      onChange={() => handleAnswerChange(q.id, opt.answer)}
                      className="ml-2"
                    />
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>


        <div className="flex justify-between gap-4 mt-8">
  {/* زر السابق */}
  <button
    onClick={() => navigate('/categoryfour')}
    className="w-1/2 bg-primary-100 hover:bg-primary-50 text-white font-bold py-3 rounded-lg transition duration-300"
  >
    السابق
  </button>

  {/* زر التالي */}
  <button
    onClick={handleSubmit}
    disabled={loading}
    className="w-1/2 bg-primary-100 hover:bg-primary-50 text-white font-bold py-3 rounded-lg transition duration-300"
  >
    التالي
  </button>
</div>

      </div>
    </div>
  );
}



export default CategoryFive
