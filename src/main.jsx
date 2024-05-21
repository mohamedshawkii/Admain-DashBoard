import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navigation from "./components/navigation/Navigation.jsx";
import Dashboard from "./components/allpages/dashboard/Dashboard.jsx";
import Features from "./components/allpages/features/Features.jsx";
import Users from "./components/allpages/users/Users.jsx";
import Pricing from "./components/allpages/pricing/Pricing.jsx";
import Integrations from "./components/allpages/integrations/Integrations.jsx";
import Settings from "./components/allpages/settings/Settings.jsx";
import TemplatePages from "./components/allpages/templatepages/TemplatePages.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    children: [
      {
        path: "/Dashboard",
        element: <Dashboard />,
      },
      {
        path: "/Features",
        element: <Features />,
      },
      {
        path: "/Users",
        element: <Users />,
      },
      {
        path: "/Pricing",
        element: <Pricing />,
      },
      {
        path: "/Integrations",
        element: <Integrations />,
      },
      {
        path: "/Settings",
        element: <Settings />,
      },
      {
        path: "/Template pages",
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
