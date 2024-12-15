import React, { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Appointment() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // State for form fields
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

  const sendEmail = () => {
    emailjs
      .sendForm("service_a2pgupf", "template_ap6iqyk", form.current, {
        publicKey: "M8LZDC1xESjqY1HbT",
      })
      .then((response) => {
        console.log("SUCCESS!", response);
      })
      .catch((error) => {
        console.error("FAILED...", error);
        alert("Failed to send email. Please try again later.");
      });
  };

  useEffect(() => {
    AOS.init({ duration: 700 });
    AOS.refresh();
  }, []);
  return (
    <>
      {/* Background Image Section */}
      <div data-aos="fade-down" className="mt-20 relative z-10">
        <img
          className="object-cover h-[100vh] w-full"
          src="../../assets/nurseimg.jpeg"
          alt="Nurse image"
        />
        <div className="overlayApp w-full h-full inset-0 z-10 absolute"></div>
        <div className="absolute inset-0 flex flex-col mt-32 items-center text-white z-10">
          <img src="../../assets/pills.svg" alt="Pills icon" className="mb-4" />
          <h1 className="appointment text-4xl font-bold">Book Appointment</h1>
          <p className="convenient text-lg mt-5">
            Convenient appointment at your fingertips
          </p>
        </div>
      </div>

      {/* Appointment Form */}
      <div data-aos="fade-up" className="relative mb-20 z-20">
        <div className="bg-white flex-col lg:flex-row -mt-40 appshadow flex items-center lg:w-[70%] m-auto lg:pl-10 rounded-lg z-20">
          <img
            draggable="false"
            onContextMenu={(e) => e.preventDefault()}
            src="../../assets/nurse.svg"
            alt="Nurse icon"
            className="mr-10"
          />
          <form
            id="form"
            ref={form}
            onSubmit={(e) => {
              e.preventDefault();
              successful();
            }}
          >
            <p className="flex my-5 lg:my-0 justify-center lg:justify-start items-center gap-3 call">
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
      {/* <div className="">
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader></ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <div className="flex flex-col justify-center items-center">
                <img
                  src="../../assets/successful.gif"
                  alt="Success"
                  width={"50%"}
                />
                <p className="text-center">
                  Your message has been successfully sent. Please relax while we
                  respond to you shortly.
                </p>
              </div>
            </ModalBody>
            <div className="flex items-center justify-center">
              <ModalFooter>
                <Link
                  to="/"
                  className="bg-blue-950 text-white p-2 rounded-full px-8 mb-3"
                  onClick={onClose}
                >
                 Close
                </Link>
              </ModalFooter>
            </div>
          </ModalContent>
        </Modal>
      </div> */}
    </>
  );
}
