import React from "react";
import { useTranslation } from "react-i18next";
import { Airpoarts } from "../../assets";
import Paper from "@mui/material/Paper";

const AirportS = () => {
  const { t } = useTranslation();

  // airport4 عبارة عن array → returnObjects:true ضروري
  const airport4 = t("Airports.itemsAirPorts.airportName4", {
    returnObjects: true,
  });

  return (
    <section className="mt-10 bg-gray-100 px-6 md:px-20">
      {/* Header */}
      <div className="flex flex-col items-center  ">
        <h1 className="text-[26px] md:text-[40px] font-bold   text-[var(--main-color)]  py-6 md:py-4">
          {t("Airports.header")}
        </h1>
        <p className="text-[14px] md:text-[16px] w-full md:w-3/4 text-center text-gray-600 leading-loose ">{t("Airports.body")}</p>
        </div>

        <div className="body flex flex-col items-center  ">
        <h3 className="text-[14px] md:text-[16px] py-4 font-medium">{t("Airports.subtitle")}</h3>

        {/* عرض جميع المطارات */}
        <div className="flex flex-col md:flex-row md:flex-wrap justify-evenly gap-6 my-4 ">
          {Airpoarts.map((item, i) => (
            <Paper
              key={i}
              className="flex flex-col  items-center justify-between  gap-2 bg-white py-5 px-6   overflow-hidden md:w-[400px]" 
            >
             <div className="">
               <img src={item.logoKey} className="w-full md:w-[200px] object-contain" alt="" />
             </div>

              {/* الحالة الخاصة بالمطار الرابع */}
              {item.nameKey === "Airports.itemsAirPorts.airportName4" ? (
                <p className="flex flex-col text-[15px] md:text-[16px] font-semibold text-center">
                  {airport4.map((part, idx) => (
                    <span
                      key={idx}
                      className={
                        idx === 0
                          ? "text-gray-600 font-light text-center text-[12px] md:text-[14px]"
                          : "text-black ps-2 "
                      }
                    >
                      {part}
                    </span>
                  ))}
                </p>
              ) : (
                <p className="text-lg font-semibold">{t(item.nameKey)}</p>
              )}
            </Paper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AirportS;
