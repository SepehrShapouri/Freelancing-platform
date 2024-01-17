import { IoAddCircle } from "react-icons/io5";
import useOwnerProjects from "../../features/projects/projectsHooks/useOwnerProjects";
import ProjectTableRow from "./ProjectTableRow";

export function ProjectTableView() {
  const { projects } = useOwnerProjects();
  return (
    <div className="w-full flex flex-col transition-all items-center sm:px-20 max-h-[1024px]">
      <div className="flex w-full items-center justify-between my-14 px-2">
        <h2 className="text-cyan-800 text-xl sm:text-2xl font-bold">
          پروژه های شما
        </h2>
        <button className="flex items-center bg-cyan-800 text-white px-4 py-2 justify-between w-[120px] sm:w-[150px] sm:text-lg text-sm rounded-xl hover:bg-cyan-600 transition-all">
          پروژه جدید <IoAddCircle />
        </button>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-[300px] sm:w-[600px] md:w-[800px] lg:w-[1024px] transition-all max-h-[1024px]">
        <table className="w-full text-sm text-left rtl:text-right">
          <thead className="text-xs uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-cyan-800">
                نام پروژه
              </th>
              <th scope="col" className="px-6 py-3 text-cyan-800">
                توضیحات
              </th>
              <th className="px-6 py-3 text-cyan-800" scope="col">
                تگ ها
              </th>
              <th scope="col" className="px-6 py-3 text-cyan-800">
                بودجه
              </th>
              <th scope="col" className="px-6 py-3 text-cyan-800">
                دسته بندی
              </th>
              <th scope="col" className="px-6 py-3 text-cyan-800">
                ددلاین
              </th>
              <th scope="col" className="pc-6 py-4 text-cyan-800">
                تنظیمات
              </th>
            </tr>
          </thead>
          <tbody>
            {projects.map((p) => (
              <ProjectTableRow
                title={p.title}
                desc={p.desc}
                budget={p.budget}
                deadline={p.deadline}
                category={p.category}
                tags={p.tags}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
