import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Card({ srcPath, button, paragraph, h1Intro, paragraph2 }) {
  useEffect(() => {
    AOS.init({ duration: 700 });
    AOS.refresh();
  }, []);
  return (
    <div className=" max-w-7xl m-auto mb-10">
      <div data-aos="zoom-out" className="xl:w-[403px] lg:w-[353px] h-[399.2px] rounded-lg p-2 lg:p-4 cardcomp">
        <img className="w-full object-cover h-[205px]" src={srcPath} alt="" />
        <p className="fertility uppercase mt-6 mb-3">{paragraph}</p>
        <h1 className="InVitro capitalize my-2">{h1Intro}</h1>
        <p className="paragraph">{paragraph2}</p>
        {/* <button className="appointBtn  ">{button}</button> */}
      </div>
    </div>
  );
}
