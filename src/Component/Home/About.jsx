import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  const items = t("About.body.items", { returnObjects: true });
  return (
    <section className="mt-10 md:mt-16  ">
      <div className="header px-4 md:px-20 flex flex-col items-center mb-2  md:mb-4">
        <h1 className=" text-[26px] md:text-[40px] font-bold pb-2  text-[var(--main-color)]">
          {t("About.header")}
        </h1>
        <h3 className="w-full md:w-1/2 py-2 text-gray-600 text-center font-light leading-loose text-[12px] md:text-[14px]">
          {t("About.body.title")}
        </h3>
      </div>

      <div className="body flex flex-col gap-y-3 md:gap-y-8 items-center  bg-gray-100  py-5 px-4 md:px-10">
        <h3 className=" text-[18px] md:text-[24px] font-medium">{t("About.body.subtitle")}</h3>
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
