import React from "react";
import { useTranslation } from "react-i18next";
import { assets } from "../assets";
const ContactUs = () => {
  const { t } = useTranslation();
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4685700d-698e-4f25-ad8d-555452b9b74a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <div className="body flex flex-col-reverse md:flex-row justify-between md:items-start items-center  my-10 md:my-20 mx-4 md:mx-10">
        <dev className=" flex flex-col gap-4 items-center w-full mx-10">
          <div className="flex flex-col items-center">
            <img src={assets.Logo} alt="" className="w-[160px]" />
            <h1 className="text-[26px] md:text-[32px] font-semibold text-[var(--main-color)]">
              {t("logo.p1")}{" "}
            </h1>
            <h1 className="text-[26px] md:text-[32px] font-semibold text-[var(--main-color)]">
              {t("logo.p2")}
            </h1>
          </div>
          <h3 className="text-[14px] md:text-[16px] text-gray-600">
            {t("contactUs.socialMedia")}
          </h3>
          <dev className="flex  gap-6">
            <a
              className="cursor-pointer hover:bg-gray-200 hover:shadow  rounded-full p-3 transition duration-300"
              href="https://x.com/companymovement"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={assets.xx} alt="" className="w-[20px] " />
            </a>
            <a
              className="cursor-pointer hover:bg-gray-200 hover:shadow  rounded-full p-3 transition duration-300"
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={assets.insta} alt="" className="w-[20px] " />
            </a>
          </dev>
        </dev>

        <div className="form flex flex-col w-full">
          <form
            onSubmit={onSubmit}
            className=" flex flex-col items-center bg-gray-50 w-full md:w-[550px] gap-4 border border-gray-500 px-5 py-2 md:py-8 rounded-xl"
          >
            <h3 className="text-[18px] md:text-[22px] font-semibold">
              {t("contactUs.header")}
            </h3>
            <div className="flex flex-col md:flex-row justify-between items-center w-full space-y-3 ">
              <div className="flex flex-col md:flex-row  w-full justify-between">
                <div className="flex flex-col space-y-[2px] w-full  mx-1">
                  <label className="text-[14px] md:text-[16px] text-[var(--sec-color)] font-semibold">
                    {t("contactUs.forms.name")}
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder={t("contactUs.forms.palsholderName")}
                    required
                    className="text-gray-900 border border-gray-400 shadow rounded ps-1.5 py-1 w-full outline-hidden placeholder:text-sm"
                  />
                </div>
                <div className="flex flex-col space-y-[2px]  w-full  mx-1">
                  <label className="text-[14px] md:text-[16px] text-[var(--sec-color)] font-semibold">
                    {t("contactUs.forms.email")}
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder={t("contactUs.forms.palsholderEmail")}
                    required
                    className="text-gray-900 border border-gray-400 shadow rounded ps-1.5 py-1 w-full outline-hidden placeholder:text-sm"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-[2px] w-full">
              <label className="text-[14px] md:text-[16px] text-[var(--sec-color)] font-semibold">
                {t("contactUs.forms.message")}
              </label>
              <textarea
                name="message"
                required
                rows={8}
                placeholder={t("contactUs.forms.palsholderMessage")}
                className="text-gray-900 border border-gray-400 shadow rounded ps-1.5 py-1 outline-hidden w-full placeholder:text-sm"
              ></textarea>
            </div>

            <button
              type="submit"
              className="px-5 py-1.5 bg-[var(--main-color)] text-white rounded-lg w-full cursor-pointer"
            >
              {t("contactUs.forms.CTA")}
            </button>
          </form>
          <span className="text-[14px] md:text-[18px] text-[var(--sec-color)] text-center pt-4">
            {result}
          </span>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
