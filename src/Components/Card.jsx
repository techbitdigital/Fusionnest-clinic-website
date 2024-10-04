import React from "react";

export default function Card({ srcPath, paragraph, h1Intro, paragraph2 }) {
  return (
    <div className=" max-w-7xl m-auto my-20">
      <div className="lg:w-[403px] h-[399.2px] rounded-lg p-2 lg:p-4 cardcomp">
        <img className="w-full object-cover h-[205px]" src={srcPath} alt="" />
        <p className="fertility uppercase my-3">{paragraph}</p>
        <h1 className="InVitro capitalize my-2">{h1Intro}</h1>
        <p className="paragraph">{paragraph2}</p>
      </div>
    </div>
  );
}