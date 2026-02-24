import React from "react";
import { useTranslation } from "react-i18next";
import { assets } from "../../assets";

const AboutHero = () => {
  const { t } = useTranslation();
  const subtitle = t("aboutHero.subtitle", { returnObjects: true });
  return (
    <section id="AboutHero" className="flex flex-col lg:flex-row  items-center lg:justify-between mt-20 px-6 md:px-20 gap-5">
      <div className="flex flex-col items-center lg:justify-between lg:items-start md:w-full ">
      <h1 className="text-[26px] md:text-[40px] font-bold pb-3  text-[var(--main-color)]">
        {t("aboutHero.header")}
      </h1>
      <h3 className="text-[12px] md:text-[14px] text-gray-600 ">
        <span className="font-semibold">{subtitle[0]} </span>
        <span>{subtitle[1]} </span>
      </h3>
      <p className="text-[14px] md:text-[16px] py-5 leading-loose w-full lg:w-3/4">{t("aboutHero.body")}</p>
      </div>

      <div className="image">
     <img src={assets.drvSuc } alt="" className=" md:max-w-[400px] rounded-2xl " />
      </div>
    </section>
  );
};

export default AboutHero;
