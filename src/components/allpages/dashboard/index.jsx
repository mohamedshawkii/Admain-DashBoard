import React from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../../../Utilities/PageHeader";
import WorldMapChart from "../../../Utilities/WorldMapChart";
import ParallelCoordinates from "../../../Utilities/ParallelCoordinates ";
import ResPieChart from "../../../Utilities/ResPieChart";
import ResCalender from "../../../Utilities/ResCalender";
import StatBox from "../../../Utilities/StatBox";
import { FaProjectDiagram } from "react-icons/fa";
import { FaBarsProgress } from "react-icons/fa6";
import { MdOutlineWifiProtectedSetup } from "react-icons/md";
import { GiProfit } from "react-icons/gi";
function Dashboard() {
  let params = useParams();
  return (
    <div className="w-svh h-svh p-8">
      <PageHeader pageTitle={params.PageName} />
      <div className="grid grid-cols-12 auto-rows-[140px] gap-[20px] w-full h-full">
        <div className="col-span-3 bg-[#0B1739] flex items-center justify-center">
          <StatBox
            title={"5,213"}
            subtitle={"Average"}
            progress={"0.35"}
            increase={"+10%"}
            icon={<FaProjectDiagram />}
          />
        </div>
        <div className="col-span-3 bg-[#0B1739] flex items-center justify-center">
          <StatBox
            title={"7,415"}
            subtitle={"Average"}
            progress={"0.65"}
            increase={"+18%"}
            icon={<FaBarsProgress />}
          />
        </div>
        <div className="col-span-3 bg-[#0B1739] flex items-center justify-center">
          <StatBox
            title={"8,610"}
            subtitle={"Average"}
            progress={"0.85"}
            increase={"+25%"}
            icon={<MdOutlineWifiProtectedSetup />}
          />
        </div>
        <div className="col-span-3 bg-[#0B1739] flex items-center justify-center">
          <StatBox
            title={"12,783"}
            subtitle={"Average"}
            progress={"0.90"}
            increase={"+35%"}
            icon={<GiProfit />}
          />
        </div>
        <div className="col-span-8 row-span-2 justify-center bg-[#0B1739]">
          <ParallelCoordinates />
        </div>
        <div className="col-span-4 row-span-2 justify-center bg-[#0B1739]">
            <ResPieChart inDashBoard={true}/>
        </div>
        <div className="col-span-6 row-span-2 justify-center bg-[#0B1739]">
          <ResCalender />
        </div>
        <div className="col-span-6 row-span-2 justify-center bg-[#0B1739]">
          <WorldMapChart inDashBoard={true}/>
        </div>
        <div className=" row-span-1"/>
      </div>
    </div>
  );
}

export default Dashboard;
