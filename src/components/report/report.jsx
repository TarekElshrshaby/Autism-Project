import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Toaster, toast } from 'react-hot-toast';
import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Autismlogo from "../../../images/gradLogo1.png";



const MyChildren = () => {
  const navigate = useNavigate();
  const [children, setChildren] = useState(null);
  const [loading, setLoading] = useState(true);
  const [categoryPercentages, setCategoryPercentages] = useState({});
  const [categoryScore, setCategoryScore] = useState(null);
  const [error, setError] = useState(null);
  const reportRef = useRef();

  const downloadPDF = async () => {
    const input = reportRef.current;
    if (!input) return;

    const canvas = await html2canvas(input, { scale: 1 });
    const imgData = canvas.toDataURL('image/jpeg', 0.6); // تقليل الجودة

    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('تقرير.pdf');

    const blob = pdf.output('blob');
    const formData = new FormData();
    formData.append('report', blob, 'report.pdf');

    const token = localStorage.getItem('token');
    const childId = localStorage.getItem('child_id');

    try {
      const response = await fetch(`https://graduation-project-production-6390.up.railway.app/api/child/${childId}/report`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        toast.success('تم رفع التقرير بنجاح ✅');
        navigate('/'); // أو '/home' حسب مسار الهوم عندك
      } else {
        toast.error(`فشل في رفع التقرير ❌: ${result.msg || 'خطأ غير معروف'}`);
      }
    } catch (error) {
      console.error('خطأ في الرفع:', error);
      toast.error('حدث خطأ في الاتصال بالسيرفر');
    }
  };

  const childImageWithUUID = localStorage.getItem("child_image");
  const imageName = childImageWithUUID ? childImageWithUUID.split('-').slice(-1)[0] : '';

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError('No token found. Please log in.');
      setLoading(false);
      return;
    }

    const childId = localStorage.getItem("child_id");

    const fetchChildren = async () => {
      try {
        const response = await fetch(`https://graduation-project-production-6390.up.railway.app/api/child/mychildren/${childId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          const raw = await response.text();
          throw new Error("Non-JSON response: " + raw.slice(0, 300));
        }

        const result = await response.json();
        setChildren(result.data);
        console.log(result);
        
      } catch (error) {
        console.error('Error fetching children:', error.message);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    const fetchCategoryScore = async () => {
      try {
        const response = await fetch(`https://graduation-project-production-6390.up.railway.app/api/child/mycategory-score/${childId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        const result = await response.json();
        const percentage1 = (result.data[0].category_score / 18 || 1) * 100;
        const percentage2 = (result.data[1].category_score / 18 || 1) * 100;
        const percentage3 = (result.data[2].category_score / 21 || 1) * 100;
        const percentage4 = (result.data[3].category_score / 21 || 1) * 100;
        const percentage5 = (result.data[4].category_score / 18 || 1) * 100;

        

        setCategoryPercentages({
          1: percentage1,
          2: percentage2,
          3: percentage3,
          4: percentage4,
          5: percentage5,
        });

        setCategoryScore(result.data);
      } catch (error) {
        console.error('Error fetching category score:', error.message);
      }
    };

    fetchChildren();
    fetchCategoryScore();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
      </div>
    );
  }  if (error) return <p>Error: {error}</p>;

  return (
    <div className="bg-[#f9fbff] min-h-screen text-[#1a1a1a] py-6 px-4 font-Cairo" dir="rtl" >
      
      <div ref={reportRef} className="max-w-2xl mx-auto bg-white p-6 rounded-2xl border border-primary-50 shadow-md text-right">
        <div className="border-b pb-4 mb-4 flex items-center justify-between">
          <img src={Autismlogo} alt="Logo" className="w-16 h-16 object-contain bg-primary-50" />
          <h1 className="text-3xl font-bold text-primary-100">نتائج الاختبار</h1>
          <h2 className="text-lg font-semibold text-[#000000]">14 يوليو 2025</h2>
        </div>

        <div className="mb-6">
          <p className="text-base font-bold text-gray-600 mt-1">
            يتم إنشاء النتيجة المقدمة هنا بواسطة أداة فحص الذكاء الاصطناعي بناءً على اختبار سلوكي يمكنه تحديد سمات التوحد وليس تشخيصًا.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="font-bold text-lg text-gray-800 mb-2">إجابات الأسئلة</h3>
          <ul className="space-y-2">
            <li className="border-b py-2 border-gray-500 font-semibold">اسم الطفل : <span className='text-primary-100'>{children[0].name}</span></li>
            <li className="border-b py-2 border-gray-500 font-semibold">السن : <span className='text-primary-100'>{children[0].age}</span></li>
            <li className="border-b py-2 border-gray-500 font-semibold">النوع : <span className='text-primary-100'>{children[0].gender}</span></li>
            <li className="border-b py-2 border-gray-500 flex items-center gap-2 font-semibold">
              <span>الصورة :</span>
              <img className="w-12 h-12 object-contain" src={`../../../images/${imageName}`} alt="Child Image" />
            </li>
            <li className="border-b py-2 border-gray-500 font-semibold">السلوكيات التكرارية أو المقيدة: <span className='text-primary-100'>%{categoryPercentages[1]?.toFixed(2)}</span></li>
            <li className="border-b py-2 border-gray-500 font-semibold">التفاعل الاجتماعي: <span className='text-primary-100'>%{categoryPercentages[2]?.toFixed(1)}</span></li>
            <li className="border-b py-2 border-gray-500 font-semibold">التواصل اللفظي والغير لفظي: <span className='text-primary-100'>%{categoryPercentages[3]?.toFixed(1)}</span></li>
            <li className="border-b py-2 border-gray-500 font-semibold">العناية بالذات: <span className='text-primary-100'>%{categoryPercentages[4]?.toFixed(1)}</span></li>
            <li className="border-b py-2 border-gray-500 font-semibold">الانتباه: <span className='text-primary-100'>%{categoryPercentages[5]?.toFixed(1)}</span></li>
          </ul>
        </div>

        <div className=" text-base font-bold   border-b pb-4  border-gray-500">
          بعد تحليل الصورة و إجابات اسئلة المؤشرات السلوكية باستخدام الذكاء الاصطناعي توصلنا الى ان طفلك <span className='text-primary-100'>{children[0].final_diagnosis}</span> بالتوحد  بنسبة {" "}

          <span className='text-primary-100'>
           %{(Number(children[0].final_diagnosis_score) * 100).toFixed(0)}
          </span>
        </div>
        <div className=" text-base font-bold border-b py-4 border-gray-500">
          يقدم موقع اكتشف التوحد الارشادات والدعم لمساعدة الاطفال الذين يعانون من امراض التوحد <a href="/support" className='text-primary-100'>هنا</a>
          <br />
        لمعرفة المزيد عن مرض التوحد اضغط <a href="/chatbot" className='text-primary-100'>هنا</a>
        </div>

        <div className="  text-base font-bold py-4">
          <strong className='text-primary-100 mb-0 pb-0 '> للعلم : </strong>
          <br />
          <span className='text-gray-600'>
           اكتشف التوحد هو موقع يهدف لاكتشاف أعراض التوحد مبكرًا و لكن تشخيصه ليس مسلم به يفضل التأكد من متخصص.
           </span>
        </div>
      </div>

      <button onClick={downloadPDF} className="mt-4 mx-auto flex justify-content-center bg-primary-100 hover:bg-primary-50 text-white px-4 py-2 rounded">
        حمل الملف
      </button>
    </div>
  );
};

export default MyChildren;


