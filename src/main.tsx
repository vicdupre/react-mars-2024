import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router.tsx";
import MyThemeProvider from "./lib/contexts/ThemeContext.tsx";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={{ backgroundColor: "lightblue" }}>
        <MyThemeProvider>
          <RouterProvider router={router} />
        </MyThemeProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
