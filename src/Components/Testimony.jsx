import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Testimony() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="flex lg:justify-between justify-center p-2 lg:p-0 flex-col lg:flex-row my-16 lg:my-36 max-w-7xl m-auto">
      <div data-aos="fade-up"  className="">
        <h2 className="font-semibold text-[#263D7B] leading-[52.96px] text-[40px]">
          Stories
          <span className=" ml-3 font-bold">
            of Hope & <br /> Success
          </span>
        </h2>
        <p className="text-[#808080] lg:w-[400px] xl:w-[539px] lg:text-[16px] my-3 xl:text-lg">
          Hear from our patients who have experienced the joy of starting their
          families with the support of Fusion Nest. From diagnosis to treatment,
          our personalized care has helped families to grow.
        </p>
        <button className="border hover:bg-[#6E2C76] hover:text-white duration-700  transition-all mb-5 lg:mb-0 border-[#E3DE65] text-[#6E2C76]  p-2 px-8 text-lg rounded-lg">
          View All Testimonials
        </button>
      </div>
      <div className="space-y-10">
        <div data-aos="fade-down"  className="bg-[#6E2C761A] p-5 rounded-lg flex-col lg:flex-row flex lg:space-x-5 text-lg">
          <img
            draggable="false"
            onContextMenu={(e) => e.preventDefault()}
            src="../../assets/testimg1.svg"
            alt=""
          />
          <div>
            <h1 className="font-bold text-lg  mt-5 lg:mt-0">Mrs K.O</h1>
            <p className="xl:w-[368px] xl:text-lg lg:text-[16px] text-[#848484]">
              I am 40years old; I have been married for eight years and I have
              been trying to get pregnant since then. I was referred to fusion
              nest clinic by a friend who had a successful IVF treatment. almost
              given up hope but fusion nest helped us realize our dream of
              becoming parents.
            </p>
          </div>
        </div>
        <div data-aos="fade-up"  className="bg-[#6E2C761A] p-5 rounded-lg flex-col lg:flex-row flex lg:space-x-5 text-lg">
          <img
            draggable="false"
            onContextMenu={(e) => e.preventDefault()}
            src="../../assets/testimg2.svg"
            alt=""
          />
          <div>
            <h1 className="font-bold text-lg mt-5 lg:mt-0">Mrs Okeke</h1>
            <p className="xl:w-[368px] xl:text-lg lg:text-[16px] text-[#848484]">
              I can't express how grateful I am to the entire team at Fusion
              Nest Clinic for the exceptional care I received during my IVF
              treatment. After my surgery, I was placed on medication to prepare
              me for the next steps, and the support I got from the staff was
              remarkable. They guided me through every part of the process with
              patience and understanding.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
