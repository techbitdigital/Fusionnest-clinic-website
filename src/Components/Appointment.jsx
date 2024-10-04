import React from "react";

export default function Appointment() {
  return (
    <>
      <div className="mt-20 relative">
        <img
          className="object-cover h-[100vh] w-full"
          src="../../assets/nurseimg.jpeg"
          alt="Nurse image"
        />
        <div className="overlayApp w-full h-full inset-0 absolute"></div>
        <div className="absolute inset-0 flex flex-col mt-32 items-center text-white">
          <img src="../../assets/pills.svg" alt="Pills icon" className="mb-4" />
          <h1 className="appointment text-4xl font-bold">Book Appointment</h1>
          <p className="convenient text-lg mt-5">
            Convenient appointment at your fingertips
          </p>
        </div>
      </div>

      <div className="relative mb-20 z-20">
        <div className="bg-white flex-col lg:flex-row -mt-40 appshadow flex items-center  lg:w-[70%] m-auto lg:pl-10 rounded-lg">
          <img
            draggable="false"
            onContextMenu={(e) => e.preventDefault()}
            src="../../assets/nurse.svg"
            alt="Nurse icon"
            className="mr-10"
          />
          <div>
            <p className="flex my-5 lg:my-0 justify-center lg:justify-start items-center gap-3 call">
              <i className="text-white hidden bg-[#263D7B] w-12 h-12  lg:flex justify-center items-center rounded-full fa-solid fa-phone"></i>
              Call Us: +234 904 0170 025
            </p>
            <div className="lg:block flex flex-col items-center justify-center lg:space-x-5">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-[#263D7B0A] outline-none p-4 mt-5 w-[278px]"
              />
              <input
                type="text"
                placeholder="Your Phone"
                className="bg-[#263D7B0A] outline-none p-4 mt-5 w-[278px]"
              />
            </div>
            <div className="lg:block flex flex-col items-center justify-center lg:space-x-5">
              <input
                type="text"
                placeholder="Email Address"
                className="bg-[#263D7B0A] outline-none p-4 mt-5 w-[278px] "
              />
              <input
                type="date"
                placeholder="Date"
                className="bg-[#263D7B0A] outline-none p-4 mt-5 w-[278px]"
              />
            </div>
            <div className="lg:block pb-10 lg:pb-0 flex flex-col items-center justify-center lg:space-x-5">
              <select className="bg-[#263D7B0A] outline-none p-4 mt-5 w-[278px]">
                <option value="" disabled selected hidden>
                  Select Service
                </option>
                <option value="option1">
                  Intracytoplasmic Sperm Injection
                </option>
                <option value="option2">In-vitro Fertilization</option>
                <option value="option3">Egg Donation</option>
                <option value="option3">Intrauterine Insemination</option>
                <option value="option3">Sex Selection</option>
                <option value="option3">Sperm Donation</option>
              </select>

              <button className="bg-[#2D4493] outline-none p-3 mt-5 float-end rounded-full text-white px-8">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
