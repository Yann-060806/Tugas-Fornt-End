import { useState } from "react";
import "./components/Layanan/Layanan.css";
import data from "./data.json";
import Home from "./Pages/Home/Home.jsx";
import About from "./Pages/About/About.jsx";
import StafDokter from "./Pages/StafDokter/StafDokter.jsx";
import Layanan from "./Pages/Layanan/Layanan.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import HelthNews from "./Pages/HealthNews/HealthNews.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dokter" element={<StafDokter />} />
        <Route path="/layanan" element={<Layanan />} />
        <Route path="/news" element={<HelthNews />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
