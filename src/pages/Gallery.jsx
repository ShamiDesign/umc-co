import { useTranslation } from "react-i18next";
import Aripoart from "../Component/Gallery/Aripoart";
import OperImage from "../Component/Gallery/OperImage";
import General from "../Component/Gallery/General";

const Gallery = () => {
  const { t } = useTranslation();
  return (
    <section className="my-6 md:my-10 mx-4 md:mx-10 ">
      <h1 className="text-[26px] md:text-[40px] text-center text-[var(--main-color)] font-semibold tracking-wider">
        {t("gallery.header")}
      </h1>
      <div className="flex flex-col mt-6 gap-6">
        <Aripoart />
        <OperImage />
        <General />
      </div>
    </section>
  );
};

export default Gallery;
