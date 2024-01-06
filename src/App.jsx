import React from "react";

import "./index.css";
import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container xl:max-w-screen-xl">
        <Toaster toastOptions={{duration:2300}}/>
        <Routes>
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
