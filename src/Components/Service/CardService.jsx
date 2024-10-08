import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function CardService({
  srcPath,
  button,
  paragraph,
  h1Intro,
  paragraph2,
  to,
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className=" max-w-7xl m-auto mb-10">
      <div className="lg:w-[403px] relative h-[450.2px] rounded-lg p-2 lg:p-4 cardcomp">
        <img
          className="w-full hover:scale-105 duration-700 object-cover h-[205px]"
          src={srcPath}
          alt=""
        />
        <p className="fertility uppercase my-3">{paragraph}</p>
        <h1 className="InVitro capitalize my-2">{h1Intro}</h1>
        <p className="paragraph">{paragraph2}</p>

        <NavLink
          to={to}
          className="appointBtn  absolute bottom-5 px-5 rounded-lg py-2"
        >
          {button}
        </NavLink>
      </div>
    </div>
  );
}
