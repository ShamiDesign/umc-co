import Logo from "./image/logo/co1.png";
import wLogo from "./image/logo/W-CO.png";
import bg from "./image/BG.jpg";
import image1 from "./image/Slider/02.png";
import image2 from "./image/Slider/01.png";
import image3 from "./image/Slider/03.png";
import image4 from "./image/Slider/04.png";
import image5 from "./image/Slider/05.png";
import drvSuc from "./image/allService/001.png";
import haj1 from "./image/HajAndOmra/Haj-0.png";
import haj2 from "./image/HajAndOmra/Haj-1.png";
import haj3 from "./image/HajAndOmra/Haj-2.png";
import omra1 from "./image/HajAndOmra/Omia-1.png";
import omra2 from "./image/HajAndOmra/omra-2.png";
import omra3 from "./image/HajAndOmra/omra-3.png";
import omra4 from "./image/HajAndOmra/omra-4.png";
import quality from "./image/quality-tick.jpg";
import airport1 from "./image/Airports/01 Abdelazez.png";
import airport2 from "./image/Airports/02 Teba.png";
import airport3 from "./image/Airports/03 Fahd.png";
import airport4 from "./image/Airports/04 Khaled.png";
import srvimage1 from "./image/SrvImages/05.png";
import srvimage2 from "./image/SrvImages/03.png";
import srvimage5 from "./image/SrvImages/04.png";
import hamalen from "./image/SrvImages/Hmalen2.png";
import genral from "./image/SrvImages/generl.png";
import trafic from "./image/SrvImages/Mawqf.jpg";
import Baggage from "./image/SrvImages/Taghlef.jpg";
import prm from "./image/SrvImages/PRM.png";
import arheb from "./image/Arheb.png";
import AboutArheb1 from "./image/AboutArheb/1.png";
import AboutArheb2 from "./image/AboutArheb/2.png";
import AboutArheb3 from "./image/AboutArheb/3.png";
import AboutArheb4 from "./image/AboutArheb/4.png";
import AboutArheb5 from "./image/AboutArheb/5.png";
import gImage1 from "./image/G1/image1.png";
import gImage2 from "./image/G1/image2.png";
import gImage3 from "./image/G1/image3.png";
import gImage4 from "./image/G1/image4.png";
import gImage5 from "./image/G1/image5.png";
import xx from "./image/x.png";
import insta from "./image/insta.png";
import oImage1 from "./image/G2/buoewp.png";
import oImage2 from "./image/G2/bvnrthi.png";
import oImage3 from "./image/G2/vfioefhio.png";
import oImage4 from "./image/G2/di5jobdh.png";
import oImage5 from "./image/G2/DSC_2749.png";
import AImage1 from "./image/G2/DSC_3130.png";
import AImage2 from "./image/G2/dfghoiuy00.png";
import AImage3 from "./image/G2/gtfdg.png";
import AImage4 from "./image/G2/hjjhgdghh00.png";
import AImage5 from "./image/G2/Taghlef000.jpg";

import {
  FaPlane,
  FaUserGraduate,
  FaCheckCircle,
  FaHandshake,
  FaCogs,
} from "react-icons/fa";

export const assets = {
  Logo,
  wLogo,
  bg,
  drvSuc,
  haj1,
  haj2,
  haj3,
  quality,
  arheb,
  xx,
  insta,
};

export const srvimage = [srvimage1, srvimage2, srvimage5];

export const images = [image1, image2, image3, image4, image5];

export const Airpoarts = [
  { nameKey: "Airports.itemsAirPorts.airportName1", logoKey: airport1 },
  { nameKey: "Airports.itemsAirPorts.airportName2", logoKey: airport2 },
  { nameKey: "Airports.itemsAirPorts.airportName3", logoKey: airport3 },
  { nameKey: "Airports.itemsAirPorts.airportName4", logoKey: airport4 },
];

export const umrah = { omra1, omra2, omra3, omra4 };

