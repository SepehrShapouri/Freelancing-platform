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
import SingleProject from "./pages/SingleProject";
import Profile from "./pages/Profile";
import ProposalTable from "./features/proposal/ProposalTable";
import { useThemeContext } from "./context/ThemeContext";
import HomePage from "./pages/HomePage";
import { MantineProvider, createTheme } from "@mantine/core";
function App() {
  const queryClient = new QueryClient();
  const {isDarkMode} = useThemeContext()
  const myColors  = [
    "#e0fbff",
    "#cbf2ff",
    "#9ae2ff",
    "#64d2ff",
    "#3cc5fe",
    "#23bcfe",
    "#09b8ff",
    "#00a1e4",
    "#0090cd",
    "#007cb5"
  ]
  const theme = createTheme({
    colors:{
      primary:[    "#e0fbff",
      "#cbf2ff",
      "#9ae2ff",
      "#64d2ff",
      "#3cc5fe",
      "#23bcfe",
      "#09b8ff",
      "#00a1e4",
      "#0090cd",
      "#007cb5"]
    },
    primaryColor:'primary'
  })
   return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={theme}>
        <Toaster toastOptions={{ duration: 3300,style:{backgroundColor:`${isDarkMode ? "#1e293b" : "white"}` ,color:`${isDarkMode ? "white" : "#334155"}`}}}  />
        <Routes>
          <Route path="/" element={<HomePage/>} index/>
          <Route path="/auth" element={<Auth />} />
          <Route path="/complete-profile" element={<CompleteProfile />} />
          <Route path="/owner" element={<AppLayout/>}>
            <Route index element={<Navigate to="owner-dashboard"/>} />
            <Route path="owner-dashboard" element={<OwnerDashboard/>}/>
            <Route path="projects" element={<Projects/>}/>
            <Route path="projects/:id" element={<SingleProject/>}/>
            <Route path="profile" element={<Profile/>}/>
            <Route path="owner-home" element={<Home/>}/>
            <Route path="proposals/:id" element={<ProposalTable/>}/>
          </Route>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MantineProvider>
    </QueryClientProvider>
  );
}

export default App;
