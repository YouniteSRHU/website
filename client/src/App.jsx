import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import './App.css'
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
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <ScrollToTop/>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Website />} />
                <Route path="/YUVOTSAV'24">
                  <Route index element={<Youthfest />} />
                  <Route path=":id" element={<SingleEvent />} />
                </Route>
                <Route path="/CONTACT US" element={<Contact />} />
                <Route path="/ABOUT US" element={<AboutUs />} />
                <Route path="/NEWS" element={<News />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter> 
        <ToastContainer />
        <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
  )
}

export default App
