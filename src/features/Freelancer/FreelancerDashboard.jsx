import React from "react";
import { DashboardCard } from "../../pages/OwnerDashboard";
import useUser from "../authentication/authHooks/useUser";
import useProposalList from "../proposal/proposalHooks/useProposalList";
import { toPersianNumbers } from "../../utils/toPersianNumbers";
import Loader from "../../UI/Loader";
import { useAllProjects } from "../projects/projectsHooks/useAllProjects";
import { MdLocalOffer } from "react-icons/md";
import { TaskList } from "../../UI/TaskList";
import NoteList from "../../UI/NoteList";
import { useNavigate } from "react-router-dom";

function FreelancerDashboard() {
  const { user, isLoading } = useUser();
  const { proposals, isLoading: isProposalsLoading } = useProposalList();
  const navigate = useNavigate();
  const userProposals = proposals?.filter(
    (proposal) => proposal?.user === user?._id
  );
  if (isLoading || isProposalsLoading) return <Loader />;
  return (
    <div className="p-3  w-full bg-gradient-to-tl from-sky-100 to-white dark:bg-gradient-to-tl dark:from-slate-700 dark:to-slate-700  flex flex-col items-center h-full overflow-y-auto ">
      <h2 className="text-3xl text-cyan-800 dark:text-indigo-400 font-bold">
        داشبورد
      </h2>
      <div className="w-full text-center py-4">
        <h2 className="text-2xl text-cyan-800 dark:text-white font-bold">
          آمار کلی
        </h2>
        <p className=" text-cyan-800 dark:text-white ">
          در یک نما خلاصه ای از فعالیت های خود را ببینید
        </p>
      </div>
      <div className="flex gap-4 mt-4 flex-wrap justify-center">
        <DashboardCard
          color="bg-gradient-to-bl from-indigo-400 to-violet-400"
          title="پیشنهاد های شما"
          logo={<MdLocalOffer className="text-2xl text-white sm:text-4xl" />}
        >
          <p
            className="text-white text-xl"
            onClick={() => navigate("/freelancer/proposals")}
          >
            {toPersianNumbers(userProposals?.length)}
          </p>
        </DashboardCard>
      </div>
      <div className="flex gap-x-4 gap-y-8 mt-12 flex-col sm:flex-row mb-[30px]">
        <TaskList />
        <NoteList />
      </div>
    </div>
  );
}

export default FreelancerDashboard;
