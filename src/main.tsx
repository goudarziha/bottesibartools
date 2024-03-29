import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "@mantine/core/styles.css";
import "./index.css";
import "./fonts/K22-Monastic.ttf";
import { MantineProvider } from "@mantine/core";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider
      theme={{
        fontFamily: "K22-Montastic, sans-serif",
        fontFamilyMonospace: "K22-Montastic, Courier, monospace",
        headings: { fontFamily: "K22-Montastic, sans-serif" },
      }}
    >
      <App />
    </MantineProvider>
  </React.StrictMode>
);
