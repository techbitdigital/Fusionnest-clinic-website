import React from "react";

export default function AbtDoctors() {
  return (
    <div className="max-w-6xl m-auto mb-20">
      <div className="text-center my-10 lg:mt-0 p-2 lg:p-0">
        <h1 className="meet text-4xl leading-10 lg:leading-[65.8px]  lg:text-[47px]">
          Meet Our Certified Doctors
        </h1>
        <p className="textcompp text-[18px]">
          Our team of fertility specialists and compassionate staff are
          dedicated to <br className="lg:block hidden"/> providing personalized care and support.
        </p>
      </div>
      <div className="flex p-3 lg:mb-0 mb-20 lg:p-0 lg:flex-row flex-col-reverse mb10 items-center gap-5">
        
        <div className="flex flex-col ">
          <h3 className="obs">Obstetrics and Gynecology</h3>
          <h1 className="ogun">
            DR. OGUNDIMU EBENEZER OLADIPO <br /> M.BchB, FWACS
          </h1>
          <p className="descript lg:w-[557px] mt-2">
            Is a holder of bachelor of medicine and surgery degree from Ogun
            state university and, had his post-graduate training in Obstetrics &
            Gynecology, He is a fellow of the West Africa College of Surgeon
            (WACS) and a Consultant Obstetrician & Gynecologist who has worked
            in the Government sector for over fifteen years.
          </p>
          <p className="descript lg:w-[567px] mt-5">
            He is a Versatile fertility surgeon with experience in the IF sector
            for several years both locally and Internationally. He is an Alumni,
            of the University of Washington where he did a course on leadership
            and management in health. He is married with children and his love
            is to see
            <span className="text-[#6E2C76]  ml-1 font-bold">
              EVERY WOMAN A MOTHER.
            </span>
          </p>
        </div>
        <img src="../../assets/abtOgundimu.svg" alt="" />
      </div>
      <div className="flex p-3 lg:p-0 flex-col-reverse lg:flex-row-reverse items-center gap-10">
        <div className="flex flex-col ">
          <h3 className="obs">Obstetrics and Gynecology</h3>
          <h1 className="ogun">
            DR. DAPO SOYINKA <br />
            MBBS LAGOS FWACS FMCOS DMOS GERMANY MRK UK
          </h1>
          <p className="descript lg:w-[557px] mt-2">
            Dr Ayodapo Samuel Soyinka is a holder of Bachelor of medicine and
            surgery, Degree from the college of medicine, university of Lagos.
            He had his post-graduation Specialist training in Obstetrics &
            Gynecology in 2005; he obtained a fellowship of the West Africa (
            College of Surgeon WACS) in flying colours when he won the Bello
            Osage prize for the overall best candidate in the West Africa Part 2
            Examination for faculty of Obstetrics & Gynecology in West Africa.
            He is also a fellow of the national post-graduate medical college of
            Nigeria.
          </p>
          <p className="descript lg:w-[557px] mt-5">
            He is a certified and trained hospital Administrator. He also a
            diploma certificate in minimal invasive surgery (Gynecology
            Endoscopy) and Reproductive/Fertility medicine in Kiel Germany
            between 2005 and 2007. He also holds a degree in reproductive health
            from UK. He has worked and established two IVF clinic here in Lagos.
            He also worked briefly as consultant Obstetrician & Gynaecologist at
            Lagos Island maternity Hospital before venturing into private
            practice. He is married with children and his passion is to see
            <span className="text-[#6E2C76] ml-1 font-bold">
              EVERY WOMAN A MOTHER.
            </span>
          </p>
        </div>
        <img src="../../assets/abtDapo.svg" alt="" />
      </div>
    </div>
  );
}
