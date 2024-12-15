import React from "react";

export default function OurVision() {
  return (
    <div className=" bg-[#e3de65] lg:h-[400px] relative mb-20  lg:rounded-[36px] max-w-6xl m-auto p-2 lg:px-32 py-20 lg:py-20">
      <div className="max-w-7xl mx-auto lg:flex lg:justify-between item-center ">
        <div
          data-aos="fade-up"
          className="text-center mb-10 lg:mb-0 py-5 lg:py-0 space-y-4 lg:mt-0 lg:shadow-none lg:border-0 shadow-lg rounded-2xl lg:p-0 p-2"
        >
          <div
            data-aos="fade-down"
            className=" flex items-center justify-center"
          >
            <img src="/assets/mission.svg" alt="Vision Icon" />
          </div>
          <h2 className="font-bold text-[#000] text-2xl">
            OUR MISSION STATEMENT
          </h2>
          <p className="font-[400]  lg:w-[412px]   text-[18px] text-[#000]">
            To provide qualitative consultancy services in fertility management
            in making every woman a mother
          </p>
        </div>
        <div className="hidden mt-10 lg:block border border-[#c4c4c48b] w-[1px] h-40"></div>
        <div
          data-aos="fade-down"
          className="text-center mb-10 lg:mb-0 py-5 lg:py-0 space-y-4 lg:mt-0 lg:shadow-none lg:border-0 shadow-lg rounded-2xl lg:p-0 p-2"
        >
          <div className=" flex items-center justify-center">
            <img src="/assets/eye.png" alt="Vision Icon" />
          </div>
          <h2 className="font-bold text-[#000] text-2xl">
            OUR VISION STATEMENT
          </h2>
          <p className="font-[400]  lg:w-[412px]   text-[18px] text-[#000]">
            To be the ideal and preferred care provider in advance fertility &
            reproductive service in Africa
          </p>
        </div>
      </div>
      <div data-aos="fade-up" className="absolute myAnim right-3 top-5">
        <img src="/assets/Quote.svg" alt="" />
      </div>
      <div data-aos="zoom-in" className="absolute right-0 bottom-0 ">
        <img className="lg:rounded-br-[36px]" src="/assets/bubble.svg" alt="" />
      </div>
    </div>
  );
}
