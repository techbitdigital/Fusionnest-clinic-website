import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";


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

export default function Decade() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const sendEmail = () => {
    emailjs
      .sendForm("service_a2pgupf", "template_ap6iqyk", form.current, {
        publicKey: "M8LZDC1xESjqY1HbT",
      })
      .then((response) => {
        console.log("SUCCESS!", response);
        alert("Email sent successfully!");
      })
      .catch((error) => {
        console.error("FAILED...", error);
        alert("Failed to send email. Please try again later.");
      });
  };
  const [inputValue1, setInputValue1] = useState(""); // Name
  const [inputValue2, setInputValue2] = useState(""); // Phone number
  const [inputValue3, setInputValue3] = useState(""); // Email

  const form = useRef();

  const successful = () => {
    if (
      inputValue1.trim() === "" ||
      inputValue2.trim() === "" ||
      inputValue3.trim() === ""
    ) {
      alert("Please fill all the fields");
    } else {
      sendEmail();
      onOpen();
      setInputValue1("");
      setInputValue2("");
      setInputValue3("");
    }
  };

  const {
    isOpen: isSoyinkaOpen,
    onOpen: onSoyinkaOpen,
    onClose: onSoyinkaClose,
  } = useDisclosure();
  return (
    <div data-aos="fade-up" className="lg:my-40 my-16 max-w-7xl m-auto flex flex-col lg:flex-row lg:p-0 p-3 items-center gap-[39px]">
      <img
        draggable="false"
        onContextMenu={(e) => e.preventDefault()}
        src="../../assets/decade.svg"
        alt=""
      />
      <div data-aos="fade-up">
        <h2 className="text-center lg:text-[30px] text-2xl decade space-x-1 flex ">
          Over a
          <span className="text-[#E3DE65] hidden px-3 lg:flex flex-col">
            Decade
            <img
              draggable="false"
              onContextMenu={(e) => e.preventDefault()}
              src="../../assets/Vector.png"
              alt=""
              className="w-[80%] m-auto"
            />
          </span>
          <span className="text-[#E3DE65] lg:hidden px-2 ">Decade</span>
          of Medical
        </h2>
        <h1 className="decade lg:text-[30px] text-2xl">Excellence</h1>
        <p className="decadep my-5">
          We are a team of medical researchers and practitioners who work hard
          to provide effective treatments in our point-of-care facilities. We
          provide comprehensive fertility services, from diagnosis to treatment,
          with the ultimate goal of helping individuals or couples achieve a
          successful pregnancy.
        </p>
        <div className="flex space-x-5">
          <h3 className="text-2xl flex items-center gap-2 intra">
            <i className=" fa-solid fa-check"></i>
            Intracytoplasmic Sperm Injection
          </h3>
          <h3 className="text-2xl flex items-center gap-2 intra">
            <i className="fas fa-solid fa-check"></i>
            In-vitro Fertilization
          </h3>
          <h3 className="text-2xl flex items-center gap-2 intra">
            <i className=" fa-solid fa-check"></i>
            Egg Donation
          </h3>
        </div>
        <div className="flex mt-5 space-x-5">
          <h3 className="text-2xl flex items-center gap-2 intra">
            <i className=" fa-solid fa-check"></i>
            Intrauterine Insemination
          </h3>
          <h3 className="text-2xl flex items-center gap-2 intra">
            <i className="fas fa-solid fa-check"></i>
            Sex Selection
          </h3>
          <h3 className="text-2xl flex items-center gap-2 intra">
            <i className=" fa-solid fa-check"></i>
            Sperm Donation
          </h3>
        </div>
        <button
          onClick={onSoyinkaOpen}
          className="aptbtn md:hidden hover:bg-[#6E2C76] hover:text-gray-100 duration-700 lg:block rounded-lg mt-5"
        >
          Book Appointment
        </button>
      </div>
      <Modal isOpen={isSoyinkaOpen} onClose={onSoyinkaClose} isCentered>
        <ModalOverlay className="" bg="rgba(0, 0, 0, 0.8)" />
        <ModalContent className="flex z-50 items-center justify-center h-[100vh]">
          <ModalBody className="relative z-50  rounded-xl    bg-whit overflow-y-auto">
            <div className="relative z-50 mt-40 lg:mt-16">
              <div className="bg-white z-50 lg:px-20 px-10 flex-col lg:flex-row  appshadow flex items-center  m-auto lg:pl-10 rounded-lg    ">
                <img
                  draggable="false"
                  onContextMenu={(e) => e.preventDefault()}
                  src="../../assets/nurse.svg"
                  alt="Nurse icon"
                  className="mr-10"
                />
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
                <form
                  id="form"
                  ref={form}
                  onSubmit={(e) => {
                    e.preventDefault();
                    successful();
                  }}
                >
                  <p className="flex my-5 lg:my-0 justify-center lg:justify-start xs:text-xl items-center gap-3 call">
                    <i className="text-white hidden bg-[#263D7B] w-12 h-12 lg:flex justify-center items-center rounded-full fa-solid fa-phone"></i>
                    Call Us: +234 904 0170 025
                  </p>
                  <div className="lg:block flex flex-col items-center justify-center lg:space-x-5">
                    <input
                      type="text"
                      name="from_name"
                      value={inputValue1}
                      onChange={(e) => setInputValue1(e.target.value)}
                      required
                      placeholder="Your Name"
                      className="bg-[#263D7B0A] outline-none p-4 mt-5 w-[278px]"
                    />
                    <input
                      type="text"
                      name="phone_number"
                      value={inputValue2}
                      onChange={(e) => setInputValue2(e.target.value)}
                      required
                      placeholder="Your Phone"
                      className="bg-[#263D7B0A] outline-none p-4 mt-5 w-[278px]"
                    />
                  </div>
                  <div className="lg:block flex flex-col items-center justify-center lg:space-x-5">
                    <input
                      type="email"
                      name="from_email"
                      value={inputValue3}
                      onChange={(e) => setInputValue3(e.target.value)}
                      required
                      placeholder="Email Address"
                      className="bg-[#263D7B0A] outline-none p-4 mt-5 w-[278px]"
                    />
                    <input
                      type="date"
                      name="appointment_date"
                      className="bg-[#263D7B0A] outline-none p-4 mt-5 w-[278px]"
                      required
                    />
                  </div>
                  <div className="lg:block pb-10 lg:pb-0 flex flex-col items-center justify-center lg:space-x-5">
                    <select
                      name="service"
                      className="bg-[#263D7B0A] outline-none p-4 mt-5 w-[278px]"
                      required
                    >
                      <option value="" disabled selected>
                        Select Service
                      </option>
                      <option value="Intracytoplasmic Sperm Injection">
                        Intracytoplasmic Sperm Injection
                      </option>
                      <option value="In-vitro Fertilization">
                        In-vitro Fertilization
                      </option>
                      <option value="Egg Donation">Egg Donation</option>
                      <option value="Intrauterine Insemination">
                        Intrauterine Insemination
                      </option>
                      <option value="Sex Selection">Sex Selection</option>
                      <option value="Sperm Donation">Sperm Donation</option>
                    </select>

                    <button className="bg-[#E3DE65] hover:bg-[#6E2C76] hover:text-gray-100 duration-700 outline-none p-3 mt-5 float-end rounded-full text-white px-8">
                      Submit
                    </button>
                  </div>
                  {/* Modal for Success */}
                </form>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}
