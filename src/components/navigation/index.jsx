import React, { useEffect, useState } from "react";
import SideBare from "../sidebar/SideBare";
import { Outlet } from "react-router-dom";

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
