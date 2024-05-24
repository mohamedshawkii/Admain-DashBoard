import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navigation from "./components/navigation/index.jsx";
import Dashboard from "./components/allpages/dashboard/index.jsx";
import Settings from "./components/allpages/settings/index.jsx";
import TemplatePages from "./components/allpages/templatepages/index.jsx";

import MapChartPage from "./components/allpages/mapchartpage/index.jsx"
import CoordinatesPage from "./components/allpages/coordinatespage/index.jsx"
import CalenderChartPage from "./components/allpages/calenderchartpage/index.jsx"
import PieChartPage from "./components/allpages/piechartpage/index.jsx"
import TeamDataGrid from "./components/allpages/teamdatagrid/index.jsx";
import ScheduleCalender from "./components/allpages/schedulecalender/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    children: [
      {
        path: "/Dashboard/:PageName",
        element: <Dashboard />,
      },
      {
        path: "/Map Chart/:PageName",
        element: <MapChartPage />,
      },
      {
        path: "/Parallel Coordinates/:PageName",
        element: <CoordinatesPage />,
      },
      {
        path: "/pin Data/:PageName",
        element: <CalenderChartPage />,
      },
      {
        path: "/Pie Chart/:PageName",
        element: <PieChartPage />,
      },
      {
        path: "/Team/:PageName",
        element: <TeamDataGrid />,
      },
      {
        path: "/Calender/:PageName",
        element: <ScheduleCalender />,
      },
      {
        path: "/Settings/:PageName",
        element: <Settings />,
      },
      {
        path: "/Template pages/:PageName",
        element: <TemplatePages />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
