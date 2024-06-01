import React from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../../../Utilities/PageHeader";
import ParallelCoordinates from "../../../Utilities/ParallelCoordinates ";

function CoordinatesPage() {
  let params = useParams();
  return (
    <div className="p-8 w-svh h-svh">
      <PageHeader pageTitle={params.PageName} />
      <div className="px-4 py-4 w-[60rem] h-[30rem] my-auto mx-auto bg-[#0B1739]">
        <ParallelCoordinates />
      </div>
      <div className="p-8"/>
    </div>
  );
}

export default CoordinatesPage;
