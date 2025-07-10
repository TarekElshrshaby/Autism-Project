import { useState } from "react";
import { useNavigate } from 'react-router-dom';

// داخل الكومبوننت

import Homeimage from "../../../images/WhatsApp Image 2025-01-25 at 13.22.04_e0929797.jpg";
import Homeimage2 from "../../../images/14affe6f20e99cfc1e1b1145274d45ce.jpeg";
import Homeimage3 from "../../../images/WhatsApp Image 2025-01-25 at 13.22.05_1c6f7bde.jpg";
import Homeimage4 from "../../../images/WhatsApp Image 2025-01-25 at 13.22.05_a50091bf.jpg";
import Homeimage5 from "../../../images/WhatsApp Image 2025-01-25 at 23.10.36_30c9ff55.jpg";
import Homeimage6 from "../../../images/homeimage5.jpeg";
import team2 from "../../../images/Team2.jpg"
import team3 from "../../../images/Team3.jpg"
import team4 from "../../../images/Team4.jpg"
import team5 from "../../../images/Team5.jpg"
import team6 from "../../../images/Team6.jpg"
import team7 from "../../../images/Team7.jpg"
import team8 from "../../../images/Team8.jpg"
import team9 from "../../../images/Team9.jpg"
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react'; // استيراد Swiper و SwiperSlide من الحزمة



