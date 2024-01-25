import React from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import useSingleProject from "../features/projects/projectsHooks/useSingleProject";
import toLocalDateShort from "../utils/toLocalDateShort";
import Loader from "../UI/Loader";
import { toPersianNumbers, toPersianNumbersWithComma } from "../utils/toPersianNumbers";
import { CiMoneyBill } from "react-icons/ci";
import { ArrowBigLeft, ArrowLeft, Calendar, List, User } from "lucide-react";
import ProjectTags from "../UI/projects/ProjectTags";
import {useMoveBack} from "../hooks/useMoveBack"
import ProposalTable from "../features/proposal/ProposalTable";
function SingleProject() {
  const params = useParams();
  const { isLoading, project } = useSingleProject(params.id);
  const moveBack = useMoveBack()
  console.log(project);
  return (
    <div className="w-full h-full max-h-[1024px] bg-gradient-to-br from-sky-100 to-white p-4">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex flex-col gap-y-2">
          <span onClick={moveBack} className="self-end text-cyan-600"><ArrowLeft/></span>
          <div className="flex justify-evenly">
            <SingleProjectDataCard>
              <h1 className="text-lg">نام پروژه</h1>
              <span>{project.title}</span>
            </SingleProjectDataCard>
            <SingleProjectDataCard>
              <h1 className="text-lg">ثبت شده در تاریخ</h1>
              <span>{toLocalDateShort(project?.createdAt)}</span>
            </SingleProjectDataCard>
          </div>
          <div className="flex justify-evenly">
            <SingleProjectDataCard className="w-[calc(100%-3rem)]">
              <h1 className="text-lg flex items-center justify-between">
                بودجه
                <span className="text-emerald-500 ">
                  <CiMoneyBill className="text-4xl" />
                </span>
              </h1>
              <span>{toPersianNumbersWithComma(project.budget)}</span>
            </SingleProjectDataCard>
          </div>
          <div className="flex justify-evenly">
            <SingleProjectDataCard className="w-[calc(100%-3rem)]">
              <h2 className="text-lg">توضیحات</h2>
              <p className="break-words">{project.description}</p>
            </SingleProjectDataCard>
          </div>
          <div className="flex justify-evenly">
            <SingleProjectDataCard className="w-[calc(100%-3rem)]">
            <Link to={`/owner/proposals/${project._id}`}>  <h2 className="flex items-center justify-between">درخواست ها <span className="text-emerald-400">( {toPersianNumbers(project.proposals.length)} )</span></h2></Link>
            </SingleProjectDataCard>
          </div>
          <div className="flex justify-evenly">
            <SingleProjectDataCard className="w-[120px]">
              <h2 className="text-lg flex items-center justify-between">
                ددلاین{" "}
                <span className="text-cyan-600">
                  <Calendar />
                </span>
              </h2>
              <span>{toLocalDateShort(project?.deadline)}</span>
            </SingleProjectDataCard>
            <SingleProjectDataCard className="">
              <h2 className="text-lg">تگ ها</h2>
              <span className="flex flex-wrap w-[100px] gap-2">
                {project.tags.map((tag) => (
                  <ProjectTags tags={tag} />
                ))}
              </span>
            </SingleProjectDataCard>
          </div>
          <div className="flex justify-center gap-x-1">
            <SingleProjectDataCard className="w-[calc(100%-10rem)]">
              <h2 className="text-md flex items-center justify-between">
                نام فریلنسر
                <span className="text-cyan-600">
                  <User className="text-xs"/>
                </span>
              </h2>
              <p className="text-xs">
                {project.freelancer
                  ? project.freelancer
                  : "فریلنسری پروژه را قبول نکرده"}
              </p>
            </SingleProjectDataCard>
            <SingleProjectDataCard>
              <h2 className="text-sm">وضعیت پروژه</h2>
              <span>
                {project.status == "OPEN" ? (
                  <span className="badge badge--success text-xs">باز</span>
                ) : (
                  <span className="badge badge--danger text-xs">بسته</span>
                )}
              </span>
            </SingleProjectDataCard>
          </div>
          <div className="flex justify-center">
            <SingleProjectDataCard className="w-[calc(100%-3rem)]">
              <h2 className="text-md flex justify-between items-center">دسته بندی <span className="text-cyan-600"><List size={15}/></span></h2>
              <p>{project.category?.title}</p>
            </SingleProjectDataCard>
          </div>
        </div>
      )}
    </div>
  );
}

export default SingleProject;
function SingleProjectDataCard({ children, className = "w-max" }) {
  return (
    <div
      className={`${className} bg-secondary-0 hover:opacity-90 flex flex-col  gap-y-1 transition-all hover:-translate-y-1 shadow-sm  text-cyan-900 rounded-xl  p-4 font-bold`}
    >
      {children}
    </div>
  );
}
