import React, { useEffect } from "react";
import Slider from "../Components/Slider";
import Hero from "../Components/Hero";
import Decade from "../Components/Decade";
import TextComp from "../Components/TextComp";
import CustomCarousel from "../Components/CustomCarousel";
import Doctors from "../Components/Doctors";
import Appointment from "../Components/Appointment";
import Testimony from "../Components/Testimony";
import FAQs from "../Components/FAQs";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Hero />
      <Decade />
      <Slider />
      <CustomCarousel />
      <Doctors />
      <Appointment />
      <Testimony />
      <FAQs />
    </div>
  );
}
