import React from "react";

export default function WhoWeAre() {
  return (
    <div className="flex flex-col p-2 lg:p-0 lg:flex-row my-10 max-w-7xl gap-[60px] m-auto items-center">
      <img className="" src="../../assets/who.svg" alt="" />
      <div className=" space-y-5">
        <div className="flex items-center">
          <div className="bg-[#D4E4F6] p-2">
            <div className="w-2.5 h-2.5 bg-[#6E2C76]"></div>
          </div>
          <h1 className="who lg:text-lg text-3xl ml-3">Who We Are</h1>
        </div>
        <h2 className="provide lg:leading-[55.2px] lg:text-[40px] text-3xl">
          We Provide The Best Fertility Management Services
        </h2>
        <p className="text-[#404653] lg:text-left text-justify fusion">
          FUSION NEST FERTILITY CENTRE is a Clinic that offers dedicated
          specialized services in fertility management. it is managed by a group
          of consultants in obstetrics & gynecology. They are internationally
          trained actively in pratice and in tune with modern trends &
          development in this ever evolving specility. Fusion nest Fertility
          Centre, is committed to providing state of the art Assisted
          Reproductive Technique (ART) such as IVF, ICSI, etc, at extremely
          affordable cost with a resultant high pregnancy rate in a very
          conducive and comfortable atmosphere. We focus more on solution
          (getting the infertile couple pregnant) rather than the problems. (
          Doing endless investigations and tests).
        </p>
        <button className="border border-[#6E2C76] text-[#6E2C76]  p-2 px-8 text-lg rounded-lg">
          Book Appointment
        </button>
      </div>
    </div>
  );
}