export const navLinks = [
  { nameKey: "navlinks.home", pathKey: "/" },
  { nameKey: "navlinks.Services", pathKey: "/Services" },
  { nameKey: "navlinks.wNew", pathKey: "/NewS" },
  { nameKey: "navlinks.gallery", pathKey: "/Gallery" },
  { nameKey: "navlinks.contactUs", pathKey: "ContactUs" },
];
export const WhyChooesUs = [
  { titleKey: "WhyChooesUs.titleKey1", iconKey: FaPlane },
  { titleKey: "WhyChooesUs.titleKey2", iconKey: FaUserGraduate },
  { titleKey: "WhyChooesUs.titleKey3", iconKey: FaCheckCircle },
  { titleKey: "WhyChooesUs.titleKey4", iconKey: FaHandshake },
  { titleKey: "WhyChooesUs.titleKey5", iconKey: FaCogs },
];
export const bodyOfArray = [
  { titleKey: "PassengerSrv.arrayOfSrv.bodyOfArray.item1", iconKey: "" },
  { titleKey: "PassengerSrv.arrayOfSrv.bodyOfArray.item2", iconKey: "" },
  { titleKey: "PassengerSrv.arrayOfSrv.bodyOfArray.item3", iconKey: "" },
  { titleKey: "PassengerSrv.arrayOfSrv.bodyOfArray.item4", iconKey: "" },
  { titleKey: "PassengerSrv.arrayOfSrv.bodyOfArray.item5", iconKey: "" },
  { titleKey: "PassengerSrv.arrayOfSrv.bodyOfArray.item6", iconKey: "" },
];
export const SrvGroup = [
  {
    titleKey: "SrvGroup.MainRespons.title",
    bodyKey: "SrvGroup.MainRespons.body",
    logoKey: hamalen,
  },
  {
    titleKey: "SrvGroup.PorterSrv.title",
    bodyKey: "SrvGroup.PorterSrv.body",
    logoKey: genral,
  },
  {
    titleKey: "SrvGroup.AirportTraffic.title",
    bodyKey: "SrvGroup.AirportTraffic.body",
    logoKey: trafic,
  },
  {
    titleKey: "SrvGroup.wrapping.title",
    bodyKey: "SrvGroup.wrapping.body",
    logoKey: Baggage,
  },
  {
    titleKey: "SrvGroup.PRM.title",
    bodyKey: "SrvGroup.PRM.body",
    logoKey: prm,
  },
];
export const arrayPfBody = [
  {
    titleKey: "BaggageSrv.body.arrayPfBody.item1.head",
    bodyKey: "BaggageSrv.body.arrayPfBody.item1.info",
  },
  {
    titleKey: "BaggageSrv.body.arrayPfBody.item2.head",
    bodyKey: "BaggageSrv.body.arrayPfBody.item2.info",
  },
  {
    titleKey: "BaggageSrv.body.arrayPfBody.item3.head",
    bodyKey: "BaggageSrv.body.arrayPfBody.item3.info",
  },
  {
    titleKey: "BaggageSrv.body.arrayPfBody.item4.head",
    bodyKey: "BaggageSrv.body.arrayPfBody.item4.info",
  },
];

export const aboutArheb = [
  {
    titleKey: "aboutArheb.item1.title",
    infoKey: "aboutArheb.item1.info",
    iconKey: AboutArheb1,
  },
  {
    titleKey: "aboutArheb.item2.title",
    infoKey: "aboutArheb.item2.info",
    iconKey: AboutArheb2,
  },
  {
    titleKey: "aboutArheb.item3.title",
    infoKey: "aboutArheb.item3.info",
    iconKey: AboutArheb3,
  },
  {
    titleKey: "aboutArheb.item4.title",
    infoKey: "aboutArheb.item4.info",
    iconKey: AboutArheb4,
  },
  {
    titleKey: "aboutArheb.item5.title",
    infoKey: "aboutArheb.item5.info",
    iconKey: AboutArheb5,
  },
];
export const gairportsS = [gImage1, gImage2, gImage3, gImage4, gImage5];
export const operation = [oImage1, oImage2, oImage3, oImage4, oImage5];
export const AImagea = [AImage1, AImage2, AImage3, AImage4, AImage5];
