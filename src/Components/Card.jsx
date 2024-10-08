import React from "react";

export default function Card({ srcPath, button, paragraph, h1Intro, paragraph2 }) {
  return (
    <div className=" max-w-7xl m-auto mb-10">
      <div className="lg:w-[403px] h-[399.2px] rounded-lg p-2 lg:p-4 cardcomp">
        <img className="w-full object-cover h-[205px]" src={srcPath} alt="" />
        <p className="fertility uppercase mt-6 mb-3">{paragraph}</p>
        <h1 className="InVitro capitalize my-2">{h1Intro}</h1>
        <p className="paragraph">{paragraph2}</p>
        {/* <button className="appointBtn  ">{button}</button> */}
      </div>
    </div>
  );
}
