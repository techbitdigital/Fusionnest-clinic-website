import React from "react";

export default function OurVision() {
  return (
    <div className=" bg-[#1D4ED8] relative mb-20  lg:rounded-[36px] max-w-6xl m-auto p-2 lg:px-10 py-20 lg:py-20">
      <div className="max-w-7xl mx-auto lg:flex lg:justify-between item-center ">
        <div className="text-center mb-10 lg:mb-0 py-5 lg:py-0 space-y-4 lg:mt-0 shadow-[#6E2C76] lg:shadow-none lg:border-0 shadow-lg rounded-2xl lg:p-0 p-2">
          <div className=" flex items-center justify-center">
            <img src="/assets/mission.svg" alt="Vision Icon" />
          </div>
          <h2 className="font-bold text-[#ffffff] text-2xl">
            OUR MISSION STATEMENT
          </h2>
          <p className="font-[400]  lg:w-[412px]  xl:w-[517px] text-[18px] text-[#ffffff]">
            To provide qualitative consultancy services in fertility management
            in making every woman a mother
          </p>
        </div>
        <div className="hidden mt-10 lg:block border border-[#c4c4c48b] w-[1px] h-40"></div>
        <div className="text-center mb-10 lg:mb-0 py-5 lg:py-0 space-y-4 lg:mt-0 shadow-[#6E2C76] lg:shadow-none lg:border-0 shadow-lg rounded-2xl lg:p-0 p-2">
          <div className=" flex items-center justify-center">
            <img src="/assets/eye.svg" alt="Vision Icon" />
          </div>
          <h2 className="font-bold text-[#ffffff] text-2xl">
            OUR VISION STATEMENT
          </h2>
          <p className="font-[400]  lg:w-[412px]  xl:w-[517px] text-[18px] text-[#ffffff]">
            To be the ideal and preferred care provider in advance fertility &
            reproductive service in Africa
          </p>
        </div>
      </div>
      <div className="absolute myAnim right-3 top-5">
        <img src="/assets/Quote.svg" alt="" />
      </div>
    </div>
  );
}
