import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import SideBare from "../sidebar";

function Navigation() {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    function paddingLeft() {
      document.body.style.paddingLeft = "300px";
      //   if (toggle) {
      //     document.body.style.paddingLeft = "28rem";
      //   } else {
      //     document.body.style.paddingLeft = "8rem";
      //   }
    }
    paddingLeft();
  }, [toggle]);

  return (
    <div>
       <Outlet />
      <SideBare toggle={toggle} setToggle={setToggle} />
    </div>
  );
}

export default Navigation;
