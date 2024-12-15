import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function TextComp({ h1, text }) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="text-center">
      <h1 className="textcomph1 ">{h1}</h1>
      <p className="textcompp lg:[155px] lg:p-0 p-3 text-justify lg:text-center mx-auto">{text}</p>
    </div>
  );
}
