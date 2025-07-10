// import { Link, NavLink } from "react-router-dom"
// import { useContext, useEffect, useState } from "react"
// import { UserContext } from "../../context/User.context"
// import Autismlogo from "../../../images/gradLogo1.png"
// import userphoto from "../../../images/WhatsApp Image 2025-01-25 at 17.44.42_295452d3.jpg"
// import { useUser } from '../../context/User.context';


// export default function Navbar() {
//   const { token, Logout } = useContext(UserContext);
  

//   const { user } = useUser();
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [sidebarType, setSidebarType] = useState(""); 
 

  
 

//   const toggleSidebar = (type) => {
//     setSidebarType(type); 
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <>
//       <nav className="bg-primary-50 shadow-sm font-Cairo z-50">
//         <div className="container flex justify-between gap-12 items-center px-4">
//         <div className="flex gap-4">
//         <button 
//             className="lg:hidden mr-auto text-white text-2xl"
//             onClick={() => toggleSidebar("menu")}
//           >
//             <i className="fa-solid fa-bars"></i> 
//           </button>
//         <ul className="flex  items-center gap-5">
//             {token && (
//               <>
//                 <li onClick={() => toggleSidebar("user")}>
//                   <div>
//                     <img
//                       src={userphoto}
//                       alt="Profile"
//                       className="cursor-pointer"
//                       style={{
//                         width: '40px',
//                         height: '40px',
//                         borderRadius: '50%',
//                       }}
//                     />
//                   </div>
//                 </li>
//               </>
//             )}
//             {/* {!token && (
//               <>
//                 <li>
//                   <NavLink className="transition-colors duration-300 text-white" to="/auth/login">
//                     تسجيل الدخول
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink className="rounded-md text-white" to="/auth/signup">
//                     إنشاء حساب
//                   </NavLink>
//                 </li>
//               </>
//             )} */}
//           </ul>
         
//           </div>
  
//           {/* قائمة الروابط الرئيسية في الشريط العلوي */}
//           <ul className="lg:flex hidden items-center gap-5">
//   {token && (
//     <>
//      <li>
//         <NavLink 
//           className={({ isActive }) => {
//             return `relative text-black before:absolute before:w-0 before:h-0.5 before:bg-black hover:before:w-full before:transition-width before:duration-300 before:left-0 before:-bottom-1 ${isActive ? "before:!w-full font-semibold" : ""}`;
//           }} 
//           to="/doctor"
//         >
//           تواصل مع متخصص
//         </NavLink>
//       </li>
//       {/* <li> */}
//         {/* <NavLink 
//           className={({ isActive }) => {
//             return `relative text-black before:absolute before:w-0 before:h-0.5 before:bg-black hover:before:w-full before:transition-width before:duration-300 before:left-0 before:-bottom-1 ${isActive ? "before:!w-full font-semibold" : ""}`;
//           }} 
//           to="/team"
//         >
//           معلومات عن الفريق
//         </NavLink> */}
//       {/* </li> */}
//       <li>
//         <NavLink 
//           className={({ isActive }) => {
//             return `relative text-black before:absolute before:w-0 before:h-0.5 before:bg-black hover:before:w-full before:transition-width before:duration-300 before:left-0 before:-bottom-1 ${isActive ? "before:!w-full font-semibold" : ""}`;
//           }} 
//           to="/statistics"
//         >
//           احصائيات
//         </NavLink>
//       </li>
//       <li>
//         <NavLink 
//           className={({ isActive }) => {
//             return `relative text-black before:absolute before:w-0 before:h-0.5 before:bg-black hover:before:w-full before:transition-width before:duration-300 before:left-0 before:-bottom-1 ${isActive ? "before:!w-full font-semibold" : ""}`;
//           }} 
//           to="/diagnostic"
//         >
//           التشخيص
//         </NavLink>
//       </li>
//       <li>
//         <NavLink 
//           className={({ isActive }) => {
//             return `relative text-black before:absolute before:w-0 before:h-0.5 before:bg-black hover:before:w-full before:transition-width before:duration-300 before:left-0 before:-bottom-1 ${isActive ? "before:!w-full font-semibold" : ""}`;
//           }} 
//           to="/support"
//         >
//           الدعم
//         </NavLink>
//       </li>
//       <li>
//         <NavLink 
//           className={({ isActive }) => {
//             return `relative text-black before:absolute before:w-0 before:h-0.5 before:bg-black hover:before:w-full before:transition-width before:duration-300 before:left-0 before:-bottom-1 ${isActive ? "before:!w-full font-semibold" : ""}`;
//           }} 
//           to="/"
//         >
//           الرئيسية
//         </NavLink>
//       </li>
//     </>
//   )}
//           </ul>

  
          
  
//           {/* إضافة أيقونة Menu لفتح الشريط الجانبي مع خيارات أخرى */}
         
  
//           <a href="/">
//             <img src={Autismlogo} className="w-14" alt="Freach Cart logo" />
//           </a>
  
//           {/* الشريط الجانبي */}
//           <div
//             className={`fixed inset-0 z-40 transition-all duration-300 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
//           >
//             <div className="w-64 bg-white h-full p-4">
//               <button 
//                 className="absolute top-4 left-4 text-xl text-black"
//                 onClick={() => setIsSidebarOpen(false)} // إغلاق الشريط الجانبي
//               >
//                 <i className="fa-solid fa-times"></i> {/* أيقونة الإغلاق */}
//               </button>
  
//               <ul className="space-y-4 mt-9">
//                 {/* محتوى الشريط الجانبي عند الضغط على صورة المستخدم */}
//                 {sidebarType === "user" && token && (
//                   <>
                    
//                     <div className=" bg-white h-full ">
//                       {/* بيانات المستخدم */}
//                       <div className="flex items-center space-x-3">
//                         <img
//                           src={userphoto}
//                           alt="User"
//                           className="w-10 h-10 rounded-full"
//                         />
//                         <div>
//                           <h2 className="text-gray-900 font-semibold">{user.name}</h2>
//                           <p className="text-sm text-gray-500">{user.email}</p>
//                         </div>
//                       </div>
  
//                       {/* القوائم */}
//                       <ul className="mt-6 space-y-4">
//                         <NavLink to="/opinion">
//                           <li className="flex items-center justify-between p-3 bg-white rounded-lg shadow hover:bg-gray-200 cursor-pointer">
//                             <span className="text-gray-500">&lt;</span>
//                             <span>شاركنا برأيك</span>
//                           </li>
//                         </NavLink>
//                         <NavLink to="/diagnostic">
//                           <li className="flex mt-3 items-center justify-between p-3 bg-white rounded-lg shadow hover:bg-gray-200 cursor-pointer">
//                             <span className="text-gray-500">&lt;</span>
//                             <span>تشخيص جديد</span>
//                           </li>
//                         </NavLink>
//                         <li className="flex items-center justify-between p-3 bg-white rounded-lg shadow hover:bg-gray-200 cursor-pointer">
//                           <span className="text-gray-500">&lt;</span>
//                           <span>شارك الموقع</span>
//                         </li>
//                         <li onClick={Logout} className="flex items-center justify-between p-3 bg-white rounded-lg shadow hover:bg-gray-200 cursor-pointer">
//                           <span className="text-gray-500">&lt;</span>
//                           <span>تسجيل الخروج</span>
//                         </li>
//                       </ul>
//                     </div>
//                   </>
//                 )}
//                  {/* محتوى الشريط الجانبي عند الضغط على أيقونة الـ Menu */}
  
//                 {sidebarType === "menu" && !token && (
//                   <>
                   
//                     <li>
//                       <NavLink to="/auth/login" className="text-black">
//                       <li className="flex mt-3 items-center justify-between p-3 bg-white rounded-lg shadow hover:bg-gray-200 cursor-pointer">
//                             <span className="text-gray-500">&lt;</span>
//                             <span>تسجيل الدخول</span>
//                             </li>
//                       </NavLink>
//                     </li>
//                     <li>
//                       <NavLink to="/auth/signup" className="text-black">
//                       <li className="flex mt-3 items-center justify-between p-3 bg-white rounded-lg shadow hover:bg-gray-200 cursor-pointer">
//                             <span className="text-gray-500">&lt;</span>
//                             <span>إنشاء حساب </span>
//                             </li>
//                       </NavLink>
//                     </li>
//                   </>
//                 )}
                
//                  {/* محتوى الشريط الجانبي عند الضغط على أيقونة الـ Menu مع خيارات للمستخدم */}
  
//                 {sidebarType === "menu" && token && (
                  
//                   <>
                   
//                     <NavLink to="/">
//                       <li className="flex mt-3 items-center justify-between p-3 bg-white rounded-lg shadow hover:bg-gray-200 cursor-pointer">
//                       <span className="text-gray-500">&lt;</span>
//                         <span>الرئيسية</span>
//                       </li>
//                     </NavLink>
//                     <NavLink to="/support">
//                       <li className="flex mt-3 items-center justify-between p-3 bg-white rounded-lg shadow hover:bg-gray-200 cursor-pointer">
//                       <span className="text-gray-500">&lt;</span>
//                         <span>الدعم</span>
//                       </li>
//                     </NavLink>
//                     <NavLink to="/diagnostic">
//                       <li className="flex mt-3 items-center justify-between p-3 bg-white rounded-lg shadow hover:bg-gray-200 cursor-pointer">
//                       <span className="text-gray-500">&lt;</span>
//                         <span>التشخيص</span>
//                       </li>
//                     </NavLink>
//                     <NavLink to="/statistics">
//                       <li className="flex mt-3 items-center justify-between p-3 bg-white rounded-lg shadow hover:bg-gray-200 cursor-pointer">
//                       <span className="text-gray-500">&lt;</span>
//                         <span>احصائيات</span>
//                       </li>
//                     </NavLink>
//                     <NavLink to="/doctor">
//                       <li className="flex mt-3 items-center justify-between p-3 bg-white rounded-lg shadow hover:bg-gray-200 cursor-pointer">
//                       <span className="text-gray-500">&lt;</span>
//                         <span>تواصل مع متخصص</span>
//                       </li>
//                     </NavLink>
                    
//                     {/* <NavLink to="/team">
//                       <li className="flex items-center mt-3 justify-between p-3 bg-white rounded-lg shadow hover:bg-gray-200 cursor-pointer">
//                       <span className="text-gray-500">&lt;</span>
//                         <span>معلومات عن الفريق</span>
//                       </li>
//                     </NavLink> */}
                    
//                   </>
//                 )}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
  
// }


import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/User.context";
import Autismlogo from "../../../images/gradLogo1.png";
import userphoto from "../../../images/WhatsApp Image 2025-01-25 at 17.44.42_295452d3.jpg";
import { useUser } from '../../context/User.context';
import { toast } from "react-hot-toast";

export default function Navbar() {
  const { token, Logout } = useContext(UserContext);
  const { user } = useUser();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [sidebarType, setSidebarType] = useState("");
  const navigate = useNavigate();

  const toggleSidebar = (type) => {
    setSidebarType(type);
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = async () => {
    const result = await Logout();
    if (result.success) {
      toast.success("تم تسجيل الخروج بنجاح");
      navigate("/auth/login"); // رجوع لصفحة تسجيل الدخول
    } else {
      toast.error(result.message || "فشل تسجيل الخروج");
    }
  };

  return (
    <>
      <nav className="bg-primary-50 shadow-sm font-Cairo z-50">
        <div className="container flex justify-between gap-12 items-center px-4">
          <div className="flex gap-4">
            <button
              className="lg:hidden mr-auto text-white text-2xl"
              onClick={() => toggleSidebar("menu")}
            >
              <i className="fa-solid fa-bars"></i>
            </button>
            <ul className="flex items-center gap-5">
              {token && (
                <li onClick={() => toggleSidebar("user")}>
                  <div>
                    <img
                      src={userphoto}
                      alt="Profile"
                      className="cursor-pointer"
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                      }}
                    />
                  </div>
                </li>
              )}
            </ul>
          </div>

          {/* روابط الشريط العلوي */}
          <ul className="lg:flex hidden items-center gap-5">
            {token && (
              <>
                <li><NavLink to="/doctor" className={navClass}>تواصل مع متخصص</NavLink></li>
                <li><NavLink to="/statistics" className={navClass}>احصائيات</NavLink></li>
                <li><NavLink to="/diagnostic" className={navClass}>التشخيص</NavLink></li>
                <li><NavLink to="/support" className={navClass}>الدعم</NavLink></li>
                <li><NavLink to="/" className={navClass}>الرئيسية</NavLink></li>
              </>
            )}
          </ul>

          <a href="/">
            <img src={Autismlogo} className="w-14" alt="Logo" />
          </a>

          {/* الشريط الجانبي */}
          <div className={`fixed inset-0 z-40 transition-all duration-300 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="w-64 bg-white h-full p-4">
              <button className="absolute top-4 left-4 text-xl text-black" onClick={() => setIsSidebarOpen(false)}>
                <i className="fa-solid fa-times"></i>
              </button>

              <ul className="space-y-4 mt-9">
                {/* القائمة عند الضغط على صورة المستخدم */}
                {sidebarType === "user" && token && (
                  <div className="bg-white h-full">
                    <div className="flex items-center space-x-3">
                      <img src={userphoto} alt="User" className="w-10 h-10 rounded-full" />
                      <div>
                        <h2 className="text-gray-900 font-semibold">{user.name}</h2>
                        <p className="text-sm text-gray-500">{user.email}</p>
                      </div>
                    </div>

                    <ul className="mt-6 space-y-4">
  <li>
    <NavLink to="/opinion">
      <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow hover:bg-gray-200 cursor-pointer">
        <span className="text-gray-500">&lt;</span>
        <span>شاركنا برأيك</span>
      </div>
    </NavLink>
  </li>
  <li>
    <NavLink to="/diagnostic">
      <div className="flex mt-3 items-center justify-between p-3 bg-white rounded-lg shadow hover:bg-gray-200 cursor-pointer">
        <span className="text-gray-500">&lt;</span>
        <span>تشخيص جديد</span>
      </div>
    </NavLink>
  </li>
  <li className="flex items-center justify-between p-3 bg-white rounded-lg shadow hover:bg-gray-200 cursor-pointer">
    <span className="text-gray-500">&lt;</span>
    <span>شارك الموقع</span>
  </li>
  <li
    onClick={handleLogout}
    className="flex items-center justify-between p-3 bg-white rounded-lg shadow hover:bg-gray-200 cursor-pointer"
  >
    <span className="text-gray-500">&lt;</span>
    <span>تسجيل الخروج</span>
  </li>
</ul>

                  </div>
                )}

                {/* القائمة عند الضغط على القائمة الجانبية للمستخدم أو الزائر */}
                {sidebarType === "menu" && (
                  <>
                    {!token ? (
                      <>
                        <NavLink to="/auth/login"><li className={sidebarItem}>تسجيل الدخول</li></NavLink>
                        <NavLink to="/auth/signup"><li className={sidebarItem}>إنشاء حساب</li></NavLink>
                      </>
                    ) : (
                      <>
                        <NavLink to="/"><li className={sidebarItem}>الرئيسية</li></NavLink>
                        <NavLink to="/support"><li className={sidebarItem}>الدعم</li></NavLink>
                        <NavLink to="/diagnostic"><li className={sidebarItem}>التشخيص</li></NavLink>
                        <NavLink to="/statistics"><li className={sidebarItem}>احصائيات</li></NavLink>
                        <NavLink to="/doctor"><li className={sidebarItem}>تواصل مع متخصص</li></NavLink>
                      </>
                    )}
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

const navClass = ({ isActive }) =>
  `relative text-black before:absolute before:w-0 before:h-0.5 before:bg-black hover:before:w-full before:transition-width before:duration-300 before:left-0 before:-bottom-1 ${isActive ? "before:!w-full font-semibold" : ""}`;

const sidebarItem = "flex items-center justify-between p-3 bg-white rounded-lg shadow hover:bg-gray-200 cursor-pointer";

