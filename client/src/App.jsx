import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Layout from "./components/Layout/Layout";
import Website from "./Pages/Website";
import { Suspense } from "react";
import Youthfest from "./Pages/Youthfest/Youthfest";

function App() {

  return (
    <BrowserRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Website />} />
                <Route path="/youthfest">
                  <Route index element={<Youthfest />} />
                  {/* <Route path=":eventId" element={<Property />} /> */}
                </Route>
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter> 
  )
}

export default App
