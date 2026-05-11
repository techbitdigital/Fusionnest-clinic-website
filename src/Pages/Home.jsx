import React, { useEffect } from "react";
import useSEO from "../hooks/useSEO";
import seoConfig from "../hooks/seoConfig";
import Slider from "../Components/Slider";
import Hero from "../Components/Hero";
import Decade from "../Components/Decade";
import TextComp from "../Components/TextComp";
import Slick from "../Components/Slick";
import Doctors from "../Components/Doctors";
import Appointment from "../Components/Appointment";
import Testimony from "../Components/Testimony";
import FAQs from "../Components/FAQs";

export default function Home() {
  useSEO(seoConfig.home);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Hero />
      <Decade />
      <Slider />
      <Slick />
      <Doctors />
      <Appointment />
      <Testimony />
      <FAQs />
    </div>
  );
}