export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();


  return (
    <>

      {/* section 1 */}

      <div className="relative w-full h-screen font-Cairo">
  {/* الصورة الخلفية */}
  <div className="w-full h-full bg-no-repeat bg-fixed transform scale-x-[-1] object-cover">
    <Swiper
      loop={true}
      slidesPerView={1}
      autoplay={true}
      className="absolute inset-0 w-full h-full"
    >
      {[{ id: 1, image: Homeimage }, { id: 2, image: Homeimage2 }, { id: 3, image: Homeimage3 }].map(
        (slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
          </SwiperSlide>
        )
      )}
    </Swiper>
  </div>

  {/* التدرج */}
  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/100 to-transparent"></div>

  {/* النص */}
  <div className="absolute bottom-8 right-4 sm:right-8 md:right-16 text-white text-right space-y-2 max-w-[90%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[50%] px-4 sm:px-8">
    <p className="text-xl sm:text-2xl pb-48 sm:pb-0  md:text-3xl lg:text-4xl font-semibold leading-relaxed">
      التوحد هو اضطراب معقد يؤثر على 
      كيفية تفاعل الشخص وفهمه للعالم 
      من حوله يظهر عادة في السنوات الأولى 
      من العمر ويمكن أن يتفاوت في شدته
    </p>
  </div>

  {/* Chatbot */}
  <div
      className="absolute bottom-2 left-4 sm:left-8 md:left-16 w-72 sm:w-80 h-52 sm:h-52 bg-white shadow-2xl shadow-gray-900 rounded-lg cursor-pointer transition-transform duration-500 hover:scale-105"
      onClick={() => navigate('/chatbot')}
    >
      {/* Header */}
      <div className="bg-blue-500 text-white p-3 rounded-t-lg flex items-center space-x-2">
        <h3 className="font-bold text-sm sm:text-lg">Chatbot</h3>
      </div>

      {/* Messages */}
      <div className="p-4 space-y-2 sm:space-y-5">
        <p className="bg-blue-100 text-blue-900 px-3 py-2 rounded-lg text-xs sm:text-sm">
          👋 أهلا
        </p>
        <p className="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-xs sm:text-sm">
          هذا البوت هنا لمساعدتك في أي تساؤل لديك.
        </p>
       
      </div>
    </div>

 
</div>


     
      {/* section 2  */}

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6 font-Cairo">
  {/* البطاقة الرئيسية */}
  <div className="rounded-md p-6 max-w-4xl w-full border border-gray-400 border-opacity-15 flex flex-col md:flex-row items-center">
    {/* الصورة */}
    <div className="w-72 flex justify-center overflow-hidden mb-6 md:mb-0 md:mr-8">
      <img
        src={Homeimage5}
        alt="طفل يلعب"
        className="rounded-lg shadow-md w-full max-w-full"
      />
    </div>

    {/* النص */}
    <div className="w-full md:w-1/2 text-right">
      <ul className="space-y-4 text-gray-800">
        <li className="flex items-start">
          <p className="text-lg sm:text-xl leading-relaxed font-bold w-full mr-2">
            يمكن اكتشاف سمات <br />
            التوحد في مرحلة الطفولة <br />
            المبكرة، ولكنه لا يُشخص <br />
            في الغالب إلا بعد هذه <br />
            المرحلة بفترة طويلة
          </p>
          <span className="font-bold text-2xl">•</span>
        </li>
        <li className="flex items-start">
          <p className="text-lg sm:text-xl leading-relaxed font-bold w-full mr-2">
            من الضروري أن تكون الرعاية <br />
            التي تستهدف المصابين بالتوحد <br />
            مصحوبة بإجراءات اجتماعية <br />
            ومجتمعية لمزيد من التيسير <br />
            والشمول والدعم
          </p>
          <span className="font-bold text-2xl">•</span>
        </li>
      </ul>
    </div>
  </div>

  {/* الأزرار */}
  <div className="flex flex-col md:flex-row justify-center mt-8 space-y-4 md:space-y-0 md:space-x-4">
    <button  className="bg-primary-100 text-white w-60 font-bold py-2 px-6 rounded-lg hover:bg-primary-50 transition duration-300">
      <a href="/chatbot">اذهب إلى الدعم مباشر </a>
    </button>
    <button className="bg-primary-100 text-white w-60 font-bold py-2 px-6 rounded-lg hover:bg-primary-50 transition duration-300">
      <a href="/diagnostic">التشخيص</a>
    </button>
  </div>
</div>

      <div className="min-h-screen w-full  flex flex-col font-Cairo ">
     
      {/* section 3  */}
      <section className="relative flex items-center justify-center w-full h-screen font-Cairo">
  <div className="relative w-full h-full rounded-lg shadow-md cursor-pointer group">
    <img
      src={Homeimage3}
      alt="Blur Effect"
      className="w-full h-full absolute inset-0 bg-no-repeat object-cover transition-all duration-500 group-hover:blur-md"
    />
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-4 sm:p-8">
      <h3 className="text-lg sm:text-xl md:text-2xl w-full max-w-screen-lg mx-auto text-center md:text-end leading-relaxed font-light">
        <span className="text-2xl sm:text-3xl font-bold inline-block mb-6">
          ما هي مظاهر التوحد عند الأطفال؟
        </span>
        <br />
        تجلى التوحد بطرق مختلفة، وبالمثل، يحدث ذلك عند الأطفال الصغار <br />
        فيما يلي بعض الأمثلة على هذه الاختلافات<br />
        الطفل المصاب بالتوحد الذي يمتنع عن التفاعل<br />
        يفضل الأطفال المصابون بالتوحد اللعب بمفردهم، ويرجع ذلك جزئيا إلى<br />
        رغبتهم في عزل أنفسهم عن العديد من المحفزات الموجودة في البيئة<br />
        الاجتماعية، في كثير من الأحيان، يفضل هذا الطفل أن يلعب لعبته الخاصة<br />
        : على سبيل المثال، سيقوم هذا الطفل بالآتي<br />
        - يلعب بمفرده في الزاوية، بينما يلعب الأطفال الآخرون معا <br />
        - لا يبدي رد فعل عندما يوجه شخص ما الكلام إليه <br />
        - يركز على أدوات اللعب أكثر من التفاعل <br />
        - يبدي اهتماماً ضئيلاً بلعب أي شخص آخر بينما يركز على اهتماماته الشخصية <br />
        - يفضل مشاهدة الآخرين أثناء اللعب على المشاركة <br />
      </h3>
    </div>
  </div>
</section>


      {/* Section 4*/}
  
      {/* section 4  */}
{/* <section className="bg-gray-50 rounded-lg shadow-md p-10 w-full  flex flex-col items-end font-Cairo px-20 ">
        <h2 className="text-3xl font-bold mb-10">: ما نسعى لتقديمه في هذا الموقع</h2>
        <div className="">
          <div className="flex items-center w-full">
           
            <p className="text-2xl w-full text-end leading-relaxed mr-8 "> وضع الطفل ووالديه على أول طريق اكتشاف المرض في ظل غياب<br/>الكشف المبكر عن الحالات المشابهة</p>
            <img
              src={Homeimage3} // ضع رابط الصورة الأولى هنا
              alt="Child and parent"
              className="w-32 h-32 ml-5 rounded-full mb-4"
            />
          </div>
          <div className="flex items-center ">
           
            <p className="text-2xl w-full text-end leading-relaxed mr-8"> توفير سبل لتسهيل عملية تعليم الطفل والتواصل معه حتي يستطيع<br/>أن يبني حياة طبيعية مثل باقي الأطفال دراسيا واجتماعيا</p>
            <img
              src={Homeimage2} // ضع رابط الصورة الثانية هنا
              alt="Education"
              className="w-32 h-32 ml-5 rounded-full mb-4"
            />
          </div>
          <div className="flex items-center ">
           
            <p className="text-2xl w-full text-end leading-relaxed mr-8 "> الإجابة على أسئلة الأهل عن كيفية التعامل مع مظاهر التوحد<br/>
            خصوصا في السنين الأولي من عمرهم ومع غياب الوعي الكافي</p>
            <img
              src={Homeimage4} // ضع رابط الصورة الثالثة هنا
              alt="Support"
              className="w-32 h-32 ml-5 rounded-full mb-4"
            />
          </div>
        </div>
      </section> */}
      {/* section 4 */}
<section className="bg-gray-50 rounded-lg shadow-md p-10 w-full flex flex-col items-end font-Cairo px-6 sm:px-10 md:px-20">
  <h2 className="text-3xl font-bold mb-10 text-center md:text-right">
    : ما نسعى لتقديمه في هذا الموقع
  </h2>
  <div className="w-full space-y-8">
    {/* Item 1 */}
    <div className="flex flex-col md:flex-row items-center w-full">
      <p className="text-lg sm:text-2xl w-full text-center md:text-end leading-relaxed mr-0 md:mr-8">
        وضع الطفل ووالديه على أول طريق اكتشاف المرض في ظل غياب<br />
        الكشف المبكر عن الحالات المشابهة
      </p>
      <img
        src={Homeimage2} // ضع رابط الصورة الأولى هنا
        alt="Child and parent"
        className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mb-4 md:mb-0 md:ml-5"
      />
    </div>
    {/* Item 2 */}
    <div className="flex flex-col md:flex-row items-center w-full">
      <p className="text-lg sm:text-2xl w-full text-center md:text-end leading-relaxed mr-0 md:mr-8">
        توفير سبل لتسهيل عملية تعليم الطفل والتواصل معه حتى يستطيع<br />
        أن يبني حياة طبيعية مثل باقي الأطفال دراسياً واجتماعياً
      </p>
      <img
        src={Homeimage3} // ضع رابط الصورة الثانية هنا
        alt="Education"
        className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mb-4 md:mb-0 md:ml-5"
      />
    </div>
    {/* Item 3 */}
    <div className="flex flex-col md:flex-row items-center w-full">
      <p className="text-lg sm:text-2xl w-full text-center md:text-end leading-relaxed mr-0 md:mr-8">
        الإجابة على أسئلة الأهل عن كيفية التعامل مع مظاهر التوحد<br />
        خصوصاً في السنين الأولى من عمرهم ومع غياب الوعي الكافي
      </p>
      <img
        src={Homeimage4} // ضع رابط الصورة الثالثة هنا
        alt="Support"
        className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mb-4 md:mb-0 md:ml-5"
      />
    </div>
  </div>
</section>




<section className="relative w-full font-Cairo mb-10">
  <img
    src={Homeimage6}
    alt="Background"
    className="w-full h-full object-cover rounded-lg transform"
  />
  <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end items-center sm:items-end text-right text-white p-4 sm:p-6">
    <p className="text-sm sm:text-lg lg:text-4xl lg:pb-32  font-semibold leading-relaxed text-center sm:text-right px-4 sm:px-8">
      وفقا للتقارير الحديثة، تشير التقديرات إلى أن عدد الأطفال المصابين بطيف<br />
      التوحد فى مصر يتجاوز مليون طفل<br />، وذلك وفقا لما صرحت به وزارة التضامن
      الاجتماعى<br />. وقد أجريت دراسة قومية عل نطاق واسع تشمل عينات من 8
      محافظات تمثل مختلف المناطق الجغرافية لمصر متل القاهرة، الفيوم
      أسيوط، وأسوان، واستهدفت حوالى 41,639 طفلا تتراوح أعمارهم بين سنة
      و12 سنة لتقديم صورة دقيقة عن انتشار الاضطراب
    </p>
  </div>
</section>






      {/* Section 6 */}

      
      {/* <section className="relative w-full bg-gray-50 py-10">
  <h2 className="text-center text-3xl font-bold mb-10 text-black">الفريق وراء هذا المشروع</h2>
  <div className="w-full">
    <Swiper
      loop={true}
      spaceBetween={10}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      className="w-full"
      breakpoints={{
        640: { slidesPerView: 2 }, // For screens < 640px, show 2 slides
        768: { slidesPerView: 3 }, // For screens between 768px and 1024px, show 3 slides
        1024: { slidesPerView: 5 }, // For screens > 1024px, show 5 slides
      }}
    >
      {[
        { id: 1, image: team2 },
        { id: 2, image: team3 },
        { id: 3, image: team4 },
        { id: 4, image: team5 },
        { id: 5, image: team6 },
        { id: 6, image: team7 },
        { id: 7, image: team8 },
        { id: 8, image: team9 },
        { id: 9, image: team6 },
        { id: 10, image: team5 },
      ].map((member) => (
        <SwiperSlide key={member.id}>
          <div className="bg-white rounded-lg shadow-md">
            <img
              src={member.image}
              alt={`Team member ${member.id}`}
              className="w-full h-80 object-cover rounded-lg mb-4"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section> */}


      
    </div>
    </>
  );
}