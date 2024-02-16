import React from "react";
import { useParams } from "react-router-dom";
import useSingleProject from "../features/projects/projectsHooks/useSingleProject";
import ProposalTable from "../features/proposal/ProposalTable";
import { ProposalRow } from "../features/proposal/ProposalRow";
import { ArrowLeft } from "lucide-react";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "../utils/toPersianNumbers";
import { useMoveBack } from "../hooks/useMoveBack";

function Proposal() {
  const params = useParams();
  const { project, isLoading } = useSingleProject(params.id);
  const moveBack = useMoveBack();
  console.log(project);
  if (!project?.proposals?.length)
    return (
      <div className="w-full h-full bg-sky-50 dark:bg-slate-700 p-4">
        <h2 className="text-2xl w-full flex items-center justify-between font-bold text-cyan-800 dark:text-indigo-400">
          پیشنهادی روی این پروژه ثبت نشده{" "}
          <ArrowLeft
            className="text-cyan-600 dark:text-indigo-400"
            onClick={() => moveBack()}
          />
        </h2>
      </div>
    );
  return (
    <div className="w-full h-full bg-sky-50 dark:bg-slate-700">
      <div className="w-full h-full max-h-[1024px] bg-gradient-to-br from-sky-100 to-white p-4 dark:bg-gradient-to-tr dark:from-slate-700 dark:to-slate-700">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-cyan-800 text-sm dark:text-white">
            درخواست های پروژه {project?.title}
          </h2>
          <ArrowLeft
            className="text-cyan-600 dark:text-indigo-400"
            onClick={() => moveBack()}
          />
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
          <table className="w-full text-sm text-left rtl:text-right">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-slate-800">
              <tr>
                <th scope="col" className="px-6 py-3 projectTableData">
                  نام فریلنسر
                </th>
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
              {project?.proposals.map((proposal) => (
                <FreelancerProposalRows
                  key={proposal._id}
                  proposal={proposal}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Proposal;

export function FreelancerProposalRows({ proposal }) {
  const statusStyles = [
    { label: "رد شده", className: "badge badge--danger" },
    { label: "در انتظار", className: "bg-yellow-400 text-white" },
    { label: "تایید شده", className: "badge badge--success" },
  ];
  const statusBadge = (
    <span className={`badge ${statusStyles[proposal.status].className}`}>
      {statusStyles[proposal.status].label}
    </span>
  );
  return (
    <tr className="bg-white border-b dark:bg-slate-800">
      <td className="projectTableData">{proposal.user.name}</td>
      <td className="projectTableData">{proposal.description}</td>
      <td className="projectTableData">
        {toPersianNumbers(proposal.duration)} روز
      </td>
      <td className="projectTableData">
        {toPersianNumbersWithComma(proposal.price)}
      </td>
      <td className="projectTableData">{statusBadge}</td>
    </tr>
  );
}
