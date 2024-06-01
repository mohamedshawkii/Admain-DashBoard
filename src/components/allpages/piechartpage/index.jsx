import React from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../../../Utilities/PageHeader";
import ResPieChart from "../../../Utilities/ResPieChart";

function PieChartPage() {
  let params = useParams();

  return (
    <div className="w-svh h-svh p-8">
      <PageHeader pageTitle={params.PageName}/>
      <div className="px-4 py-4 w-[50rem] h-[30rem] my-auto mx-auto bg-[#0B1739]">
        <ResPieChart/>
      </div>
    </div>
  );
}

export default PieChartPage;
