import React from "react";

export default function HeroCard() {
  return (
    <div className="flex flex-col lg:flex-row items-center ">
      <div className=" bg-white rounded-l-lg  p-5 px-10 h-[220px] w-[283px] shadow-lg">
        <h1 className="mont">85%</h1>
        <h3 className="high">High Success Rate</h3>
        <p className="herocardp">
          Achieve your dream of parenthood with our expert care.
        </p>
      </div>
      <div className=" years rounded-lg  p-5 w-[320px] h-[257px] shadow-lg">
        <h1 className="card2">20+</h1>
        <h3 className=" my-3 card2h3">Years of Experience</h3>
        <p className="">Trusted expertise in fertility treatments.</p>
      </div>
      <div className=" bg-white rounded-r-lg  p-3 h-[220px] w-[283px] shadow-lg">
        <h1 className="mont">100+</h1>
        <h3 className="high">Happy Families</h3>
        <p className="herocardp">
          Join the many families who have found success with us.
        </p>
      </div>
    </div>
  );
}
