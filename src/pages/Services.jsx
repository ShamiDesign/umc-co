import React from "react";
import AirportS from "../Component/Home/AirportS";
import PassengersSrv from "../Component/Services/PassengersSrv";
import ServicesGroup from "../Component/Services/ServicesGroup";

const Services = () => {
  return (
    <section >
      
      <PassengersSrv />
      <ServicesGroup />
    </section>
  );
};

export default Services;
