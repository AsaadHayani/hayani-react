import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ContextProvider from "./components/Context.tsx";
import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ContextProvider>
    <QueryClientProvider client={queryClient}>
      <React.StrictMode>
        <BrowserRouter>
          <App />
          <ToastContainer position="top-center" theme="dark" />
        </BrowserRouter>
      </React.StrictMode>
    </QueryClientProvider>
  </ContextProvider>
);
