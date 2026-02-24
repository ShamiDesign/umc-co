import React from "react";
import { useTranslation } from "react-i18next";
import { WhyChooesUs } from "../../assets/index";
import Paper from "@mui/material/Paper";

const WhyUs = () => {
  const { t } = useTranslation();
  const items = WhyChooesUs;
  return (
    <section className="py-10 my-10  px-4 md:px-20 bg-gray-100">
      <h1 className="pb-16 text-[26px] md:text-[40px] font-bold  text-center">{t("WhyChooesUs.header")}</h1>
      <div className="flex flex-wrap gap-5 justify-center ">
        {items.map((item, i) => {
          const Icon = item.iconKey;
          return (
            <Paper key={i} 
            sx={{backgroundColor:"#312C85" , color:"white", padding: "30px 10px"}}
            className="flex items-center justify-center gap-2 w-full   md:w-[300px] hover:scale-105 transition duration-300">
              <Icon className="text-[18px] md:text-[22px]" />
              <h3 className="text-[15px] md:text-[18px]">{t(item.titleKey)}</h3>
            </Paper>
          );
        })}
      </div>
    </section>
  );
}

export default WhyUs;
