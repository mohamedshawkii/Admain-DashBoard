import React from "react";

function PageHeader({ pageTitle }) {
  return (
    <div
      className=" 
      flex flex-row justify-start
      items-center gap-3 h-16 w-full
      bg-none px-12 py-12 text-center text-3xl font-extrabold"
    >
      {pageTitle}
      
    </div>
  );
}

export default PageHeader;
