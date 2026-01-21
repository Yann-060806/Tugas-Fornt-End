import { useState } from "react";
import "./components/Layanan/Layanan.css";
import data from "./data.json";
import Home from "./Pages/Home/Home.jsx";
import About from "./Pages/About/About.jsx";
import StafDokter from "./Pages/StafDokter/StafDokter.jsx";
import Layanan from "./Pages/Layanan/Layanan.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dokter" element={<StafDokter />} />
        <Route path="/layanan" element={<Layanan />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
