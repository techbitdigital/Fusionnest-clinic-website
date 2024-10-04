import React from "react";

export default function Doctors() {
  return (
    <div className="p-2">
      <div className="text-center p-2 lg:p-0">
        <h1 className="meet text-4xl leading-10 lg:leading-[65.8px]  lg:text-[47px]">
          Meet Our Certified Doctors
        </h1>
        <p className="textcompp text-[18px]">
          Our team of fertility specialists and compassionate staff are
          dedicated to <br className="lg:block hidden"/> providing personalized care and support.
        </p>
      </div>

      <div className="flex text-white justify-center items-center lg:items-start flex-col lg:flex-row lg:space-y-0 space-y-5 lg:space-x-9 my-10 lg:my-20">
        <div className=" absolute  w-full h-full"></div>
        <div className="relative  group">
          <div className="overlaydark w-full h-full absolute inset-0 rounded-lg"></div>
          <img
            draggable="false"
            onContextMenu={(e) => e.preventDefault()}
            src="../../assets/ogundimu.svg"
            alt="DR. OGUNDIMU EBENEZER O"
            className="transition-transform duration-300 "
          />
          <div className="absolute bottom-32 lg:bottom-10 left-0 right-0 text-center transition-all duration-300 group-hover:bottom-20">
            <h3 className="text-center text-xl font-bold">
              DR. OGUNDIMU EBENEZER O
            </h3>
            <p className="text-sm">Obstetrics and Gynecology</p>
          </div>
          <button className="absolute bottom-5 left-1/2 transform -translate-x-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-white text-[#6e2c76]  font-semibold px-10 py-2 rounded-full">
            See Bio
          </button>
        </div>

        {/* Second Doctor */}
        <div className="relative group">
          <div className="overlaydark w-full h-full absolute inset-0 rounded-lg"></div>
          <img
            draggable="false"
            onContextMenu={(e) => e.preventDefault()}
            src="../../assets/dapoSoyinka.svg"
            alt="DR. DAPO SOYINKA"
            className="transition-transform duration-300 "
          />
          <div className="absolute over bottom-32 lg:bottom-10 left-0 right-0 text-center transition-all duration-300 group-hover:bottom-20">
            <h3 className="text-center text-xl font-bold">DR. DAPO SOYINKA</h3>
            <p className="text-sm">Obstetrics and Gynecology</p>
          </div>
          <button className="absolute bottom-5 left-1/2 transform -translate-x-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-white text-[#6e2c76] font-semibold  px-10 py-2 rounded-full">
            See Bio
          </button>
        </div>
      </div>
    </div>
  );
}
