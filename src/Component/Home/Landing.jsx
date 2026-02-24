import React, { useEffect, useState } from "react";
import { images } from "../../assets/index";
import { useTranslation } from "react-i18next";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "../../../src/index.css";

const Landing = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const header = t("hero.header", { returnObjects: true });
  const body = t("hero.body", { returnObjects: true });

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const totalSlides = images.length;

  // Auto Slide
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 10000);

    return () => clearInterval(interval);
  }, [isPlaying, totalSlides]);

  return (
    <section className="h-screen md:min-h-[calc(100vh-80px)] relative overflow-hidden">
      {/* Images */}
      <div className="w-full min-h-[calc(100vh-80px)] relative">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            className={`
              w-full h-full object-center absolute top-0 left-0 transition-opacity duration-1000
              ${index === currentSlide ? "opacity-100" : "opacity-0"}
            `}
            alt={`slide-${index}`}
          />
        ))}
        <span className="absolute inset-0 w-full h-screen bg-black/50"></span>
      </div>

      {/* Text Box */}
      <div className="absolute mx-4 md:mx-10 lg:w-1/2 top-[200px] md:top-64 transform -translate-y-1/2 px-6 py-8 rounded-xl z-10 bg-white/40 backdrop-blur-md">
        <h1 className="text-[26px] md:text-[40px] font-semibold text-[var(--sec-color)] mb-3">
          {header}
        </h1>

        <p className="text-[15px] md:text-[18px] md:leading-loose">{body}</p>

        {/* CTA Button */}
        <a href="#AboutHero">
        <button className="flex items-center px-5 py-2 bg-[var(--sec-color)] rounded-xl cursor-pointer mt-4 text-white gap-2">
          {t("hero.CTA")}

          <span
            className={`transition-transform duration-500 ${
              isRTL ? "rotate-y-180" : ""
            }`}
          >
            {/* السهم المناسب حسب اللغة */}
             <FaArrowRight /> 
          </span>
        </button>
        </a>
      </div>

      {/* Dots indicators */}
      <div className="absolute bottom-6 w-full flex items-center justify-center gap-3">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`
              w-4 h-4 rounded-full cursor-pointer transition-all duration-300
              ${index === currentSlide ? "bg-white scale-125" : "bg-white/40"}
            `}
          ></div>
        ))}
      </div>

      {/* Fade Animation */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.9s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Landing;
