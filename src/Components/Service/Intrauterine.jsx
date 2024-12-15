import React, { useEffect } from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import AOS from "aos";
import "aos/dist/aos.css";


export default function Intrauterine() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
      useEffect(() => {
        AOS.init({ duration: 700 });
        AOS.refresh();
      }, []);
      
  return (
    <div className="lg:mb-40 lg:mt-0 mt-28">
      <div data-aos="fade-down" className="lg:mt-5 relative">
        <img
          draggable="false"
          onContextMenu={(e) => e.preventDefault()}
          className=""
          src="../../assets/insemination.svg "
          alt="Nurse image"
        />
        <div className="w-full overlay-container2 h-full inset-0 absolute"></div>
        <div className="absolute text-center prop text-white inset-0 flex flex-col justify-center items-center">
          <h1 className=" text-[#fff] text-[40px] font-extrabold">
            Intrauterine-Insemination
          </h1>
        </div>
      </div>
      <div data-aos="fade-down" className="hidden lg:block lg:mt-20 rounded-lg  max-w-5xl m-auto">
        <Breadcrumb
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
        >
          <BreadcrumbItem>
            {/* <NavLink to="/blog"></NavLink> */}
            <BreadcrumbLink className="text-2xl font-bold" href="/services">
              Services
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink>Intrauterine-Insemination</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className=" lg:mt-20 rounded-lg  max-w-5xl m-auto  bg-white ">
        <div data-aos="fade-down" className="lg:p-10 p-3">
          <h3 className="ivf mt-5 lg:mt-0 lg:text-lg w-full text-2xl">
            Intrauterine insemination Fertility Treatment (IUI)
          </h3>
          <p className="ivfPara text-justify mt-5">
            Intrauterine insemination (IUI) is a Fertility treatment that
            involves placing the sperm inside a woman’s uterus to facilitate
            fertilization. The goal of IUI is to increase the number of sperm
            that reaches the fallopian tube and subsequently increase the
            chances of fertilization. IUI provides the sperm an advantage by
            giving it a head start, but still requires a sperm to reach and
            fertilize the egg on its own. It is a less invasive and less
            expensive option compared to IVF.
          </p>
        </div>
        <div className="w-full h-full border  bg-[#D9D9D9]"></div>
        <div data-aos="fade-up" className="lg:p-10 p-3">
          <h3 className="ivf text-center lg:text-left mt-5 lg:mt-0 lg:text-lg w-full text-2xl">
            IUI Treatment Process/Procedure
          </h3>
          <p className="ivfPara text-justify mt-5">
            First you undergo an assessment screening. This assessment screening{" "}
            <br className="hidden lg:block" /> normally covers the following:
          </p>
          <ul className="ivfList custom-disc list-disc ml-5 font-light text-justify mt-5">
            <li>AMH</li>
            <li>SFA</li>
            <li>Infection Screening and HSG </li>
          </ul>
        </div>
        <div data-aos="fade-down" className="lg:px-10 px-3 ">
          <h3 className="ivf mt-5 lg:mt-0 text-center lg:text-start lg:text-lg w-full text-2xl">
            After your assessment screening, then the following
          </h3>
          <ul className="ivfList space-y-4 custom-disc list-disc ml-5 font-light text-justify mt-5">
            <li>We wait for you to start your cycle</li>
            <li>
              Then you start taking your drugs on the second day of your cycle.
            </li>
            <li>Start your injection on the 5th day of your cycle</li>
            <li>Then your folliculometry</li>
            <li>
              Once all the follicles are matured, then you will get a trigger
              injection
            </li>
            <li>
              first insemination is done 24hrs/36hrs after trigger injection
            </li>
            <li>
              There could be a second insemination if the couples so desire.
            </li>
          </ul>
        </div>
        <div className="w-full my-5 h-full border  bg-[#D9D9D9]"></div>
         <div class="spacer  h-60  border-[#D9D9D9]"></div>
      </div>
    </div>
  );
}
