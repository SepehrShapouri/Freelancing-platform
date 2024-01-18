import { IoAddCircle } from "react-icons/io5";
import useOwnerProjects from "../../features/projects/projectsHooks/useOwnerProjects";
import ProjectTableRow from "./ProjectTableRow";
import Table from "../Table";
import AddProjectBtn from "./AddProjectBtn";
const projects = [
    {id:1,title:"1dfhdfhshsdhsdghkgjhggjgjgjhlggkjjkgjkgjkg",description:"1",budget:1,category:{title:"1"},status:"OPEN",tags:["javascript","react","tailwind"],deadline:"2024/12/8",freelancer:"sepehr shapouri"},
    {id:1,title:"1",description:"1",budget:1500000,category:{title:"1"},status:"OPEN",tags:["javascript","react","tailwind"],deadline:"2024/12/8",freelancer:""},
    {id:1,title:"1",description:"1",budget:1,category:{title:"1"},status:"OPEN",tags:["javascript","react","tailwind"],deadline:"2024/12/8",freelancer:"sepehr shapouri"}
]
export function ProjectTableView() {
//   const { projects } = useOwnerProjects();
  return (
    <div className="w-full flex flex-col transition-all items-center sm:px-20 max-h-[1024px]">
      <div className="flex w-full items-center justify-between my-14 px-2">
        <h2 className="text-cyan-800 text-xl sm:text-2xl font-bold">
          پروژه های شما
        </h2>
        <AddProjectBtn/>
      </div>
      <div className="project-table-wrapper">
        <Table>
          <Table.header>
            <Table.row>
              <th scope="col" className="px-6 py-3 text-cyan-800">
                عنوان پروژه
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
              <th scope="col" className="px-6 py-3 text-cyan-800">
                وضعیت
              </th>
              <th scope="col" className="pc-6 py-4 text-cyan-800">
                نام فریلنسر
              </th>
              <th scope="col" className="pc-6 py-4 text-cyan-800">
                تنظیمات
              </th>
            </Table.row>
          </Table.header>
          <Table.body>
            {projects.map((p) => (
              <ProjectTableRow
              key={p.id}
                title={p.title}
                desc={p.description}
                budget={p.budget}
                deadline={p.deadline}
                category={p.category}
                tags={p.tags}
                status={p.status}
                freelancer={p.freelancer}
              />
            ))}
          </Table.body>
        </Table>
      </div>
    </div>
  );
}
