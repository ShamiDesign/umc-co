import React from "react";
import { useTranslation } from "react-i18next";
import { assets } from "../../assets/index";
import { FaCheck } from "react-icons/fa";
const Arheb = () => {
  const { t } = useTranslation();
  const title = t("Arheb.title", { returnObjects: true });
  const bodyOfArray = t("Arheb.body.bodyOfArray", { returnObjects: true });
  return (
    <section className="mx-6 md:mx-10">
      <div className="header flex flex-col items-center mb-10">
        <h1 className="text-[26px] md:text-[40px] font-semibold ">
          <span>{title[0]} </span>
          <span className="text-[var(--sec-color)]">{title[1]} </span>
        </h1>
        <h3 className="text-gray-600 text-[12px] md:text-[14px] pb-2">{t("Arheb.subtitle")}</h3>
      </div>
      {/* ------------------------------------------------------ */}

      <div className="flex flex-col-reverse items-center md:flex-row justify-between gap-12">
        <div className="detelis flex flex-col ">
          <p className="font-normal leading-loose pb-6 text-[15px] md:text-[18px]">{t("Arheb.info")}</p>
          <div>
            <h3 className="text-[18px] md:text-[24px] font-semibold text-[var(--sec-color)] underline underline-offset-12">
              {t("Arheb.body.title")}
            </h3>
            <div className="flex flex-col gap-3 py-5">
              {bodyOfArray.map((item, i) => (
                <div key={i} className="flex items-center gap-4 ps-2 scale-100 hover:scale-105 transition duration-300">
                  <FaCheck className="text-[15px] md:text-[18px] text-[var(--sec-color)] " />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="image w-full md:max-w-[400px] rounded-lg overflow-hidden">
          <img
            src={assets.arheb}
            alt=""
            className=" scale-100 hover:scale-105 transition duration-300 cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default Arheb;
