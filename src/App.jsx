import React from "react";

import "./index.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import CompleteProfile from "./pages/CompleteProfile";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import AppLayout from "./UI/AppLayout";
import OwnerDashboard from "./pages/OwnerDashboard";
import Projects from "./pages/Projects";
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
        <Toaster toastOptions={{ duration: 3300 }} />
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/complete-profile" element={<CompleteProfile />} />

          <Route path="/owner" element={<AppLayout/>}>
            <Route index element={<Navigate to="owner-dashboard"/>} />
            <Route path="owner-dashboard" element={<OwnerDashboard/>}/>
            <Route path="projects" element={<Projects/>}/>
          </Route>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </QueryClientProvider>
  );
}

export default App;
