import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HeroCard() {
  useEffect(() => {
    AOS.init({ duration: 700 });
    AOS.refresh();
  }, []);
  return (
    <div className="flex flex-col md:flex-row items-center ">
      <div data-aos="fade-left"  className=" bg-white lg:rounded-l-lg lg:rounded-r-none rounded-t-lg  p-5 px-10 h-[220px] w- md:w-[253px] w-[283px] lg:w-[300px] shadow-lg">
        <h1 className="mont lg:text-[93.6px] text-[73.6px]">70%</h1>
        <h3 className="high ">High Success Rate</h3>
        <p className="herocardp">
          Achieve your dream of parenthood with our expert care.
        </p>
      </div>
      <div data-aos="fade-up"  className=" years rounded-lg  lg:p-2 p-5 w-[320px] md:w-[253px] lg:w-[300px] h-[257px] shadow-lg">
        <h1 className="card2">10+</h1>
        <h3 className=" my-3 card2h3">Years of Experience</h3>
        <p className=" text-center">
          Trusted expertise in fertility treatments.
        </p>
      </div>
      <div data-aos="fade-right"  className=" bg-white lg:rounded-r-lg lg:rounded-l-none rounded-b-lg p-3 h-[220px] lg:w-[300px] md:w-[253px] w-[283px] shadow-lg">
        <h1 className="mont lg:text-[93.6px] text-[73.6px]">1000+</h1>
        <h3 className="high ">Happy Families</h3>
        <p className="herocardp">
          Join the many families who have found success with us.
        </p>
      </div>
    </div>
  );
}
