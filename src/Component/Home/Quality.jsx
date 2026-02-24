import React from "react";
import { useTranslation } from "react-i18next";
import { assets } from "../../assets";
import { FaCheck } from "react-icons/fa";


const Quality = () => {
  const { t } = useTranslation();
  const body = t("Quality.body", { returnObjects: true });
  return (
    <section className=" px-4 md:px-10  flex flex-col items-center gap-8">
      <div className="header flex flex-col items-center gap-y-3">
        <h1 className="text-[26px] md:text-[40px] font-bold   ">
          {t("Quality.header")}
        </h1>
        <h3 className="text-[12px] md:text-[14px]  text-gray-600">{t("Quality.subtitle")}</h3>
      </div>

      <div className="body flex flex-col md:flex-row  justify-between items-start ">
        <div className="body flex flex-col  ">
          
            {body.map((item, i) => (
              <dev className="flex gap-8 bg-gray-100 mb-4 rounded-2xl shadow hover:scale-105 transition duration-300 cursor-pointer ">
                <h5
                  key={i}
                  className="text-[14px] md:text-[16px] flex gap-2 py-4 px-4 items-center font-semibold "
                >
                  <span className="text-[var(--sec-color)]">
                    <FaCheck />
                  </span>
                  <span className="text-lg ">{item}</span>
                </h5>
              </dev>
            ))}
          
        </div>

        {/* ================================ */}
    
        <div className="image  w-full md:w-[40%] ">
          <img src={assets.quality} alt="" className="rounded-4xl py-4 px-5" />
        </div>
      </div>
    </section>
  );
};

export default Quality;
