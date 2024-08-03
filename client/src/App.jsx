// import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
// import "./App.css";
// import Layout from "./components/Layout/Layout";
// import Website from "./Pages/Website";
// import { Suspense, useEffect } from "react";
// import Youthfest from "./Pages/Youthfest/Youthfest";
// import SingleEvent from "./Pages/SingleEvent/SingleEvent";
// import Contact from "./Pages/Contact/Contact";
// import AboutUs from "./Pages/AboutUs/AboutUs";
// import { QueryClient, QueryClientProvider } from "react-query";
// import { ReactQueryDevtools } from "react-query/devtools";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import News from "./Pages/News/News";
// const ScrollToTop = () => {
//   const location = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [location]);

//   return null;
// };
// function App() {
//   const queryClient = new QueryClient();
//   return (
//     <QueryClientProvider client={queryClient}>
//       <BrowserRouter>
//         <ScrollToTop />
//         <Suspense fallback={<div>Loading...</div>}>
//           <Routes>
//             <Route element={<Layout />}>
//               <Route path="/" element={<Website />} />
//               <Route path="/YUVOTSAV'24">
//                 <Route index element={<Youthfest />} />
//                 {/* <Route path=":id" element={<SingleEvent />} /> */}
//                 <Route
//                   path=":id"
//                   element={<SingleEvent />}
//                   loader={async ({ params }) => {
//                     try {
//                       const eventData = await getEvent(params.id);
//                       return { event: eventData };
//                     } catch (error) {
//                       throw new Response("Not Found", { status: 404 });
//                     }
//                   }}
//                 />
//               </Route>
//               <Route path="/CONTACT US" element={<Contact />} />
//               <Route path="/ABOUT US" element={<AboutUs />} />
//               <Route path="/NEWS" element={<News />} />
//             </Route>
//           </Routes>
//         </Suspense>
//       </BrowserRouter>
//       <ToastContainer />
//       <ReactQueryDevtools initialIsOpen={false} />
//     </QueryClientProvider>
//   );
// }

// export default App;

import { createBrowserRouter, RouterProvider, useLocation } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Website from "./Pages/Website";
import { Suspense, useEffect } from "react";
import Youthfest from "./Pages/Youthfest/Youthfest";
import SingleEvent from "./Pages/SingleEvent/SingleEvent";
import Contact from "./Pages/Contact/Contact";
import AboutUs from "./Pages/AboutUs/AboutUs";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import News from "./Pages/News/News";
import { getEvent } from "./utils/api"; // Make sure to import your getEvent function

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Website /> },
      {
        path: "/YUVOTSAV'24",
        children: [
          { index: true, element: <Youthfest /> },
          {
            path: ":id",
            element: <SingleEvent />,
            loader: async ({ params }) => {

              try {
                const eventData = await getEvent(params.id);
                return { eventData: eventData };
              } catch (error) {
                throw new Response("Not Found", { status: 404 });
              }
            },
          },
        ],
      },
      { path: "/CONTACT US", element: <Contact /> },
      { path: "/ABOUT US", element: <AboutUs /> },
      { path: "/NEWS", element: <News /> },
    ],
  },
]);

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
      <ToastContainer />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;