import React, { useState } from "react";
import { RiHomeFill } from "react-icons/ri";
import { IoExtensionPuzzle } from "react-icons/io5";
import { FaDollarSign } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import {
  IoIosArrowDown,
  IoIosArrowForward,
  IoIosArrowBack,
} from "react-icons/io";
import Logo from "../../assets/Logo.png";
import { ImSearch } from "react-icons/im";

function SideBare() {
  const NavObj = [
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
  const morePages = [
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
  const [toggle, setToggle] = useState(false);
  const [selectedBtn, setSelectedBtn] = useState("");
  const [selectedPage, setSelectedPage] = useState("");
  const [formSubmit, setFormSubmit] = useState("");

  const setIndex = (Indx) => {
    if (Indx === selectedBtn) {
      setSelectedBtn("");
    } else {
      setSelectedBtn(Indx);
    }
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    // setFormSubmit(e.target.value);
  }

  return (
    <aside>
      <div className=" w-[300px] h-svh overflow-scroll bg-[#081028] border-1 border-[#7E89AC]">
        <div className="flex flex-col justify-start items-center gap-6  w-full h-auto p-6">
          <div  className="flex flex-row justify-start items-center w-full h-auto">
            <img src={Logo} alt="" />
            <IoIosArrowBack />
            <IoIosArrowForward />
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
              onChange={(e)=>setFormSubmit(e.target.value)}
               />
              <button type="submit"><ImSearch size={24} /></button>
            </form>
          </div>
          {NavObj.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-start items-center gap-3 w-full h-auto px-2 py-2"
            >
              <div className="flex flex-row justify-start items-center gap-3 w-full h-auto">
                <button
                  onClick={() => setIndex(index)}
                  className={`flex flex-row justify-start items-center gap-3 w-full h-auto
            ${selectedBtn === index ? "text-[#CB3CFF]" : ""}`}
                >
                  <p>{item.icon}</p>
                  <p>{item.name}</p>
                  <div className="ml-auto text-[#AEB9E1]">
                    {selectedBtn === index ? (
                      <IoIosArrowDown />
                    ) : (
                      <IoIosArrowForward />
                    )}
                  </div>
                </button>
              </div>
              {selectedBtn === index && (
                <div className="flex flex-col justify-start items-start w-full h-auto">
                  {morePages.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedPage(index)}
                      className={`px-4 py-4  w-full h-auto text-center flex flex-col justify-start items-start
                    ${
                      selectedPage === index
                        ? "border-l-4 rounded-lg border-[#CB3CFF] bg-[#0B1739]"
                        : ""
                    }
                    `}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}

export default SideBare;
