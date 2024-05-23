import React from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../../../Utilities/PageHeader";
import WorldMapChart from "../../../Utilities/WorldMapChart";

function MapChartPage() {
  let params = useParams();
  return (
    <div className="flex flex-col justify-start items-start  w-svh h-svh">
      <PageHeader pageTitle={params.PageName} />
      <div className="px-4 py-4 w-[50rem] h-[30rem] my-auto mx-auto">
        <WorldMapChart/>
      </div>
    </div>
  );
}

export default MapChartPage;