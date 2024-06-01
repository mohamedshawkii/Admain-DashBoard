import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataTeam } from "../../../data/ChartsData";
import PageHeader from "../../../Utilities/PageHeader";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

function TeamDataGrid() {
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
  ];
  const params = useParams();
  return (
    <div className="w-svh h-svh p-8">
      <PageHeader pageTitle={params.PageName} />
      <Box
        className="w-full h-svh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: "#AEB9E1",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#AEB9E1",
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: "#0B1739",
          },
          "& .MuiDataGrid-columnHeaderTitleContainer": {
            backgroundColor: "#0B1739",
          },
          "& .MuiDataGrid-columnSeparator": {
            backgroundColor: "#0B1739",
          },
          "& .MuiSvgIcon-root": {
            color: "#0B1739",
          },
          "& .MuiDataGrid-filler": {
            backgroundColor: "#0B1739",
          },
          "& .MuiDataGrid-scrollbarFiller": {
            backgroundColor: "#0B1739",
          },
          "& .MuiDataGrid-withBorderColor": {
            backgroundColor: "#0B1739",
          },
          "& .MuiDataGrid-footerContainer": {
            color: "#0B1739",
            borderTop: "none",
            backgroundColor: "#AEB9E1",
          },
          "& .MuiCheckbox-root": {
            backgroundColor: "#AEB9E1",
          },
          
        }}
      >
        <DataGrid
          component = {{color: "#AEB9E1",}}
          style={{ color: "#AEB9E1" }}
          checkboxSelection
          rows={mockDataTeam}
          columns={columns}
        />
      </Box>
    </div>
  );
}

export default TeamDataGrid;
