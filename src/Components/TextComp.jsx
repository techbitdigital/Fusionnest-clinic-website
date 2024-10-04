import React from "react";

export default function TextComp({ h1, text }) {
  return (
    <div className="text-center">
      <h1 className="textcomph1 ">{h1}</h1>
      <p className="textcompp lg:[155px] lg:p-0 p-3 text-justify lg:text-center mx-auto">{text}</p>
    </div>
  );
}
