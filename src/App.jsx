import React from "react";
import "./index.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import CompleteProfile from "./pages/CompleteProfile";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import AppLayout from "./UI/OwnerLayout";
import OwnerDashboard from "./pages/OwnerDashboard";
import Projects from "./pages/Projects";
import SingleProject from "./pages/SingleProject";
import Profile from "./pages/Profile";
import ProposalTable from "./features/proposal/ProposalTable";
import { useThemeContext } from "./context/ThemeContext";
import HomePage from "./pages/HomePage";
import NotOwner from "./pages/NotOwner";
import UserSettings from "./pages/UserSettings";
import OwnerLayout from "./UI/OwnerLayout";
import FreelancerLayout from "./pages/FreelancerLayout";
import FreelancerDashboard from "./features/Freelancer/FreelancerDashboard";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ProjectView from "./pages/ProjectView";
import Proposal from "./pages/Proposal";
import { MantineProvider } from "@mantine/core";
function App() {
  const queryClient = new QueryClient();
  const { isDarkMode } = useThemeContext();
  return (
    <QueryClientProvider client={queryClient}>
        <Toaster
          toastOptions={{
            duration: 3300,
            style: {
              backgroundColor: `${isDarkMode ? "#1e293b" : "white"}`,
              color: `${isDarkMode ? "white" : "#334155"}`,
            },
          }}
        />
        <Routes>
          <Route path="/" element={<HomePage />} index />
          <Route path="/auth" element={<Auth />} />
          <Route path="/complete-profile" element={<CompleteProfile />} />
          <Route path="/owner" element={<OwnerLayout />}>
            <Route index element={<Navigate to="owner-dashboard" />} />
            <Route path="owner-dashboard" element={<OwnerDashboard />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:id" element={<SingleProject />} />
            <Route path="profile" element={<Profile />} />
            <Route path="proposals/:id" element={<ProposalTable />} />
            <Route path="settings" element={<UserSettings />} />
          </Route>
          <Route path="/freelancer" element={<FreelancerLayout />}>
            <Route index element={<Navigate to="freelancer-dashboard" />} />
            <Route
              path="freelancer-dashboard"
              element={<FreelancerDashboard />}
            />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<UserSettings />} />
            <Route path="home" element={<Home />} />
            <Route path="project/:id" element={<ProjectView />} />
            <Route path="proposals/:id" element={<Proposal />} />
          </Route>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/notowner" element={<NotOwner />} />
        </Routes>
        <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
