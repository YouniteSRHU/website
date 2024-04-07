import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Layout from "./components/Layout/Layout";
import Website from "./Pages/Website";
import { Suspense } from "react";
import Youthfest from "./Pages/Youthfest/Youthfest";
import SingleEvent from "./Pages/SingleEvent/SingleEvent";
import Contact from "./Pages/Contact/Contact";

function App() {

  return (
    <BrowserRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Website />} />
                <Route path="/youthfest">
                  <Route index element={<Youthfest />} />
                  <Route path=":1" element={<SingleEvent />} />
                </Route>
                <Route path="/contact-us" element={<Contact />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter> 
  )
}

export default App
