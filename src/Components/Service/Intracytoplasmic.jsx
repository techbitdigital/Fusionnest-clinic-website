import React, { useEffect } from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import AOS from "aos";
import "aos/dist/aos.css";

export default function InvitroPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 700 });
    AOS.refresh();
  }, []);

  return (
    <div className="lg:mb-20 lg:mt-0 mt-28">
      <div data-aos="fade-left" className="lg:mt-5 relative">
        <img
          draggable="false"
          onContextMenu={(e) => e.preventDefault()}
          className=""
          src="../../assets/Intracytoplasmic.svg "
          alt="Nurse image"
        />
        <div className="w-full overlay-container2 h-full inset-0 absolute"></div>
        <div className="absolute text-center prop text-white inset-0 flex flex-col justify-center items-center">
          <h1 className=" text-[#fff] text-[40px] font-extrabold">
            Intracytoplasmic sperm injection
          </h1>
        </div>
      </div>
      <div
        data-aos="fade-right"
        className="hidden lg:block lg:mt-20 rounded-lg  max-w-5xl m-auto"
      >
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
            <BreadcrumbLink> Intracytoplasmic sperm injection</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className=" lg:mt-20 rounded-lg  max-w-5xl m-auto  bg-white ">
        <div data-aos="fade-down" className="lg:p-10 p-3">
          <h3 className="ivf lg:mt-0 mt-5 lg:text-lg w-full text-2xl">
            What Is ICSI?
          </h3>
          <p className="ivfPara text-justify mt-5">
            ICSI involves the collection of eggs directly from the ovaries, then
            the injection of a single sperm from the male partner into each
            mature egg to create embryos.
          </p>
        </div>
        <div className=" w-full h-full border  bg-[#D9D9D9]"></div>
        <div class="parent">
          <div data-aos="fade-up" class="div1 pt-5 border-r border-[#D9D9D9]">
            <h3 class="ivf  lg:text-lg w-full text-2xl text-center lg:text-start lg:pl-10 lg:p-0  p-3 pr-5 mb-5">
              Who Can Benefit From ICSI?
            </h3>
            <p class="ivfPara lg:pl-10 p-3 pr-5 text-justify mt-5">
              ICSI is a treatment for male infertility and may be offered if:
            </p>
            <ul class="mt-5 custom-disc list-disc font-normal pl-3 lg:pl-0 space-y-3 border-b pb-5">
              <li class="pr-5 ml-14">The sperm count is very low.</li>
              <li class="pr-5 ml-14">
                The sperm are not mobile enough (i.e. they cannot swim properly)
              </li>
              <li class="pr-5 ml-14">
                An attempt at In Vitro Fertilization (IVF) did not result in
                fertilization
              </li>
              <li class="pr-5 ml-14">
                Sperm have had to be removed directly from the epididymis or
                testicle using a surgical technique.
              </li>
            </ul>
          </div>

          <div class="spacer lg:block hidden h-16  border-[#D9D9D9]"></div>

          <div data-aos="fade-up" class="div2 lg:pb-10  lg:border-b">
            <h3 class="ivf lg:text-lg w-full text-2xl lg:pl-5 lg:text-start text-center pl-3 mt-5 pr-5 mb-5">
              How Is ICSI Carried Out?
            </h3>
            <p class="ivfPara lg:pl-5 pl-3 pr-10 text-justify mt-5">
              On the day of ICSI, the embryologist carefully removes the outer
              (cumulus) cells from each egg, using an enzyme normally produced
              by sperm. This enables the embryologist to see inside the egg
              using a high powered microscope and assess if the egg is ‘mature’.
              All eggs can be inseminated by IVF, but only mature eggs can be
              used in ICSI. The sperm are prepared as normal for IVF. The
              embryologist then picks out individual live sperm, of normal
              appearance and injects one into each egg.
            </p>
            <p class="ivfPara lg:pl-5 pl-3 pr-10 text-justify mt-5">
              After ICSI the eggs are returned to the incubator overnight and
              checked for fertilization the following morning.
            </p>

            <div class="div5 lg:pl-5 pl-3 pb-10 lg:mt-10 lg:pb-0 mt-5  ]">
              <h3 class="ivf lg:text-lg text-2xl  w-full  mt-5 lg:pr-10 pr-3 lg:text-start text-center mb-5">
                How Successful Is ICSI?
              </h3>
              <p class="ivfPara lg:pr-10 pr-3 text-justify mt-5">
                Approximately 6 out of every 10 eggs will fertilize successfully
                by ICSI, similar to IVF. The reasons for ICSI fertilization not
                being 100% successful include:
              </p>
              <ol className=" mt-5 space-y-3 list-decimal ml-5">
                <li>Immature eggs cannot be injected.</li>
                <li>
                  Some eggs may be damaged by the injection procedure. This
                  appears to be related to the properties of the inner egg
                  membrane.
                </li>
                <li>
                  Even when injected directly into the egg, many sperm are not
                  capable of ‘activating’ the egg.
                </li>
              </ol>
              <p class="ivfPara lg:pr-10 pr-3 text-justify mt-5">
                Following successful fertilization, embryo development is
                similar for ICSI and IVF. Embryo transfer, pregnancy rates are
                similar to IVF.
              </p>
            </div>
          </div>

          {/* <div class="spacer  h-20 border-r border-[#D9D9D9]"></div> */}
        </div>
      </div>
    </div>
  );
}
