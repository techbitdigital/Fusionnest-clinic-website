import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

export default function Navbar() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleScroll = () => {
    const event = new CustomEvent("scrollToServices");
    window.dispatchEvent(event);
    closeMenu();
  };

  return (
    <>
      <nav className="fixed p-2 lg:p-0 bg-[#6E2C76] z-50 font-light font text-sm  top-0 w-full ">
        <div className=" max-w-7xl m-auto text-white lg:flex justify-between items-center  py-3">
          <div className="flex justify-between lg:justify-start  items-center space-x-4">
            <span className="flex items-center">
              <i className="fa-solid text-sm fa-phone"></i>
              <span className="ml-2">(+234) 906 5207 518</span>
            </span>
            <span className="flex items-center">
              <i className="fa-solid fa-envelope"></i>
              <span className="ml-2">info@fusionnest.com.ng</span>
            </span>
          </div>
          <div className="flex mt-3 items-center xs:space-x-3 sm:space-x-[21px] space-x-5">
            <a href="#" className="text-white hover:underline">
              FAQ
            </a>
            <a href="#" className="text-white hover:underline">
              Testimonial
            </a>
            <i className="fa-brands bg-[#672E71] p-2 h-8 w-8 flex items-center justify-center rounded-full fa-facebook-f"></i>
            <i className="fa-brands fa-instagram bg-[#672E71] p-2 h-8 w-8 flex items-center justify-center rounded-full"></i>
            <i className="fa-brands fa-x-twitter  bg-[#672E71] p-2 h-8 w-8 flex items-center justify-center rounded-full"></i>
            <i className="fa-brands fa-youtube  bg-[#672E71] p-2 h-8 w-8 flex items-center justify-center rounded-full"></i>
            <div>
              {!isOpen && (
                <button
                  className="w-8 lg:hidden md:float-end border-transparent rounded flex items-center justify-center focus:outline-none"
                  onClick={toggleMenu}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-20 text-[#fff]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
      {/*  */}
      <nav className="lg:flex hidden mt-20 justify-between items-center  max-w-7xl m-auto bg-background">
        <img
          draggable="false"
          onContextMenu={(e) => e.preventDefault()}
          src="../../assets/logo.svg"
          alt="Fusion Logo"
        />

        <div data-aos="zoom-in" className="flex space-x-10 items-center">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? "text-[#6E2C76] font-bold text-[16px] relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-custom-gradient after:left-1/2 after:transform after:-translate-x-1/2 after:-bottom-1 after:transition-all after:duration-300 pb-1"
                : "text-gray-600 font-bold relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#6E2C76] after:left-1/2 after:transform after:-translate-x-1/2 after:-bottom-1 after:transition-all after:duration-300 pb-1 hover:scale-105 hover:duration-700 hover:ease-in-out"
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/aboutus"}
            className={({ isActive }) =>
              isActive
                ? "text-[#6E2C76] font-bold text-[16px] relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-custom-gradient after:left-1/2 after:transform after:-translate-x-1/2 after:-bottom-1 after:transition-all after:duration-300 pb-1"
                : "text-gray-600 font-bold relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#6E2C76] after:left-1/2 after:transform after:-translate-x-1/2 after:-bottom-1 after:transition-all after:duration-300 pb-1 hover:scale-105 hover:duration-700 hover:ease-in-out"
            }
          >
            About Us
          </NavLink>
          <NavLink
            to={"/services"}
            className={({ isActive }) =>
              isActive
                ? "text-[#6E2C76] font-bold text-[16px] relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-custom-gradient after:left-1/2 after:transform after:-translate-x-1/2 after:-bottom-1 after:transition-all after:duration-300 pb-1"
                : "text-gray-600 font-bold relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#6E2C76] after:left-1/2 after:transform after:-translate-x-1/2 after:-bottom-1 after:transition-all after:duration-300 pb-1 hover:scale-105 hover:duration-700 hover:ease-in-out"
            }
          >
            Services
          </NavLink>

          <NavLink
            to={"/blog"}
            className={({ isActive }) =>
              isActive
                ? "text-[#6E2C76] font-bold text-[16px] relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-custom-gradient after:left-1/2 after:transform after:-translate-x-1/2 after:-bottom-1 after:transition-all after:duration-300 pb-1"
                : "text-gray-600 font-bold relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#6E2C76] after:left-1/2 after:transform after:-translate-x-1/2 after:-bottom-1 after:transition-all after:duration-300 pb-1 hover:scale-105 hover:duration-700 hover:ease-in-out"
            }
          >
            Blog
          </NavLink>
          <NavLink
            to={"/Contact"}
            className={({ isActive }) =>
              isActive
                ? "text-[#6E2C76] font-bold text-[16px] relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-custom-gradient after:left-1/2 after:transform after:-translate-x-1/2 after:-bottom-1 after:transition-all after:duration-300 pb-1"
                : "text-gray-600 font-bold relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#6E2C76] after:left-1/2 after:transform after:-translate-x-1/2 after:-bottom-1 after:transition-all after:duration-300 pb-1 hover:scale-105 hover:duration-700 hover:ease-in-out"
            }
          >
            Contact Us
          </NavLink>
          <button className="bg-[#6E2C76] px-4 py-2 rounded-lg text-white">
            Contact Us
          </button>
        </div>
      </nav>

      {/* Mobile View */}
      <div className="lg:hidden">
        {/* Side Menu */}
        <div
          className={`fixed inset-0 z-50 bg-[#f5e1fdf9] transition-transform duration-500 h-full ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            className="relative top-5 right-3 text-[#6E2C76] float-end border border-transparent focus:outline-none"
            onClick={closeMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="p-3 pl-5 h-full">
            <ul className="mt-32 text-4xl font-bold p-3 z-50 space-y-10">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#6E2C76] relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-[#8A065C] after:left-1/2 after:transform after:-translate-x-1/2 after:-bottom-1 after:transition-all after:duration-300 pb-1"
                      : "text-black relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#8A065C] after:left-1/2 after:transform after:-translate-x-1/2 after:-bottom-1 after:transition-all after:duration-300 pb-1 hover:after:w-full"
                  }
                  onClick={closeMenu}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/aboutus"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#6E2C76] relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-[#8A065C] after:left-1/2 after:transform after:-translate-x-1/2 after:-bottom-1 after:transition-all after:duration-300 pb-1"
                      : "text-black relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#8A065C] after:left-1/2 after:transform after:-translate-x-1/2 after:-bottom-1 after:transition-all after:duration-300 pb-1 hover:after:w-full"
                  }
                  onClick={closeMenu}
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#6E2C76] relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-[#8A065C] after:left-1/2 after:transform after:-translate-x-1/2 after:-bottom-1 after:transition-all after:duration-300 pb-1"
                      : "text-black relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#8A065C] after:left-1/2 after:transform after:-translate-x-1/2 after:-bottom-1 after:transition-all after:duration-300 pb-1 hover:after:w-full"
                  }
                  onClick={closeMenu}
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#6E2C76] relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-[#8A065C] after:left-1/2 after:transform after:-translate-x-1/2 after:-bottom-1 after:transition-all after:duration-300 pb-1"
                      : "text-black relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#8A065C] after:left-1/2 after:transform after:-translate-x-1/2 after:-bottom-1 after:transition-all after:duration-300 pb-1 hover:after:w-full"
                  }
                  onClick={closeMenu}
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <button
                  className="text-black hover:text-[#6E2C76] transition-colors"
                  onClick={handleScroll}
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
