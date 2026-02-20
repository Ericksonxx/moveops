import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./app/routes.jsx";
import "./styles/theme.css";
import { Analytics } from "@vercel/analytics/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppRouter />
    <Analytics />
  </React.StrictMode>
);
