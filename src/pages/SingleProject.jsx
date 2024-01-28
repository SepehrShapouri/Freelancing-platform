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
    <div className=" sm:flex sm:items-center sm:justify-center w-full h-full max-h-[1024px] bg-gradient-to-br from-sky-100 to-white px-4 py-2 sm:overflow-auto ">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex flex-col gap-y-2 sm:flex-row sm:flex-wrap sm:gap-1 sm:justify-center sm:items-center max-w-[1200px] ">
          <span onClick={moveBack} className="self-end text-cyan-600 sm:absolute sm:top-[80px] sm:left-2"><ArrowLeft/></span>
          <div className="flex sm:justify-evenly justify-center">
            <SingleProjectDataCard className="w-[calc(50%-3rem)]">
              <h1 className="text-lg">نام پروژه</h1>
              <span>{project.title}</span>
            </SingleProjectDataCard>
            <SingleProjectDataCard>
              <h1 className="text-lg">ثبت شده در تاریخ</h1>
              <span>{toLocalDateShort(project?.createdAt)}</span>
            </SingleProjectDataCard>
          </div>
          <div className="flex justify-evenly flex-col sm:flex-row items-center">
            <SingleProjectDataCard className="w-[calc(100%-3rem)] sm:w-full">
              <h1 className="text-lg flex items-center justify-between">
                بودجه
                <span className="text-emerald-500 ">
                  <CiMoneyBill className="text-4xl" />
                </span>
              </h1>
              <span>{toPersianNumbersWithComma(project.budget)}</span>
            </SingleProjectDataCard>
            <SingleProjectDataCard className="w-[calc(100%-3rem)] sm:w-full">
              <h2 className="text-lg">توضیحات</h2>
              <p className="break-words">{project.description}</p>
            </SingleProjectDataCard>
          </div>
          <div className="flex justify-evenly flex-col sm:flex-row items-center">
            <SingleProjectDataCard className="w-[calc(100%-3rem)]">
            <Link to={`/owner/proposals/${project._id}`}>  <h2 className="flex items-center justify-between">درخواست ها <span className="text-emerald-400">( {toPersianNumbers(project.proposals.length)} )</span></h2></Link>
            </SingleProjectDataCard>
            <SingleProjectDataCard className="w-[calc(100%-3rem)] sm:w-full">
              <h2 className="text-md flex justify-between items-center">دسته بندی <span className="text-cyan-600"><List size={15}/></span></h2>
              <p>{project.category?.title}</p>
            </SingleProjectDataCard>
          </div>
          <div className="flex sm:justify-evenly justify-center">
            <SingleProjectDataCard className="w-[120px]">
              <h2 className="text-lg flex items-center justify-between">
                ددلاین
                <span className="text-cyan-600">
                  <Calendar />
                </span>
              </h2>
              <span>{toLocalDateShort(project?.deadline)}</span>
            </SingleProjectDataCard>
            <SingleProjectDataCard className="">
              <h2 className="text-lg">تگ ها</h2>
              <span className="flex flex-wrap w-[120px] gap-2">
                {project.tags.map((tag,index) => (
                  <ProjectTags tags={tag} key={index} />
                ))}
              </span>
            </SingleProjectDataCard>
          </div>
          <div className="flex justify-center ">
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
        </div>
      )}
    </div>
  );
}

export default SingleProject;
function SingleProjectDataCard({ children, className = "w-max" }) {
  return (
    <div
      className={`${className}  bg-secondary-0 hover:opacity-90 flex flex-col  gap-y-1 transition-all hover:-translate-y-1 shadow-sm  text-cyan-900 rounded-xl  p-4 font-bold sm:w-[350px] sm:h-[110px] m-1`}
    >
      {children}
    </div>
  );
}
