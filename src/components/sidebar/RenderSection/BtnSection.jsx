import { NavLink } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

function BtnSection({
  BtnObject,
  SubPages,
  selectedBtn,
  setSelectedBtn,
  selectedPage,
  setSelectedPage,
  toggle,
  setToggle,
}) {
  const setIndex = (ItemName) => {
    if (ItemName === selectedBtn) {
      setSelectedBtn("");
    } else {
      setSelectedBtn(ItemName);
    }
  };

  return (
    <div className="flex flex-col justify-start items-start w-full h-auto gap-6">
      {BtnObject.map((item, index) => (
        <div key={index} className="w-full h-auto">
          <div className="flex flex-row justify-start items-center w-full h-auto">
            <NavLink className="w-full h-auto" to={`/${item.name}/${item.name}`}>
              <button
                onClick={() => setIndex(item.name)}
                className={`flex flex-row justify-start items-center gap-3 w-full h-auto
                ${selectedBtn === item.name ? "text-[#CB3CFF]" : ""}`}
              >
                <p>{item.icon}</p>
                <p>{item.name}</p>
                <div className="ml-auto text-[#AEB9E1]">
                  {selectedBtn === item.name ? (
                    <IoIosArrowDown />
                  ) : (
                    <IoIosArrowForward />
                  )}
                </div>
              </button>
            </NavLink>
          </div>
          {selectedBtn === item.name && (
            <div className="flex flex-col justify-start items-start w-full h-auto">
              {SubPages.map((item, index) => (
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
  );
}

export default BtnSection;
