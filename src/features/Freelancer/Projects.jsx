import { useEffect, useState } from "react";
import useUser from "../authentication/authHooks/useUser";
import { useAllProjects } from "../projects/projectsHooks/useAllProjects";
import { useQueryClient } from "@tanstack/react-query";
import Loader from "../../UI/Loader";
import { LandingPageStep } from "../../pages/HomePage";
import { List, Search } from "lucide-react";
import { ProjectSection } from "./ProjectSection";
import { toPersianNumbers } from "../../utils/toPersianNumbers";
import { SearchProjects } from "./SearchProjects";

function Projects() {
  const { projects, isLoading } = useAllProjects();
  const { user, isLoading: isUserLoading } = useUser();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("budget-asc");
  const queryClient = useQueryClient();
  useEffect(() => {
    queryClient.invalidateQueries("all-projects");
  }, [search, sortBy, selectedCategory, queryClient]);
  let filteredProjects = projects || [];
  if (search) {
    filteredProjects = filteredProjects.filter((project) =>
      project?.title.toLowerCase().includes(search.toLowerCase())
    );
  }
  if (selectedCategory !== "all") {
    filteredProjects = filteredProjects.filter(
      (project) => project?.category._id == selectedCategory
    );
  }
  if (sortBy === "budget-asc") {
    filteredProjects = filteredProjects.sort((a, b) => b.budget - a.budget);
  } else if (sortBy === "budget-desc") {
    filteredProjects = filteredProjects.sort((a, b) => a.budget - b.budget);
  }
  if (isLoading)
    return (
      <div className="w-full h-screen dark:bg-slate-700 bg-sky-100">
        <Loader />
      </div>
    );
  return (
    <div className="flex flex-col items-center xl:max-w-screen-xl w-full h-full bg-gradient-to-tl from-white to-sky-100 dark:bg-gradient-to-tl dark:from-slate-700 dark:to-slate-700 justify-evenly overflow-auto max-h-screen">
      <h1 className="text-2xl font-bold text-cyan-800 dark:text-indigo-400">
        خوش اومدی {user?.name}
      </h1>
      <div className="w-full flex items-center justify-evenly gap-2">
        <LandingPageStep
          logo={
            <Search size={40} className="text-blue-400 dark:text-indigo-400" />
          }
          title="بگرد"
          description="پروژه مورد نظرتو پیدا کن!"
        />
        <LandingPageStep
          logo={
            <List size={40} className="text-blue-400 dark:text-indigo-400" />
          }
          title="پیشنهاد بده!"
          description="روی پروژه پیشنهاد بزار"
        />
      </div>
      <div className="w-full  flex flex-col items-center justify-between sm:justify-evenly gap-y-4 ">
        <h1 className="text-2xl text-cyan-800 dark:text-white">
          جستجو پیشرفته
        </h1>
        <SearchProjects
          setSelectedCategory={setSelectedCategory}
          setSearch={setSearch}
          setSortBy={setSortBy}
        />
      </div>
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-2xl font-bold text-cyan-800 dark:text-indigo-50 m-4">
          پروژه های فعال {toPersianNumbers(filteredProjects?.length)}
        </h2>
        <div>
          {isLoading ? (
            <Loader />
          ) : (
            <ProjectSection projects={filteredProjects} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Projects;
