import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

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

export default function WhoWeAre() {
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
    <div className="flex flex-col p-2 lg:p-0 lg:flex-row my-10 max-w-7xl gap-[60px] m-auto items-center">
      <img data-aos="fade-up" className="" src="../../assets/who.svg" alt="" />
      <div data-aos="fade-down" className=" space-y-5">
        <div className="flex items-center">
          <div className="bg-[#D4E4F6] p-2">
            <div className="w-2.5 h-2.5 bg-[#6E2C76]"></div>
          </div>
          <h1 className="who lg:text-lg text-3xl ml-3">Who We Are</h1>
        </div>
        <h2 className="provide lg:leading-[55.2px] lg:text-[40px] text-3xl">
          We Provide The Best Fertility Management Services
        </h2>
        <p className="text-[#404653] lg:text-left text-justify fusion">
          FUSION NEST FERTILITY CENTRE is a Clinic that offers dedicated
          specialized services in fertility management. it is managed by a group
          of consultants in obstetrics & gynecology. They are internationally
          trained actively in pratice and in tune with modern trends &
          development in this ever evolving specility. Fusion nest Fertility
          Centre, is committed to providing state of the art Assisted
          Reproductive Technique (ART) such as IVF, ICSI, etc, at extremely
          affordable cost with a resultant high pregnancy rate in a very
          conducive and comfortable atmosphere. We focus more on solution
          (getting the infertile couple pregnant) rather than the problems. (
          Doing endless investigations and tests).
        </p>
        <button
          onClick={onSoyinkaOpen}
          className="border  hover:bg-[#6E2C76] hover:text-white duration-700 border-[#6E2C76] text-[#6E2C76]  p-2 px-8 text-lg rounded-lg"
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

                    <button
                      onClick={onSoyinkaOpen}
                      className="bg-[#2D4493]  outline-none p-3 mt-5 float-end rounded-full text-white px-8"
                    >
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
