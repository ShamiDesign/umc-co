import React from "react";
import { useTranslation } from "react-i18next";
import VideoSection from "../VideoSection";

const About = () => {
  const { t } = useTranslation();

  const items = t("About.body.items", { returnObjects: true });
  return (
    <section className="mt-10 md:mt-16  ">
        <h1 className=" text-[26px] md:text-[40px] font-bold pb-10 text-center text-[var(--main-color)]">
          {t("About.header")}
        </h1>
      <div className=" flex flex-col md:flex-row justify-between items-start px-4 md:px-20 gap-6">
        <div className="header  flex flex-col  mb-2  md:mb-4  w-full lg:w-1/2">
          <h3 className="flex flex-col gap-3 w-full  py-2 font-medium leading-10 text-[16px] md:text-[18px] text-justify">
           <span>{t("About.body.des1")}</span> 
           <span>{t("About.body.des2")}</span> 
          </h3>
        </div>
        <div className="video w-full lg:w-1/2 mb-2 lg:mb-10 me-0 lg:ms-10 ">
          <VideoSection />
        </div>
      </div>

      <div className="body flex flex-col gap-y-3 md:gap-y-8 items-center  bg-gray-100  py-5 px-4 md:px-10">
        <h3 className=" text-[18px] md:text-[24px] font-medium">
          {t("About.body.subtitle")}
        </h3>
        <div className="body flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-6 ">
          {items.map((item, index) => (
            <p
              key={index}
              className="flex items-center justify-center gap-2 w-[300px]  h-[120px] rounded-2xl text-center
               bg-white text-[15px] md:text-[18px] shadow hover:scale-105 transition duration-300 cursor-pointer "
            >
              {" "}
              {item}
            </p>
          ))}
        </div>
        <h3 className="text-center py-5 text-[15px] md:text-[18px] font-medium ">
          {t("About.body.endBody")}
        </h3>
      </div>
    </section>
  );
};

export default About;
