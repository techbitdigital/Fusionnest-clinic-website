import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Footer() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <footer
      data-aos="zoom-in"
      className="bg-[#6E2C76] mt-10 lg:mt-0 p-5 pb-5 pt-20"
    >
      <div className="max-w-7xl lg:space-y-0 space-y-5 flex flex-col lg:flex-row justify-between  mb-16 m-auto">
        <div>
          <img className="w-[96px]" src="../../assets/logo.svg" alt="" />
          <p className="footerText lg:text-[16px] text-xl md:w-[294px] text-[#ffffffe0] my-3">
            We provide a wide range of assisted reproductive treatments. Our
            goal is to satisfy our customers
          </p>
          <div className="flex space-x-3 duration-700 transition text-[#ffffffe0]">
            <a
              target="_blank"
              href="https://www.facebook.com/fertiliy4all?mibextid=LQQJ4d"
            >
              <i className="fa-brands bg-[#672E71] p-2 h-8 w-8 flex items-center justify-center rounded-full fa-facebook-f"></i>
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/fusionnest_ivfcenter/"
            >
              <i className="fa-brands fa-instagram bg-[#672E71] p-2 h-8 w-8 flex items-center justify-center rounded-full"></i>
            </a>
            <a
              target="_blank"
              href="https://www.youtube.com/@fusionnestfertilitycentre3999"
            >
              <i className="fa-brands fa-youtube  bg-[#672E71] p-2 h-8 w-8 flex items-center justify-center rounded-full"></i>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/company/fusion-nest-fertility-centre"
            >
              <i className="fa-brands fa-linkedin bg-[#672E71] p-2 h-8 w-8 flex items-center justify-center rounded-full"></i>
            </a>

            {/* <i className="fa-brands fa-youtube  bg-[#672E71] p-2 h-8 w-8 flex items-center justify-center rounded-full"></i> */}
          </div>
        </div>
        <div className="footerText font-thin">
          <h3 className="lg:text-[16px] text-2xl mb-4 font-bold text-[#94A3B8]">
            COMPANY
          </h3>
          <ul className=" flex lg:text-[16px] text-xl flex-col space-y-4 text-[#ffffffe0]">
            <NavLink to="/aboutus">About Us</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/career">Career</NavLink>
            {/* <NavLink to="/blog">Blog</NavLink> */}
          </ul>
        </div>
        <div className="footerText">
          <h3 className="lg:text-[16px] text-2xl font-bold  text-[#94A3B8]">
            Head Office
          </h3>
          <p className="text-[#ffffffe0] lg:text-[16px] text-xl my-3 w-[261px]">
            No 3, Adebowale close, off Lola Holloway Omole phase 1 Estate, Near
            Ojodu Berger Lagos Nigeria
          </p>
          <h3 className="lg:text-[16px] text-2xl mb-4 font-bold text-[#94A3B8]">
            Open Hour
          </h3>
          <p className="text-[#ffffffe0] lg:text-[16px] text-xl w-[261px]">
            Mon-Fri: 8:00 a.m. – 5:00 p.m <br /> Sat: 9:00 a.m – 1:00 pm
          </p>
        </div>
        <div className="flex flex-col">
          <h3 className="mb-8 lg:text-[16px] text-2xl  font-bold text-[#94A3B8]">
            NewsLetter
          </h3>
          <input
            type="text"
            placeholder="Enter your email address"
            className="rounded-lg p-3"
          />
          <button className="px-16 py-3 hover:duration-700 hover:border-[#e3de65] hover:bg-transparent bg-[#e3de65] text-[#ffffffe0] rounded-lg mt-3">
            Subscribe Now
          </button>
        </div>
      </div>
      <hr className="max-w-7xl  m-auto" />
      <div className="flex justify-center mt-10 text-[14px] items-center text-[#ffffffe0] py-4">
        <p>&copy; 2024 FusionNest. All rights reserved • built by TechBiT</p>
      </div>
    </footer>
  );
}
