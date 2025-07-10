import { useState } from "react";

const ChildrenDetails = ({ onNext, formData, setFormData }) => {
  const [imagePreview, setImagePreview] = useState(formData.image || "");

  const handleChange = (e) => {
    const { id, value, type, files } = e.target;
    if (type === "file") {
      const file = files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result);
          setFormData({ ...formData, [id]: reader.result });
        };
        reader.readAsDataURL(file);
      }
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-6 shadow-lg rounded-lg w-[700px] relative">
        <h1 className="text-xl font-bold text-center text-blue-500">التشخيص</h1>
        <p className="text-center text-gray-600 mb-4">أجب على جميع الأسئلة لضمان دقة النتيجة</p>

        <div className="grid grid-cols-2 gap-6">
          {/* اسم الطفل */}
          <div>
            <label className="block text-gray-700">اسم الطفل:</label>
            <input
              id="name"
              type="text"
              value={formData.name || ""}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
              {/* نوع الطفل */}
              <div>
              <label className="block text-gray-700">نوع الطفل:</label>
              <div className="flex gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  id="gender"
                  value="ذكر"
                  checked={formData.gender === "ذكر"}
                  onChange={handleChange}
                />
                <span className="ml-2">ذكر</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  id="gender"
                  value="أنثى"
                  checked={formData.gender === "أنثى"}
                  onChange={handleChange}
                />
                <span className="ml-2">أنثى</span>
              </label>
            </div>
          </div>

                   {/* سن الطفل */}
          <div>
            <label className="block text-gray-700">سن الطفل:</label>
            <select
              id="age"
              value={formData.age || ""}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              > 
              <option value="">اختر</option>
            {[...Array(18).keys()].map((i) => (
              <option key={i + 1} value={i + 1}>{i + 1} سنة</option>
            ))}
          </select>
          </div>
         {/* صورة الطفل */}
        <div>
          <label className="block text-gray-700">صورة الطفل:</label>
          <input
            id="image"
            type="file"
            accept="image/*"
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            {imagePreview && (
              <img
                src={imagePreview}
                alt="صورة الطفل"
                className="mt-2 w-32 h-32 object-cover rounded-md shadow"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChildrenDetails;