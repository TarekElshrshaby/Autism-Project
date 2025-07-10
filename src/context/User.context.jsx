// import { createContext, useState, useContext } from 'react';

// export const UserContext = createContext(null);

// export default function UserProvider({children}) {

//     const [token , setToken] = useState(localStorage.getItem("token"))
//     const [user, setUser] = useState({
//         name: localStorage.getItem("UserName") || "",
//         email: localStorage.getItem("UserEmail") || "",
//       });

//     function Logout() {
//         setToken(null);
//         localStorage.removeItem("token")

//     }

//     return <UserContext.Provider value={{token , setToken , Logout , user ,setUser}}>
//     {children}
//     </UserContext.Provider>
    
// }




// export const useUser = () => useContext(UserContext);



import { createContext, useState, useContext } from 'react';

export const UserContext = createContext(null);

export default function UserProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState({
    name: localStorage.getItem("UserName") || "",
    email: localStorage.getItem("UserEmail") || "",
  });

  async function Logout() {
    try {
      const response = await fetch("https://graduation-project-production-6390.up.railway.app/api/logout", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json"
        }
      });

      const result = await response.json();

      if (response.ok) {
        // إزالة البيانات من التخزين المحلي
        localStorage.removeItem("token");
        localStorage.removeItem("child_id");
        localStorage.removeItem("child_image");
        localStorage.removeItem("UserName");
        localStorage.removeItem("UserEmail");

        // إعادة تعيين الحالة
        setToken(null);
        setUser({ name: "", email: "" });

        return { success: true };
      } else {
        return { success: false, message: result.message || "فشل تسجيل الخروج" };
      }
    } catch (error) {
      console.error("Logout Error:", error);
      return { success: false, message: "حدث خطأ أثناء الاتصال بالسيرفر" };
    }
  }

  return (
    <UserContext.Provider value={{ token, setToken, Logout, user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);

