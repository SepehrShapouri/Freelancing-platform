import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useSingleProject from "../features/projects/projectsHooks/useSingleProject";
import Loader from "../UI/Loader";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "../utils/toPersianNumbers";
import { getNumberOfDays } from "../utils/getNumberOfDays";
import ProjectTags from "../UI/projects/ProjectTags";
import { Button } from "../UI/shadcn/Button";
import { useMoveBack } from "../hooks/useMoveBack";
import { FaArrowLeft } from "react-icons/fa";
import Modal from "../UI/Modal";
import CreateProposalForm from "../features/proposal/FreelancerProposal/CreateProposalForm";
import ProposalTable from "../features/proposal/ProposalTable";

function ProjectView() {
  const params = useParams();
  const { project, isLoading: isProjectloading } = useSingleProject(params.id);
  const date1 = new Date(project?.deadline);
  const date2 = new Date(project?.createdAt);
  const days = getNumberOfDays(date1, date2);
  const moveBack = useMoveBack();
  const [createProposalOpen,setCreateProposalOpen] = useState(false)
  const navigate = useNavigate()
  console.log(project)
  if (isProjectloading) return <Loader />;
  return (
    <div className="bg-sky-50 dark:bg-slate-700 w-full h-full p-4 flex items-center justify-center">
      <div className="bg-white dark:bg-slate-600 rounded-xl shadow-md w-[330px] sm:w-[600px] flex flex-col h-[400px] p-8 justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl sm:text-3xl flex w-full justify-between items-center transition-all font-bold text-cyan-800 dark:text-indigo-400">
            {project?.title}{" "}
            <FaArrowLeft
              className="cursor-pointer hover:text-cyan-600 transition-all dark:hover:text-indigo-200"
              onClick={moveBack}
            />
          </h1>
          <p className="text-lg font-bold ">
            {toPersianNumbersWithComma(project?.budget)} تومان
          </p>
          <p>زمان پیشنهادی {toPersianNumbers(days)} روز</p>
        </div>
        <span className="text">{project?.description}</span>
        <div>
          {project?.tags.map((tag, index) => (
            <ProjectTags tags={tag} key={index} />
          ))}
        </div>
        <div className="w-full flex flex-col gap-3">
          <Button onClick={()=>navigate(`/freelancer/proposals/${project?._id}`)} className="bg-white border-2 border-cyan-800 text-cyan-800 hover:bg-white hover:opacity-60 dark:hover:bg-slate-600 dark:bg-slate-600 dark:border-indigo-400 dark:text-indigo-400">
            مشاهده پیشنهاد های این پروژه
          </Button>
          <Button onClick={()=>setCreateProposalOpen(true)} className="bg-sky-400 text-white font-bold dark:bg-indigo-400 hover:bg-sky-600 dark:hover:bg-indigo-600 ">
            ثبت پیشنهاد روی پروژه
          </Button>
          <Modal open={createProposalOpen} title="ثبت پیشنهاد" onClose={()=>setCreateProposalOpen(false)}>
            <CreateProposalForm projectId={params.id} onClose={()=>setCreateProposalOpen(false)}/>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default ProjectView;
