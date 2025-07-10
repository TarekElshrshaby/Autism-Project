import { useContext, useState } from 'react';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import axios from 'axios';
import toast from 'react-hot-toast';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/User.context';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import imagelogin from "../../../images/imagelogin.jpg";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const passwordRegex = /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

export default function Login() {
  const { setToken } = useContext(UserContext);
  const [inCorrectEmailorPass, setIncorrectEmailorPass] = useState();
  const [accountExistError, setAccountExistError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const validationSchema = object({
    email: string().required("البريد الإلكتروني مطلوب").email("البريد الإلكتروني غير صحيح"),
    password: string().required("كلمة المرور مطلوبة").matches(passwordRegex, "كلمة المرور يجب أن تحتوي على 8 أحرف على الأقل، حرف إنجليزي ، رقم واحد ورمز خاص"),
  });

  async function sendDataLogin(values) {
    const LodingToastId = toast.loading("Waiting...");
    try {
      const response = await axios.post("https://graduation-project-production-6390.up.railway.app/api/login", {
        email: values.email,
        password: values.password
      }, {
        headers: {
          "Content-Type": "application/json"
        }
      });
  
      const data = response.data;
      console.log(data);
  
      if (data.status === 201) {
        localStorage.setItem("token", data.data.token);
        setToken(data.data.token); // تخزين التوكن في الـ context
        toast.success(data.msg || "تم تسجيل الدخول بنجاح");
        setTimeout(() => {
          navigate("/");
        }, 1500);
      }
  
    } catch (error) {
      console.log("Full Error:", error.response);
      toast.error(error.response?.data?.message || "حدث خطأ غير متوقع");
      setIncorrectEmailorPass(error.response?.data?.message);
    } finally {
      toast.dismiss(LodingToastId);
    }
  }
  

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: sendDataLogin,
    validationSchema,
  });

  return (
    <>
      <Helmet>
        <title>Log In</title>
      </Helmet>
      <div dir="rtl" className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${imagelogin})` }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/100 to-transparent"></div>

        <div className="relative bg-white bg-opacity-90 rounded-lg shadow-lg p-8 w-full max-w-md">
          <h1 className="text-2xl font-bold text-center text-primary-100 mb-6">
            تسجيل الدخول
          </h1>

          <form className="space-y-4" onSubmit={formik.handleSubmit}>
            <div className="email">
              <input
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="email"
                placeholder="البريد الإلكتروني"
                className="w-full email px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {formik.errors.email && formik.touched.email && (
                <p className="text-red-700 mt-1 text-sm">*{formik.errors.email}</p>
              )}
              {accountExistError && (
                <p className="text-red-700 mt-1 text-sm">*{accountExistError}</p>
              )}
            </div>

            <div className="password relative flex flex-col">
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
                  <FontAwesomeIcon className="mx-auto" icon={showPassword ? faEyeSlash : faEye} />
                </span>
              </div>
              {formik.errors.password && formik.touched.password && (
                <p className="text-red-700 mt-1 text-sm">*{formik.errors.password}</p>
              )}
              {inCorrectEmailorPass && (
                <p className="text-red-700 mt-1 text-sm">*{inCorrectEmailorPass}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-primary-100 text-white py-2 rounded-lg hover:bg-primary-50 transition"
            >
              تسجيل الدخول
            </button>
          </form>
          <p className="text-center text-gray-500 mt-6">
            ليس لديك حساب ؟{" "}
            <NavLink to="/auth/signup" className="text-primary-50">
              إنشاء حساب
            </NavLink>
          </p>
        </div>
      </div>
    </>
  );
}
