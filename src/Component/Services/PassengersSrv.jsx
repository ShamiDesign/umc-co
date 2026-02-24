import React from "react";
import { useTranslation } from "react-i18next";
import { bodyOfArray } from "../../assets";
import SrvImages from "./SrvImages";
import { FaArrowRight, FaCheck } from "react-icons/fa";

const PassengersSrv = () => {
  const { t} = useTranslation();
 

  return (
    <section className="flex flex-col gap-5 mt-10 w-full ">
      {/* ========================= SEC1 ============================================= */}
      <div className="sec1 flex flex-col md:flex-row items-center md:justify-between gap-y-5 md:gap-x-10 mx-6 md:mx-10">
        <div className="body mt-4 w-full md:w-2/3 ">
          <h1 className="text-[26px] md:text-[40px] font-semibold text-[var(--main-color)]  ">
            {t("PassengerSrv.header")}
          </h1>
          <p className="text-[14px] md:text-[16px] py-3 leading-loose text-justify  text-gray-600  ">
            {t("PassengerSrv.subtitle")}
          </p>
        </div>

        <SrvImages className="w-full md:w-1/3 " />
      </div>

      {/* ========================== SEC2 ============================================ */}

      <div id="AboutSrv" className="sec2 bg-gray-100  px-4 md:px-10">
        <div className="flex flex-col justify-center items-center py-6 md:py-4">
          <h3 className="text-[22px] md:text-[32px] font-semibold  ">
            {t("PassengerSrv.title")}
          </h3>
          <p className="text-[14px] md:text-[16px] w-full md:w-2/3  py-2 text-gray-600 text-justify md:text-center leading-relaxed ">
            {t("PassengerSrv.endBody")}
          </p>
          <h3 className="text-[18px] md:text-[24px]  font-semibold ">
            {t("PassengerSrv.arrayOfSrv.title")}
          </h3>

          <div className="flex flex-wrap  justify-center gap-4 py-4 ">
            {bodyOfArray.map((item, i) => (
              <div className="flex  gap-4 bg-white px-3 md:px-5 rounded-xl shadow hover:scale-105 transition duration-300 cursor-pointer w-full md:w-1/2 ">
                <h5 key={i} className="flex gap-3 py-4  items-center ">
                  <span className="text-[var(--sec-color)]">
                    <FaCheck className="font-semibold" />
                  </span>
                  <span className="text-[15px] md:text-[18px] ">{t(item.titleKey)}</span>
                </h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PassengersSrv;
