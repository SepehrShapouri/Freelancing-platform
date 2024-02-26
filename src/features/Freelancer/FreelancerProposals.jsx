import React from "react";
import useProposalList from "../proposal/proposalHooks/useProposalList";
import useUser from "../authentication/authHooks/useUser";
import { FreelancerProposalRows } from "../../pages/Proposal";
import Loader from "../../UI/Loader";
import { useAllProjects } from "../projects/projectsHooks/useAllProjects";
import { FaArrowLeft } from "react-icons/fa";
import { useMoveBack } from "../../hooks/useMoveBack";

function FreelancerProposals() {
  const { proposals, isLoading: isProposalsLoading } = useProposalList();
  const { user, isLoading: isUserLoading } = useUser();
  const userProposals = proposals?.filter(
    (proposal) => proposal?.user === user?._id
  );
  const { projects, isLoading: isProjectsLoading } = useAllProjects();
  const moveBack = useMoveBack();
  if (isProposalsLoading || isUserLoading || isProjectsLoading)
    return <Loader />;
  return (
    <div className="w-full h-full max-h-[1024px] bg-gradient-to-br from-sky-100 to-white p-4 dark:bg-gradient-to-tr dark:from-slate-700 dark:to-slate-700">
      <h2 className="text-2xl font-bold text-cyan-800 dark:text-indigo-400 flex items-cetner justify-between">
        پیشنهاد های شما
        <FaArrowLeft className="cursor-pointer" onClick={moveBack} />
      </h2>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-2 ">
        <table className="w-full text-sm text-left rtl:text-right overflow-auto max-w-full">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-slate-800">
            <tr>
              <th scope="col" className="px-6 py-3 projectTableData">
                توضیحات
              </th>
              <th scope="col" className="px-6 py-3 projectTableData">
                زمان تحویل
              </th>
              <th scope="col" className="px-6 py-3 projectTableData">
                هزینه
              </th>
              <th scope="col" className="px-6 py-3 projectTableData">
                وضعیت
              </th>
            </tr>
          </thead>
          <tbody>
            {userProposals?.map((proposal) => (
              <FreelancerProposalRows
                key={proposal._id}
                proposal={proposal}
                noFirstRow
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FreelancerProposals;
