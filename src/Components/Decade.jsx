import React from "react";

export default function Decade() {
  return (
    <div className="lg:my-36 my-16 max-w-7xl m-auto flex flex-col lg:flex-row lg:p-0 p-3 items-center gap-[39px]">
      <img
        draggable="false"
        onContextMenu={(e) => e.preventDefault()}
        src="../../assets/decade.svg"
        alt=""
      />
      <div>
        <h2 className="text-center lg:text-[30px] text-2xl decade space-x-1 flex ">
          Over a  
          <span className="text-[#68CA05] hidden px-3 lg:flex flex-col">
            Decade
            <img
              draggable="false"
              onContextMenu={(e) => e.preventDefault()}
              src="../../assets/Vector.svg"
              alt=""
              className="w-[80%] m-auto"
            />
          </span>
          <span className="text-[#68CA05] lg:hidden px-2 ">Decade</span>
          
          of Medical
        </h2>
        <h1 className="decade lg:text-[30px] text-2xl">Excellence</h1>
        <p className="decadep my-5">
          We are a team of medical researchers and practitioners who work hard
          to provide effective treatments in our point-of-care facilities. We
          provide comprehensive fertility services, from diagnosis to treatment,
          with the ultimate goal of helping individuals or couples achieve a
          successful pregnancy.
        </p>
        {/* <div className="flex space-x-5">
          <h3 className="text-2xl flex items-center gap-2 intra">
            <i className=" fa-solid fa-check"></i>
            Intracytoplasmic Sperm Injection
          </h3>
          <h3 className="text-2xl flex items-center gap-2 intra">
            <i className="fas fa-solid fa-check"></i>
            In-vitro Fertilization
          </h3>
          <h3 className="text-2xl flex items-center gap-2 intra">
            <i className=" fa-solid fa-check"></i>
            Egg Donation
          </h3>
        </div>
        <div className="flex mt-5 space-x-5">
          <h3 className="text-2xl flex items-center gap-2 intra">
            <i className=" fa-solid fa-check"></i>
            Intrauterine Insemination
          </h3>
          <h3 className="text-2xl flex items-center gap-2 intra">
            <i className="fas fa-solid fa-check"></i>
            Sex Selection
          </h3>
          <h3 className="text-2xl flex items-center gap-2 intra">
            <i className=" fa-solid fa-check"></i>
            Sperm Donation
          </h3>
        </div> */}
        <button className="aptbtn rounded-lg mt-5">Book Appointment</button>
      </div>
    </div>
  );
}
