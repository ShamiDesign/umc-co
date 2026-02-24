import React from "react";
import { useTranslation } from "react-i18next";
import { FaCheck } from "react-icons/fa";
import { assets, umrah } from "../../assets";

const Operations = () => {
  const { t } = useTranslation();

  const body = t("Operations.Haj.body", { returnObjects: true });
  return (
    <section className="mt-10    flex flex-col items-center ">
      <h1 className=" pt-10 text-[26px] md:text-[40px] font-bold pb-8   ">
        {t("Operations.header")}
      </h1>
      {/* ======================================================================== */}

      <div className="flex flex-col gap-y-6 md:gap-y-10">
        <div className="haj flex flex-col-reverse md:flex-row items-center justify-between ">
          <div className="body flex flex-col mt-5 px-6  md:px-10 gap-3 w-full md:w-1/2 ">
            <h3 className="group text-[22px] md:text-[32px] font-semibold  text-[var(--sec-color)]">
              {t("Operations.Haj.title")}
            </h3>
            <p className=" text-gray-600 leading-loose ">
              {t("Operations.Haj.p")}
            </p>

            <div className=" flex flex-col gap-4 md:gap-6 py-6 w-full  gap-1">
              {body.map((item, i) => (
                <div
                  key={i}
                  className="flex   bg-gray-100 rounded-2xl shadow hover:scale-105 transition duration-300 cursor-pointer"
                >
                  <h5 className="flex gap-2 py-4 px-4 items-center font-semibold ">
                    <span className="text-[var(--sec-color)]">
                      <FaCheck />
                    </span>
                    <span className="text-[15px] md:text-[18px]  ">
                      {item}{" "}
                    </span>
                  </h5>
                </div>
              ))}
            </div>
          </div>

          <div className="image relative w-full  md:w-[500px]  z-10 p-4 flex items-center">
            <span className="absolute -z-1 w-1/2 h-full bg-[var(--sec-color)] -end-0 hidden md:inline-block"></span>
            <div className="flex flex-col gap-4   ">
              <img
                src={assets.haj1}
                alt=""
                className="rounded overflow-hidden hover:scale-105 transition-all duration-300  border border-[var(--sec-color)]"
              />
              <div className="flex gap-2 w-full">
                <img
                  src={assets.haj2}
                  alt=""
                  className="w-1/2 rounded overflow-hidden hover:scale-105 transition-all duration-300  border border-[var(--sec-color)]"
                />
                <img
                  src={assets.haj3}
                  alt=""
                  className="w-1/2 rounded overflow-hidden hover:scale-105 transition-all duration-300  border border-[var(--sec-color)]"
                />
              </div>
            </div>
          </div>
        </div>
        {/* =============================================================== */}

        <div className="omra flex flex-col-reverse md:flex-row items-start justify-between ">
          <div className="image relative w-full  md:w-[500px]  z-10 p-4 flex items-center">
            <span className="absolute -z-1 w-1/2 h-full bg-[var(--sec-color)] -start-10 hidden md:inline-block"></span>
            <div className="flex flex-col gap-4   ">
              <img
                src={umrah.omra2}
                alt=""
                className="rounded overflow-hidden hover:scale-105 transition-all duration-300  border border-[var(--sec-color)]"
              />
              <div className="flex gap-2 w-full">
                <img
                  src={umrah.omra1}
                  alt=""
                  className="w-1/2 rounded overflow-hidden hover:scale-105 transition-all duration-300  border border-[var(--sec-color)]"
                />
                <img
                  src={umrah.omra3}
                  alt=""
                  className="w-1/2 rounded overflow-hidden hover:scale-105 transition-all duration-300  border border-[var(--sec-color)]"
                />
              </div>
            </div>
          </div>

          <div className="body body flex flex-col mt-5 px-6  md:px-10 gap-3 w-full md:w-1/2  ">
            <h3 className="group text-[22px] md:text-[32px] font-semibold  text-[var(--sec-color)]">
              <span className="relative inline-block  px-1 ">
                {t("Operations.Umrah.title")}
                {/* <span className="absolute left-0 right-0 -bottom-[6px] h-[2px] bg-[var(--sec-color)] "></span> */}
              </span>
            </h3>
            <p className="text-gray-600 leading-loose ">
              {t("Operations.Umrah.body")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Operations;
