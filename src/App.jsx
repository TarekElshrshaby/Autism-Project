import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Layout from "./components/Layout/Layout";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Guestroute from "./components/GuestRoute/Guestroute";
import UserProvider from "./context/User.context";
import CartProvider, { CartContext } from "./context/Card.context";
import Team from "./pages/Team/Team";
import Online from "./components/Online/Online";
import Offline from "./components/Offline/Offline";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "@fontsource-variable/cairo"
import Statistics from "./pages/Statistics/Statistics";
import ChatbotPage from "./pages/ChatbotPage/ChatbotPage";
import {MainContainer , ChatContainer , MessageList , Message , MessageInput , TypingIndicator} from "@chatscope/chat-ui-kit-react"
import DiagnosticQuestions from "./pages/DiagnosticPage/Diagnostic";
import Support from "./pages/Checkout/Checkout";
import Opinion from "./pages/opinion/opinion";
import CategoryOne from "./components/CategoryOne/CategoryOne"
import ReportComponent from "./components/report/report";
import CategoryThree from "./components/CategoryThree/CategoryThree";
import CategoryTwo from "./components/CategoryTwo/CategoryTwo";
import CategoryFour from "./components/CategoryFour/CategoryFour";
import CategoryFive from "./components/CategoryFive/CategoryFive";
import Doctors from "./components/Doctors/doctors"

export default function App() {
  const router = createBrowserRouter([
    {path : "/" , 
      element :(
         <ProtectedRoute> 
        <Layout/> 
        </ProtectedRoute>), 
        children : [{index: true , element: <Home/>},
     
      //  {path : "*" , element: <NotFound/> },
       {path : "/category/:id" , element: <h2>Category</h2> },
       {path: "/chatbot" , element: <ChatbotPage/>},
       {path : "/statistics" , element: <Statistics/>},
       {path : "/support" , element: <Support/>},
       {path : "/team" , element: <Team/>},
       {path : "/diagnostic" , element: <DiagnosticQuestions/>},
       {path : "/opinion" , element: <Opinion/>},
       {path : "/categoryone" , element: <CategoryOne/>},
       {path : "/categorytwo" , element: <CategoryTwo/>},
       {path : "/categorythree" , element: <CategoryThree/>},
       {path : "/categoryfour" , element: <CategoryFour/>},
       {path : "/categoryfive" , element: <CategoryFive/>},
       {path : "/report" , element: <ReportComponent/>},
       {path : "/doctor" , element: <Doctors/>},

    ]},
    {path: "/auth" ,element : (
      <Guestroute>
      <Layout/>
      </Guestroute>
    ),
     children : [
      {path : "signup" , element: <Signup/> },
      {path : "login" , element: <Login/> },
    ]}
  ])


  const myClient = new QueryClient()
  return (
  

   <>
  {/* <Online> */}
 
   <QueryClientProvider client={myClient}>
   <UserProvider>
    <CartProvider>
   <RouterProvider router={router}/>
   </CartProvider>
   </UserProvider>
  
   <Toaster position="top-center"/>
   
   <ReactQueryDevtools initialIsOpen={false} />
   </QueryClientProvider>
  {/* </Online> */}
  <Offline>
   <div className="bg-gray-200 shadow-md fixed bottom-8 right-8 z-50">
    <i className="fa-solid fa-wifi mr-2"></i>
    <span className="font-semibold">Check Your Internet Connection ! </span>
   </div>
  </Offline>
   </>
  )
}
