import { IoAddCircle } from "react-icons/io5";
import useOwnerProjects from "../../features/projects/projectsHooks/useOwnerProjects";
import ProjectTableRow from "./ProjectTableRow";
import Table from "../Table";
import AddProjectBtn from "./AddProjectBtn";
export function ProjectTableView() {
  const { projects, isLoading } = useOwnerProjects();
  if (isLoading) return <Loader />;
  console.log(projects);
  return (
    <div className="w-full flex flex-col transition-all items-center sm:px-20 max-h-[1024px]">
      <div className="project-table-wrapper">
        <Table>
          <Table.header>
            <Table.row>
              <th scope="col" className="projectTableData">
                عنوان پروژه
              </th>
              <th className="projectTableData" scope="col">
                تگ ها
              </th>
              <th scope="col" className="projectTableData">
                بودجه
              </th>
              <th scope="col" className="projectTableData">
                دسته بندی
              </th>
              <th scope="col" className="projectTableData">
                ددلاین
              </th>
              <th scope="col" className="projectTableData">
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
            {projects.map((project) => (
              <ProjectTableRow
                key={project._id}
                project={project}
              />
            ))}
          </Table.body>
        </Table>
      </div>
    </div>
  );
}
