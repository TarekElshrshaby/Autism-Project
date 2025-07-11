import { useState } from 'react';
import { useFormik } from 'formik';
import { object, ref, string } from 'yup';
import axios from 'axios';
import toast from 'react-hot-toast';
import { NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle, faApple } from "@fortawesome/free-brands-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import loginimage from "../../../images/imagelogin.jpg";
import { useUser } from '../../context/User.context';


const passwordRegex = /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

export default function Signup() {
  const { setUser } = useUser();

  const navigate = useNavigate();
  const [accountExistError, setAccountExistError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const validationSchema = object({
    name: string()
      .required("من فضلك أدخل الاسم")
      .min(3, "الاسم يجب أن يكون على الأقل 3 أحرف")
      .max(20, "الاسم لا يمكن أن يزيد عن 20 حرف"),
    email: string()
      .required("البريد الإلكتروني مطلوب")
      .email("البريد الإلكتروني غير صحيح"),
    password: string()
      .required("كلمة المرور مطلوبة")
      .matches(passwordRegex, "كلمة المرور يجب أن تحتوي على 8 أحرف على الأقل، حرف إنجليزي ، رقم واحد ورمز خاص"),
    password_confirmation: string()
      .oneOf([ref("password")], "كلمتا المرور غير متطابقتين")
      .required("تأكيد كلمة المرور مطلوب"),
  });

  async function sendDataRegisetr(values) {
    const LodingToastId = toast.loading("Waiting...");
    try {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("password", values.password);
      formData.append("password_confirmation", values.password_confirmation);
  
      const { data } = await axios.post(
        "https://graduation-project-production-6390.up.railway.app/api/register",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "Accept": "application/json",
          },
        }
      );
      localStorage.setItem("UserName", data.data.name);
      localStorage.setItem("UserEmail", data.data.email);
      setUser({
        name: data.data.name,
        email: data.data.email,
      });
      

      console.log("API Response:", data);
  
      if (data.status === 201) {
        toast.success(data.msg); // أو "تم التسجيل بنجاح"
        setTimeout(() => {
          navigate("/auth/login");
        }, 2000);
      }
  
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.msg || "حدث خطأ أثناء التسجيل");
      setAccountExistError(error.response?.data?.msg || "حدث خطأ أثناء التسجيل");
    } finally {
      toast.dismiss(LodingToastId);
    }
    
  }
  
  

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
    onSubmit: sendDataRegisetr,
    validationSchema,
  });

  return (
    <div dir="rtl" className="relative min-h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${loginimage})` }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/100 to-transparent"></div>

      <div className="relative bg-white bg-opacity-90 rounded-lg shadow-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-primary-100 mb-6">
          إنشاء حساب
        </h1>

        <form className="space-y-4" onSubmit={formik.handleSubmit}>
          {/* الاسم */}
          <div>
            <input
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="name"
              type="text"
              placeholder="الاسم بالكامل"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {formik.errors.name && formik.touched.name && (
              <p className="text-red-700 mt-1 text-sm">*{formik.errors.name}</p>
            )}
          </div>

          {/* البريد الإلكتروني */}
          <div>
            <input
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="email"
              placeholder="البريد الإلكتروني"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {formik.errors.email && formik.touched.email && (
              <p className="text-red-700 mt-1 text-sm">*{formik.errors.email}</p>
            )}
            {accountExistError && (
              <p className="text-red-700 mt-1 text-sm">*{accountExistError}</p>
            )}
          </div>

          {/* كلمة المرور */}
          <div className="relative">
            <input
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type={showPassword ? "text" : "password"}
              placeholder="كلمة المرور"
              className="w-full px-4 py-2 border rounded-lg text-right focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span
              className="absolute inset-y-0 left-4 flex items-center text-gray-400 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </span>
            {formik.errors.password && formik.touched.password && (
              <p className="text-red-700 mt-1 text-sm">*{formik.errors.password}</p>
            )}
          </div>

          {/* تأكيد كلمة المرور */}
          <div>
            <input
              name="password_confirmation"
              value={formik.values.password_confirmation}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="password"
              placeholder="تأكيد كلمة المرور"
              className="w-full px-4 py-2 border rounded-lg text-right focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {formik.errors.password_confirmation && formik.touched.password_confirmation && (
              <p className="text-red-700 mt-1 text-sm">*{formik.errors.password_confirmation}</p>
            )}
          </div>

          {/* زر التسجيل */}
          <button
            type="submit"
            className="w-full bg-primary-100 text-white py-2 rounded-lg hover:bg-primary-50 transition"
          >
            إنشاء حساب
          </button>
        </form>
    

        {/* لديك حساب بالفعل */}
        <p className="text-center text-gray-500 mt-6">
          لديك حساب بالفعل؟ <NavLink to="/auth/login" className="text-blue-500">تسجيل الدخول</NavLink>
        </p>
      </div>
    </div>
  );
}
