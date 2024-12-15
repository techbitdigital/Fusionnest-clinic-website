import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Doctors() {
  // Separate disclosures for each modal
  const {
    isOpen: isOgundimuOpen,
    onOpen: onOgundimuOpen,
    onClose: onOgundimuClose,
  } = useDisclosure();
  const {
    isOpen: isSoyinkaOpen,
    onOpen: onSoyinkaOpen,
    onClose: onSoyinkaClose,
  } = useDisclosure();

  const [scrollBehavior] = useState("inside"); // Enable inside scrolling

  useEffect(() => {
    AOS.init({ duration: 700 });
    AOS.refresh();
  }, []);
  return (
    <div className="p-2">
      {/* Header */}
      <div data-aos="fade-up" className="text-center mt-10 lg:mt-0 p-2 lg:p-0">
        <h1 className="meet text-4xl leading-10 lg:leading-[65.8px] lg:text-[47px]">
          Meet Our Certified Doctors
        </h1>
        <p className="textcompp text-[18px]">
          Our team of fertility specialists and compassionate staff are
          dedicated to <br className="lg:block hidden" /> providing personalized
          care and support.
        </p>
      </div>

      {/* Doctors' Profiles */}
      <div className="flex text-white justify-center items-center lg:items-start flex-col lg:flex-row lg:space-y-0 space-y-5 lg:space-x-9 my-10 lg:my-20">
        {/* Dr. Ogundimu */}
        <div data-aos="fade-down" className="relative group">
          <div className="overlaydark w-full h-full absolute inset-0 rounded-lg"></div>
          <img
            draggable="false"
            onContextMenu={(e) => e.preventDefault()}
            src="../../assets/ogundimu.svg"
            alt="DR. OGUNDIMU EBENEZER O"
            className="transition-transform duration-300 "
          />

          <div className="absolute bottom-32 lg:bottom-10 left-0 right-0 text-center transition-all duration-300 group-hover:bottom-20">
            <h3 className="text-center text-xl font-bold">
              DR. OGUNDIMU EBENEZER O
            </h3>
            <p className="text-sm">Obstetrics and Gynecology</p>
          </div>

          <button
            className="absolute bottom-5 left-1/2 transform -translate-x-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-white text-[#6e2c76] font-semibold px-10 py-2 rounded-full"
            onClick={onOgundimuOpen}
          >
            See Bio
          </button>

          {/* Modal for Dr. Ogundimu */}
          <Modal
            isOpen={isOgundimuOpen}
            onClose={onOgundimuClose}
            isCentered
            scrollBehavior={scrollBehavior} // Enable scrolling inside the modal
          >
            <ModalOverlay bg="rgba(0, 0, 0, 0.8)" />
            <ModalContent className="flex  items-center justify-center h-[100vh]">
              <ModalBody className="p-5 max-w-2xl relative rounded-xl shadow-2xl lg:h-[65vh] m-auto bg-white overflow-y-auto">
                {/* Modal body will scroll */}
                <ModalHeader className="ogun" textAlign="center" fontSize="2xl">
                  DR. OGUNDIMU EBENEZER OLADIPO <br />
                  M.BchB, FWACS
                </ModalHeader>
                <div className="absolute right-5 top-5 ">
                  <ModalFooter>
                    <Button
                      colorScheme="purple"
                      onClick={onOgundimuClose}
                      mx="auto"
                    >
                      <i className="fa-solid text-[#848484] text-4xl fa-xmark"></i>
                    </Button>
                  </ModalFooter>
                </div>
                <p className="text-center text-[#6e2c76] text-lg mb-4">
                  Obstetrics and Gynecology
                </p>
                <p className="descript lg:w-[550px] ">
                  Dr. Ogundimu is a graduate of Ogun State University with a
                  degree in medicine and surgery. He is a fellow of the West
                  Africa College of Surgeon (WACS) and has worked as a
                  consultant Obstetrician & Gynecologist for over fifteen years
                  in the government sector.
                </p>
                <p className="descript lg:w-[550px] mt-3 lg:mt-5">
                  A versatile fertility surgeon with international experience,
                  Dr. Ogundimu is also an alumnus of the University of
                  Washington where he completed a course on leadership and
                  management in health. His passion is to see
                  <q className="text-[#6E2C76] ml-1 font-bold">
                    EVERY WOMAN: A MOTHER
                  </q>
                </p>
                <div  className="xs:block sm:hidden">
                  <ModalFooter>
                    <Button
                      colorScheme="purple"
                      onClick={onOgundimuClose}
                      mx="auto"
                    >
                      <i className="fa-solid text-[#848484] text-4xl fa-xmark"></i>
                    </Button>
                  </ModalFooter>
                </div>
              </ModalBody>
            </ModalContent>
          </Modal>
        </div>

        {/* Dr. Soyinka */}
        <div data-aos="fade-up" className="relative group">
          <div className="overlaydark w-full h-full absolute inset-0 rounded-lg"></div>
          <img
            draggable="false"
            onContextMenu={(e) => e.preventDefault()}
            src="../../assets/dapoSoyinka.svg"
            alt="DR. DAPO SOYINKA"
            className="transition-transform duration-300 "
          />

          <div className="absolute bottom-32 lg:bottom-10 left-0 right-0 text-center transition-all duration-300 group-hover:bottom-20">
            <h3 className="text-center text-xl font-bold">DR. DAPO SOYINKA</h3>
            <p className="text-sm">Obstetrics and Gynecology</p>
          </div>

          <button
            className="absolute bottom-5 left-1/2 transform -translate-x-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-white text-[#6e2c76] font-semibold px-10 py-2 rounded-full"
            onClick={onSoyinkaOpen}
          >
            See Bio
          </button>

          {/* Modal for Dr. Soyinka */}
          <Modal
            isOpen={isSoyinkaOpen}
            onClose={onSoyinkaClose}
            isCentered
            scrollBehavior={scrollBehavior} // Enable scrolling inside the modal
          >
            <ModalOverlay bg="rgba(0, 0, 0, 0.8)" />
            <ModalContent className="flex items-center justify-center h-[100vh]">
              <ModalBody className="p-5 relative max-w-2xl rounded-xl shadow-2xl lg:h-[80vh] m-auto bg-white overflow-y-auto">
                {/* Modal body will scroll */}
                <ModalHeader className="ogun" textAlign="center" fontSize="2xl">
                  DR. DAPO SOYINKA <br />
                  MBBS LAGOS, FWACS, FMCOS, DMOS GERMANY, MRK UK
                </ModalHeader>
                <div className="absolute right-5 top-5 ">
                  <ModalFooter>
                    <Button
                      colorScheme="purple"
                      onClick={onSoyinkaClose}
                      mx="auto"
                    >
                      <i className="fa-solid text-[#848484] text-4xl fa-xmark"></i>
                    </Button>
                  </ModalFooter>
                </div>
                <p className="text-center text-[#6e2c76] text-lg mb-4">
                  Obstetrics and Gynecology
                </p>
                <p className="descript">
                  Dr. Ayodapo Samuel Soyinka holds a Bachelor of Medicine and
                  Surgery from the University of Lagos. He completed his
                  specialist training in Obstetrics & Gynecology in 2005,
                  earning a fellowship from the West African College of Surgeons
                  and winning the Bello Osage prize. He is also a fellow of the
                  National Postgraduate Medical College of Nigeria.
                </p>
                <p className="descript lg:w-[567px]  lg:mt-5">
                  He is a certified hospital administrator with a diploma in
                  minimal invasive surgery (Gynecology Endoscopy) and
                  Reproductive/Fertility medicine from Kiel, Germany
                  (2005-2007).{" "}
                  <span className="hidden lg:block">
                    {" "}
                    He also holds a degree in reproductive health from the UK.
                    He has established two IVF clinics in Lagos and briefly
                    worked as a consultant Obstetrician & Gynaecologist at Lagos
                    Island Maternity Hospital before starting his private
                    practice.
                  </span>{" "}
                  He is married with children and is passionate about ensuring
                  that
                  <q className="text-[#6E2C76] ml-1 font-bold">
                    EVERY WOMAN A MOTHER.
                  </q>
                </p>
                <div  className="xs:block sm:hidden">
                  <ModalFooter>
                    <Button
                      colorScheme="purple"
                      onClick={onSoyinkaClose}
                      mx="auto"
                    >
                      <i className="fa-solid text-[#848484] text-4xl fa-xmark"></i>
                    </Button>
                  </ModalFooter>
                </div>
              </ModalBody>
            </ModalContent>
          </Modal>
        </div>
      </div>
    </div>
  );
}
