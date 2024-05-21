import React, { useState } from "react";
import { RiHomeFill } from "react-icons/ri";
import { IoExtensionPuzzle } from "react-icons/io5";
import { FaDollarSign } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import ProfileImage from '../../assets/profileImg.png'
import {
  IoIosArrowForward,
  IoIosArrowBack,
  IoMdSettings,
} from "react-icons/io";
import Logo from "../../assets/Logo.png";
import { ImSearch } from "react-icons/im";
import { HiTemplate } from "react-icons/hi";
import BtnSection from "./RenderSection/BtnSection";

function SideBare({toggle,setToggle}) {
  const FirstSection = [
    {
      name: "Dashboard",
      icon: <RiHomeFill />,
    },
    {
      name: "Features",
      icon: <FaStar />,
    },
    {
      name: "Users",
      icon: <FaUser />,
    },
    {
      name: "Pricing",
      icon: <FaDollarSign />,
    },
    {
      name: "Integrations",
      icon: <IoExtensionPuzzle />,
    },
  ];
  const SubPages = [
    {
      name: "All pages",
    },
    {
      name: "Reports",
    },
    {
      name: "Products",
    },
    {
      name: "Task",
    },
  ];

  const SecondSection = [
    {
      name: "Settings",
      icon: <IoMdSettings />,
    },
    {
      name: "Template pages",
      icon: <HiTemplate />,
    },
  ];

  
  const [selectedBtn, setSelectedBtn] = useState("");
  const [selectedPage, setSelectedPage] = useState("");
  const [formSubmit, setFormSubmit] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // setFormSubmit(e.target.value);
  };

  return (
    <aside>
      <div className=" w-[300px] h-svh overflow-scroll bg-[#081028] border-1 border-[#7E89AC] fixed top-0 left-0">
        <div className="flex flex-col justify-start items-center gap-6  w-full h-auto p-6">
          <div className="flex flex-row justify-start items-center w-full h-auto">
            <img src={Logo} alt="" />
            <div className="flex flex-row justify-center items-center ml-auto">
              <IoIosArrowBack size={14} />
              <IoIosArrowForward size={14} />
            </div>
          </div>
          <div>
            <form
              className="flex flex-row justify-between items-center gap-8 py-2 px-4 rounded-lg bg-[#ffffff]"
              onSubmit={handleSubmit}
            >
              <input
                className="border-none rounded-sm box-border outline-none"
                value={formSubmit}
                type="text"
                placeholder="Search for..."
                onChange={(e) => setFormSubmit(e.target.value)}
              />
              <button type="submit">
                <ImSearch size={24} />
              </button>
            </form>
          </div>
          <BtnSection
            BtnObject={FirstSection}
            SubPages={SubPages}
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            selectedBtn={selectedBtn}
            setSelectedBtn={setSelectedBtn}
            toggle={toggle} 
            setToggle={setToggle}
          />
        </div>
        <hr className="border-1 border-[#7E89AC] rounded-3xl"/>
        <div className="flex flex-col justify-start items-center  gap-6 w-full h-auto p-6">
          <BtnSection
            BtnObject={SecondSection}
            SubPages={SubPages}
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            selectedBtn={selectedBtn}
            setSelectedBtn={setSelectedBtn}
            toggle={toggle} 
            setToggle={setToggle}
          />
          <div className="flex flex-row justify-start items-center gap-3 w-full h-auto">
            <img width={40} height={40} src={ProfileImage} alt="" />
            <div className="flex flex-col justify-start items-start">
              <p className="text-white font-bold text-lg">John Carter</p>
              <p>Account settings</p>
            </div>
            <div className="ml-auto">
              <IoIosArrowForward/>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default SideBare;
