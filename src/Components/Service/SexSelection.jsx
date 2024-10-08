import React, { useEffect } from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

export default function Intrauterine() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="lg:mb-40 lg:mt-0 mt-28">
      <div className="lg:mt-5 relative">
        <img
          draggable="false"
          onContextMenu={(e) => e.preventDefault()}
          className=""
          src="../../assets/Sexselect.svg "
          alt="Nurse image"
        />
        <div className="w-full overlay-container2 h-full inset-0 absolute"></div>
        <div className="absolute text-center prop text-white inset-0 flex flex-col justify-center items-center">
          <h1 className=" text-[#fff] text-[40px] font-extrabold">
            Sex Selection
          </h1>
        </div>
      </div>
      <div className="hidden lg:block lg:mt-20 rounded-lg  max-w-5xl m-auto">
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
            <BreadcrumbLink> Sex Selection</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className=" lg:mt-20 rounded-lg  max-w-5xl m-auto  bg-white shadow-2xl">
        <div className="lg:p-10 p-3">
          <h3 className="ivf mt-5 lg:mt-0 lg:text-lg w-full text-2xl">
            Sex Selection
          </h3>
          <p className="ivfPara lg:w-[645px] text-justify mt-5">
            Sex selection, also known as gender selection, is the attempt to
            control the sex of the offspring to achieve a desired sex. It can be
            accomplished in several ways, in IVF it is done before implantation
            of an embryo.
          </p>
        </div>
        <div className="w-full h-full border  bg-[#D9D9D9]"></div>
        <div className="lg:p-10 p-3">
          <h3 className="ivf text-center lg:text-left mt-5 lg:mt-0 lg:text-lg w-full text-2xl">
            Medical Reasons For Carrying Out Sex Selection
          </h3>
          <p className="ivfPara lg:w-[645px] text-justify mt-5">
            There are several hundred known genetic diseases that affect only
            males – e.g. haemophilia and Duchenne’s muscular dystrophy. In
            families that have a history of such disease, parents may wish to
            reduce the chance of their child suffering serious illness by having
            a girl.
          </p>
        </div>
        <div className="w-full h-full border  bg-[#D9D9D9]"></div>

        <div className="lg:px-10 mt-10 px-3">
          <h3 className="ivf mt-5 lg:mt-0 text-center lg:text-start lg:text-lg w-full text-2xl">
            Non Medical Reasons For Carrying Out Sex Selection
          </h3>
          <ul className="lg:w-[645px] space-y-4 custom-disc list-disc ml-5  text-justify mt-5">
            <li>
              to have a family that includes children of both sexes (known as
              ‘family balancing’)
            </li>
            <li>
              to rebuild a family after the death of a child with another of the
              same sex (see box opposite)
            </li>
            <li>
              to fulfil a general preference for children of one sex over
              another. This could be related to economic, cultural or social
              reasons.
            </li>
          </ul>
        </div>
        <div className="lg:p-0 p-3">
          <div className="ivf text-center lg:text-left mt-5 lg:mt-0 lg:text-lg w-full text-2xl">
            <div className="lg:p-10 p-3">
              <h3 className="ivf text-center lg:text-left mt-5 lg:mt-0 lg:text-lg w-full text-2xl">
                Medical Reasons For Carrying Out Sex Selection
              </h3>
              <h3 className="ivf text-center lg:text-left mt-5 lg:mt-0 lg:text-sm w-full text-2xl">
                Sperm Sorting
              </h3>

              <p className="ivfPara lg:w-[847px] text-justify mt-5">
                Sperm carry either an X chromosome or a Y chromosome; all eggs
                carry an X chromosome. If an egg is fertilised by an X-bearing
                sperm, the child will be female, while a Y-bearing sperm will
                produce a male. Sperm sorting aims to produce a sample with a
                higher proportion of X- or Y-bearing sperm; this increases the
                chance of conceiving a child of the preferred sex.
              </p>
            </div>
          </div>

          <div className="ivf text-center lg:text-left mt-5 lg:mt-0 lg:text-lg w-full text-2xl">
            <div className="lg:pl-10 p-3">
              <h3 className="ivf text-center lg:text-left mt-5 lg:mt-0 lg:text-lg w-full text-2xl">
                Pre-implantation genetic diagnosis (PGD)
              </h3>

              <p className="ivfPara lg:w-[871px] text-justify mt-5">
                The sex of embryos created by in vitro fertilization (IVF) can
                be determined using PGD. PGD involves the removal of one cell
                from an embryo and analysis of the chromosomes and DNA. This is
                done three days after fertilization when the embryo has about
                eight cells and does not appear to affect development. Only
                embryos with the required genetic characteristics and sex are
                placed in the woman’s uterus. This could mean choosing embryos
                that are of desired sex and are known to not be affected by a
                particular genetic disease.
              </p>
            </div>
          </div>
        </div>

        <div class="spacer  h-10 border-r border-[#D9D9D9]"></div>
      </div>
    </div>
  );
}
