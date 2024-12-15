import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function () {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="mb-20">
      <div data-aos="zoom-out" className="mt-5 relative">
        <img
          draggable="false"
          onContextMenu={(e) => e.preventDefault()}
          className="object-cover xs:h-[100vh]  sm:h-[50vh] lg:h-[100vh] w-full"
          src="../../assets/aboutHero.svg "
          alt="Nurse image"
        />
        <div className="w-full object-cover h-full inset-0 absolute">
          <img
            draggable="false"
            onContextMenu={(e) => e.preventDefault()}
            className="w-full object-cover h-full inset-0 absolute"
            src="../../assets/overlayAbt.svg"
            alt=""
          />
        </div>
        <div className="absolute text-center px-3 prop text-white inset-0 flex flex-col mt-36 lg:mt-48 items-center">
          <h1 className=" text-[#e3de65] text-[40px] font-extrabold">
            About Us
          </h1>
          <h2 className="my-2 fusion lg:text-[25px]">
            FUSION NEST FERTILITY CENTRE
          </h2>
          <p className="text-3xl fusion lg:text-[25px]">
            is a Clinic that offers dedicated specialised services in fertility <span className="md:hidden">management</span>  
            <p className="text-3xl md:block hidden fusion lg:text-[25px]">management</p>
          </p>
        </div>
      </div>
    </div>
  );
}
