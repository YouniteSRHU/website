import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Layout from "./components/Layout/Layout";
import Website from "./Pages/Website";
import { Suspense } from "react";

function App() {

  return (
    <BrowserRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Website />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter> 
  )
}

export default App
