import React from "react";

export default function () {
  return (
    <div className="mb-20">
      <div className="mt-5 relative">
        <img
          draggable="false"
          onContextMenu={(e) => e.preventDefault()}
          className="object-cover xs:h-[100vh]  sm:h-[80vh] lg:h-[100vh] w-full"
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
        <div className="absolute text-center prop text-white inset-0 flex flex-col mt-36 lg:mt-48 items-center">
          <h1 className=" text-[#9ACB3B] text-[40px] font-extrabold">
            About Us
          </h1>
          <h2 className="my-2">FUSION NEST FERTILITY CENTRE</h2>
          <p className="text-3xl lg:text-[36px]">
            is a Clinic that offers dedicated specialised services in{" "}
            <br className="hidden lg:block" />
            fertility management.
          </p>
        </div>
      </div>
    </div>
  );
}
