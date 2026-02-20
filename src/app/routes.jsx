import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shell from "../layout/Shell.jsx";

import Home from "../pages/Home.jsx";
import SpainInstallationPartner from "../pages/SpainInstallationPartner.jsx";
import StandInstallationSpain from "../pages/StandInstallationSpain.jsx";
import Contact from "../pages/Contact.jsx";

const router = createBrowserRouter([
  {
    element: <Shell />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/spain-installation-partner", element: <SpainInstallationPartner /> },
      { path: "/exhibition-stand-installation-spain", element: <StandInstallationSpain /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
