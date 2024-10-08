import React, { useEffect } from "react";



export default function () {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mb-20">
      <div className="mt-5 relative">
        <img
          draggable="false"
          onContextMenu={(e) => e.preventDefault()}
          className="object-cover xs:h-[100vh]  sm:h-[80vh] lg:h-[100vh] w-full"
          src="../../assets/abthero.svg "
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
            Our Services
          </h1>
          <h2 className="my-2">FUSION NEST FERTILITY CENTRE</h2>
          <p className="text-3xl lg:text-[36px] leading-[49px]">
            fertility management. We specialize in a wide array of medical
            fields pertaining to <br className="hidden lg:block" /> IVF and have
            the best facilities.
          </p>
        </div>
      </div>
    </div>
  );
}
