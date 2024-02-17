import React from "react";
import { DashboardCard } from "../../pages/OwnerDashboard";
import Chart from "../../UI/Chart";

function FreelancerDashboard() {
  return <div className="w-full h-full bg-sky-50 dark:bg-slate-700 p-4">
<h2 className="text-2xl text-cyan-800 dark:text-indigo-400 font-bold">داشبورد</h2>
<Chart/>
  </div>;
}

export default FreelancerDashboard;
