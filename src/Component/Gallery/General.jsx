import { useTranslation } from "react-i18next";
import { AImagea } from "../../assets";

const General = () => {
  const { t } = useTranslation();
  return (
    <>
      <h1 className="text-[22px] md:text-[26px] font-medium text-gray-600">
        {t("gallery.General")}
      </h1>

      <div className="flex flex-wrap items-center justify-center mt-4 gap-6 mx-auto">
        {AImagea.map((item, index) => (
          <div
            key={index}
            className="relative group rounded-xl overflow-hidden"
          >
            <img
              src={item}
              alt=""
              className="w-[350px] md:w-[370px] h-[260px] object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 flex items-end bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </>
  );
};

export default General;
