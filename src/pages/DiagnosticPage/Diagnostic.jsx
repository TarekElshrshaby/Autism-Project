import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
import diagnosticbackground from "../../../images/WhatsApp Image 2025-04-30 at 20.52.41_85ae1b64.jpg";

function ChildForm() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('ذكر');
  const [image, setImage] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      toast.error("من فضلك أرسل صورة للطفل");
      return;
    }

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('birth_date', calculateBirthDate(age));
      formData.append('gender', gender);
      formData.append('image', image);

      const token = localStorage.getItem("token");
      const response = await axios.post('https://graduation-project-production-6390.up.railway.app/api/child/create', formData, {
        headers: {
          "Authorization": `Bearer ${token}`,
          'Accept': 'application/json',
          'Content-Type': 'multipart/form-data',
        },
      });

      localStorage.setItem("child_id", response.data.data.id);
      localStorage.setItem("child_name", response.data.data.name);
      localStorage.setItem("child_age", response.data.data.age);
      localStorage.setItem("child_image", response.data.data.image);
      localStorage.setItem("child_gender", response.data.data.gender);
      localStorage.setItem("child_total_questions", response.data.data.total_questions_score);
      localStorage.setItem("child_ml_result", response.data.data.ml_result);
      localStorage.setItem("child_final_diagnosis", response.data.data.final_diagnosis);

      toast.success(response.data.msg);
      setName('');
      setAge('');
      setGender('ذكر');
      setImage(null);

      setTimeout(() => {
        navigate('/CategoryOne');
        window.scrollTo({ top: 0, behavior: 'instant' }); 
      }, 1500);
    } catch (error) {
      toast.error('حدث خطأ أثناء الإرسال');
    }
  };

  const calculateBirthDate = (age) => {
    const today = new Date();
    const birthYear = today.getFullYear() - Number(age);
    return `${birthYear}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;
  };

  return (
    <div className="relative flex flex-col items-center min-h-screen bg-gray-50 font-Cairo py-10 px-10">
      <Toaster position="top-center" />
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${diagnosticbackground})`,
          opacity: 0.15,
        }}
      ></div>

      <div className="relative z-10 w-full max-w-3xl">
        <h1 className="text-4xl font-bold text-center text-primary-50 mb-3">التشخيص</h1>
        <p className="text-gray-600 mb-12 text-lg text-center">أجب على جميع الأسئلة لضمان دقة النتيجة</p>

        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6 bg-white p-6 rounded-lg shadow-md">

          {/* سن الطفل */}
          <div>
            <label className="block mb-2 font-bold text-right">سن الطفل</label>
            <div className="flex items-center gap-2">
              <span className="text-gray-700">سنة</span>
              <input
                type="number"
                min="1"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full border rounded p-2 text-right hover:border-blue-500 transition duration-200"
                required
              />
            </div>
          </div>

          {/* اسم الطفل */}
          <div>
            <label className="block mb-2 font-bold text-right">اسم الطفل</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded p-2 text-right hover:border-blue-500 transition duration-200"
              required
            />
          </div>

          {/* صورة الطفل */}
          <div className='flex flex-col items-end'>
            <label className="block mb-2 font-bold text-right">صورة الطفل</label>
            <label className="w-32 h-32 bg-gray-200 border border-gray-300 hover:border-blue-500 transition duration-200 flex justify-center items-center rounded cursor-pointer overflow-hidden relative">
              {image ? (
                <img
                  src={URL.createObjectURL(image)}
                  alt="معاينة"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex flex-col items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-600 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  <span className="text-sm text-gray-600">أضف هنا</span>
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
                className="hidden"
                required
              />
            </label>
          </div>

          {/* نوع الطفل */}
          <div>
            <label className="block mb-2 font-bold text-right">نوع الطفل</label>
            <div className="flex flex-col gap-2 items-end text-sm">
              <label className="flex items-center gap-2 p-2 border border-gray-300 rounded-md hover:border-blue-500 transition duration-200">
                <input
                  type="radio"
                  value="ذكر"
                  checked={gender === 'ذكر'}
                  onChange={(e) => setGender(e.target.value)}
                />
                <span>ذكر</span>
              </label>
              <label className="flex items-center gap-2 p-2 border border-gray-300 rounded-md hover:border-blue-500 transition duration-200">
                <input
                  type="radio"
                  value="أنثى"
                  checked={gender === 'أنثى'}
                  onChange={(e) => setGender(e.target.value)}
                />
                <span>أنثى</span>
              </label>
            </div>
          </div>

          {/* زر التالي */}
          <div className="col-span-2 flex justify-center mt-4">
            <button type="submit" className="bg-primary-100 hover:bg-primary-50 text-white py-2 px-12 rounded font-bold transition duration-300 text-lg">
              التالي
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ChildForm;

