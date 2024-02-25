import React from "react";
import { DashboardCard } from "../../pages/OwnerDashboard";
import useUser from "../authentication/authHooks/useUser";
import useProposalList from "../proposal/proposalHooks/useProposalList";
import { toPersianNumbers } from "../../utils/toPersianNumbers";

function FreelancerDashboard() {
  const { user, isLoading } = useUser();
  const { proposals, isLoading: isProposalsLoading } = useProposalList();
  console.log(user, proposals);
  const userProposals = proposals?.filter(
    (proposal) => proposal?.user === user?._id
  );
  return (
    <div className="w-full h-full bg-sky-50 dark:bg-slate-700 p-4">
      <h2 className="text-3xl text-cyan-800 dark:text-indigo-400 font-bold">
        داشبورد
      </h2>
      <div className="w-full text-center">
        <h2 className="text-2xl text-cyan-800 dark:text-white font-bold">
          آمار کلی
        </h2>
        <p className=" text-cyan-800 dark:text-white ">
          در یک نما خلاصه ای از فعالیت های خود را ببینید
        </p>
      </div>
      <div>
        <DashboardCard
          color="bg-gradient-to-bl from-indigo-400 to-violet-400"
          title="پیشنهاد های شما"
        >
          <p className="text-white text-xl">
          </p>
        </DashboardCard>
      </div>
    </div>
  );
}

export default FreelancerDashboard;
