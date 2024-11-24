// import React from 'react'
import Home from "./components/pages/Home";
import {Route, Routes} from "react-router-dom"
import Howitworks from "./components/pages/Howitworks";
import Features from "./components/pages/Features";
import Beneficiaries from "./components/pages/Beneficiaries";
import Donors from "./components/pages/Donors";

const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/howitworks" element={<Howitworks/>} />
        <Route path="/features" element={<Features/>} />
        <Route path="/beneficiaries" element={<Beneficiaries/>} />
        <Route path="/donors" element={<Donors/>} />
      </Routes>
      
    </div>
  )
}

export default App