import React, { useEffect } from "react";
import {Route, Routes } from "react-router-dom";
import i18next from "i18next";
import "./i18n";
import { useTranslation } from "react-i18next";
import Navbar from "./Component/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import NewS from "./pages/NewS";
import ContactUs from "./pages/ContactUs";
import Gallery from "./pages/Gallery";
import Footer from "./Component/Footer";
const App = () => {
  const { i18n } = useTranslation();
  useEffect(() => {
    const savedLanguage = localStorage.getItem("userLanguage") || "ar";
    i18next.changeLanguage(savedLanguage);
    document.dir = savedLanguage === "ar" ? "rtl" : "ltr";
  }, []);
  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "ar" ? "en" : "ar");
  };
  return (
    <>
      <Navbar />
    
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/NewS" element={<NewS />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
      
      <Footer />
    </>
  );
};

export default App;
