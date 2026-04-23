import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <section className="flex justify-center items-center bg-[var(--main-color)] h-[140px] w-full overflow-hidden px-20 ">
      <div className="flex justify-between w-full">
        <div className="contactUs flex flex-col text-white  ">
          <h3 className="text-center mb-3 font-semibold">
            {t("footer.contactTitle")}
          </h3>
          <h3>{t("footer.contactNum")}</h3>
        </div>

        <div className="social flex flex-col content-center text-white">
          <h3 className="mb-2 font-semibold ">
            {t("contactUs.socialMedia")}
          </h3>
          <dev className="flex justify-center  gap-1  text-white">
            <Link
              className="cursor-pointer  hover:bg-gray-200 hover:shadow  rounded-full p-3 transition duration-300"
              to="https://x.com/companymovement"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={assets.wLogoX} alt="" className="w-[20px] " />
            </Link>
            <Link
              className="cursor-pointer hover:bg-gray-200 hover:shadow  rounded-full p-3 transition duration-300"
              to="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={assets.wLogoInsta} alt="" className="w-[20px] " />
            </Link>
          </dev>
        </div>
        <div className="image flex items-center gap-2">
          <img src={assets.wLogo} alt="" className="w-24" />
          <div className="flex flex-col gap-1 text-lg text-white font-semibold">
            <h3>{t("logo.p1")}</h3>
            <h3>{t("logo.p2")}</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
