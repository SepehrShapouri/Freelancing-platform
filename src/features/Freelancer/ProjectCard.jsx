import React from "react";
import ProjectTags from "../../UI/projects/ProjectTags";
import { Button } from "../../UI/shadcn/Button";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "../../utils/toPersianNumbers";
import { useNavigate } from "react-router-dom";
import { getNumberOfDays } from "../../utils/getNumberOfDays";

export function ProjectCard({ project }) {
  const navigate = useNavigate();
  console.log(project);
  const date1 = new Date(project?.deadline);
  const date2 = new Date(project?.createdAt);
  const days = getNumberOfDays(date1, date2);
  return (
    <div className="min-w-[200px] h-[200px] bg-white dark:bg-slate-600 shadow-xl rounded-xl p-3 flex flex-col items-center justify-evenly">
      <h1 className="text-xl font-bold text-cyan-800 dark:text-indigo-400">
        {project.title}
      </h1>
      <p>{toPersianNumbersWithComma(project?.budget)} تومان</p>
      {project?.tags.map((tag, index) => (
        <ProjectTags tags={tag} key={index} />
      ))}
      <p>{toPersianNumbers(days)} روز</p>
      <Button
        onClick={() => navigate(`project/${project?._id}`)}
        className="font-bold bg-sky-300 hover:bg-sky-600 dark:text-white dark:bg-indigo-400 dark:hover:bg-indigo-600"
      >
        مشاهده
      </Button>
    </div>
  );
}
