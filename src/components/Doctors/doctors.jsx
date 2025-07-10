import React from 'react';
import doctorBg from './../../../images/WhatsApp Image 2025-07-03 at 19.58.04_4dec8c15.jpg'; // عدّل المسار حسب مكان صورة الخلفية



const doctors = [
  {
    name: "د/مي حسن محمد وهبة",
    title: "أخصائي تخاطب وتأهيل نفسي",
    front: [
      "حاصلة على بكالوريوس كلية علوم إعاقة وتأهيل قسم اضطراب التوحد",
      "عملت ب المركز الدولي بالمنصورة لمدة عام",
      "حاصلة على شهادة من مركز علوم إعاقة بالتكامل الحسي للأطفال ذوي اضطراب التوحد"
    ],
    back: [
      " 🔹البرنامج الشامل للتأهيل التخاطبي" ,
      "تقييم وتأهيل اضطرابات النطق والكلام" ,
      " تصميم برامج فردية مثل البورتاج والإيبلز" ,
      "    مركز وشبمسيك - 10/12/2024" ,
      "🔹أخصائي اضطراب التوحد",
      "  دورة 30 ساعة - بتقدير ممتاز",
      "  جامعة الزقازيق 9/2022",
      "🔹أخصائي تخاطب (تمهيدي)",
      "  دورة 30 ساعة - بتقدير ممتاز",
      "  جامعة الزقازيق 11/2023",



    
    ],
    image: "../../../images/WhatsApp Image 2025-07-03 at 20.46.23_17608943.jpg"
  },
  {
    name: "د/دنيا أحمد رمضان",
    title: "أخصائي تخاطب وتعديل سلوك الأطفال والتربية الخاصة",
    front: [
      "حاصلة على بكالوريوس كلية علوم إعاقة وتأهيل قسم الاعاقة العقلية",
      "عملت بمركز كيدز للتخاطب وتأهيل الأطفال ومركز لا لا لاند",
      "حاصلة علي شهادة من مركز علوم اعاقة بالتكامل الحسي واختبار الذكاء استانفورد بينيه والتخاطب"
    ],
    back: [
      "🔹 أخصائي التخاطب",
      "🔹 تقييم وعلاج التوحد (VB-MAPP,Apraxia)",
      "🔹 اختبار الذكاء (ستانفورد بينيه)",
      "🔹  (البورتاج , الإيبلز)خبرة في تصميم البرامج الفردية",
      "🔹إشراف وتطبيق عملي علي خطط التدخل والتأهيل",
      "🔹  جهات الاعتماد: جامعة الزقازيق - مركز وشبمسيك للتأهيل"
    ],
    image: "../../../images/WhatsApp Image 2025-07-03 at 20.54.27_ff4be85d.jpg"
  }
];

export default function Team() {
  return (
    <div className="min-h-screen bg-cover bg-center p-6 font-Cairo" dir='rtl' style={{ backgroundImage: `url(${doctorBg})` }}>
      <h2 className="text-center text-white text-3xl font-bold mb-8">الفريق الطبي</h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        {doctors.map((doc, index) => (
          <div key={index} className="group w-80 h-[420px] [perspective:1000px]">
            <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

              {/* Front Side */}
              <div className="absolute inset-0 bg-white rounded-xl shadow-lg p-4 text-right [backface-visibility:hidden]">
                <img src={doc.image} alt="doctor" className="w-20 h-20 mx-auto rounded-full mb-4 object-cover" />
                <h3 className="text-lg font-bold text-center text-primary-100">{doc.name}</h3>
                <p className="text-lg text-center text-gray-600 mb-2 border-b border-gray-900 pb-1">{doc.title}</p>
                <ul className="text-base list-disc pr-4 space-y-1">
                  {doc.front.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              </div>

              {/* Back Side */}
              <div className="absolute inset-0 bg-white rounded-xl shadow-lg p-4 text-right [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <h4 className="text-lg font-bold text-blue-600 mb-2">📌 الشهادات المعتمدة:</h4>
                <ul className="text-lg space-y-1">
                  {doc.back.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <a
  href="https://wa.me/201234567890"
  target="_blank"
  rel="noopener noreferrer"
  className=" text-right  gap-2 text-green-600 font-bold mt-4"
>
💬 تواصل معنا على واتساب</a>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}