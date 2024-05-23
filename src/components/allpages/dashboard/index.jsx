import React from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../../../Utilities/PageHeader";
import WorldMapChart from "../../../Utilities/WorldMapChart";
import ParallelCoordinates from "../../../Utilities/ParallelCoordinates ";
import ResPieChart from "../../../Utilities/ResPieChart";
import ResCalender from "../../../Utilities/ResCalender";

function Dashboard() {
  let params = useParams();
  return (
    <div className="w-svh h-svh">
      <PageHeader pageTitle={params.PageName} />
      <div className="grid grid-cols-2 grid-rows-2 justify-center items-center w-full h-full">
        <WorldMapChart />
        <ParallelCoordinates />
        <ResPieChart />
        <ResCalender />
      </div>
    </div>
  );
}

export default Dashboard;
