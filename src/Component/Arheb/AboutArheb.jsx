import React from "react";
import { useTranslation } from "react-i18next";
import { aboutArheb } from "../../assets";

const AboutArheb = () => {
  const { t } = useTranslation();
  return (
    <section className="mt-5 mb-8 flex flex-col items-center ">
      <h1 className="text-3xl font-semibold mb-10">{t("aboutArheb.header")}</h1>
      <div className="flex flex-col md:flex-row md:flex-wrap justify-center  gap-6 md:gap-10  px-2">
        {aboutArheb.map((item, i) => (
          <div
            key={i}
            className="flex gap-2 bg-gray-100 rounded-2xl shadow  overflow-hidden max-w-[350px] hover:scale-105 transition duration-300"
          >
            <div className="bg-[var(--sec-color)] flex items-center w-[100px]">
              {" "}
              <img src={item.iconKey} alt="" className="w-[100px]" />
            </div>
            <div className="flex flex-col px-2 py-3  ">
              <h3 className="font-semibold pb-2">{t(item.titleKey)}</h3>
              <p className="text-sm text-gray-700">{t(item.infoKey)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutArheb;
