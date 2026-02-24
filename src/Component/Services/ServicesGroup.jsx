import React from "react";
import { useTranslation } from "react-i18next";
import { arrayPfBody, SrvGroup } from "../../assets/index";
import { FaCheck } from "react-icons/fa";
import Paper from "@mui/material/Paper";

const ServicesGroup = () => {
  const { t } = useTranslation();
  return (
    <section className="flex flex-col gap-5 items-center mt-8 md:mt-10  ">
      <h1 className="text-[26px] md:text-[40px]  font-semibold text-[var(--main-color)] mb-4 md:mb-10">
        {t("SrvGroup.header")}
      </h1>
      {/* ------------------------------------------------------- */}

      <div className="flex flex-col gap-8 mx-6 md:mx-10">
        {SrvGroup.map((service, i) => {
          const isEven = i % 2 === 1;
          return (
            <div key={i} className="flex flex-col gap-8">
              <div
                className={`flex flex-col justify-between items-start gap-y-4 md:gap-10  px-10 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse bg-gray-100"
                } rounded-2xl px-4 py-8`}
              >
                <div className="flex flex-col gap-y-4 ">
                  <h1 className="text-[18px] md:text-[24px] font-semibold tracking-wider text-2xl text-gray-600 ">
                    {t(service.titleKey)}
                  </h1>
                  <p className="leading-loose  w-full md:w-3/4 ">
                    {t(service.bodyKey)}
                  </p>
                </div>
                <img src={service.logoKey} alt="" className="w-full md:w-1/3" />
              </div>
            </div>
          );
        })}
      </div>

      {/* ------------------ BaggageSrv ---------------- */}
      <div className="my-10 flex flex-col items-center gap-y-6 md:gap-y-10">
        {/* ================================= SEC1 ============================= */}

        <div className=" flex flex-col items-center gap-4  mx-6 md:mx-10">
          <h1 className="text-[18px] md:text-[24px] font-semibold ">
            {t("BaggageSrv.title")}
          </h1>
          <p className="text-[14px] md:text-[16px] w-full text-justify md:text-center  md:w-3/4 leading-relaxed text-gray-600 ">
            {t("BaggageSrv.info")}
          </p>
        </div>
        {/* ================================= SEC2 ============================= */}
        <div className="body bg-gray-100 px-4 md:px-20 py-8">
          <h3 className="text-xl font-semibold pb-6">
            {t("BaggageSrv.body.subtitle")}
          </h3>
          <div className="flex flex-wrap gap-10 justify-evenly">
            {arrayPfBody.map((item, i) => (
              <div key={i}>
                <Paper
                  elevation={1}
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    borderRadius: 2,
                    overflow: "hidden",
                    backgroundColor: "white",
                    px: 2,
                    py: 5,
                    width: { sx: 300, md: 400 },
                  }}
                >
                  <div className="flex flex-col ">
                    <h5 className="flex items-center  pb-3 text-lg font-semibold">
                      <FaCheck className="me-1.5 w-9 h-9 p-2 bg-[var(--sec-color)] rounded-full font-semibold  text-lg text-white" />
                      {t(item.titleKey)}
                    </h5>
                    <p>{t(item.bodyKey)}</p>
                  </div>
                </Paper>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGroup;
