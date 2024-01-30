import useOwnerProjects from "./projectsHooks/useOwnerProjects";
import ProjectTableRow from "./ProjectTableRow";
import Table from "../../UI/Table";
import Loader from "../../UI/Loader";
export function ProjectTableView() {
  const { projects, isLoading } = useOwnerProjects();
  if (isLoading) return <Loader />;
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
              <th scope="col" className="projectTableData">
                نام فریلنسر
              </th>
              <th scope="col" className="projectTableData">
                تنظیمات
              </th>
              <th scope="col" className="projectTableData">
                صفحه پروژه
              </th>
            </Table.row>
          </Table.header>
          <Table.body>
            {projects.map((project) => (
              <ProjectTableRow key={project._id} project={project} />
            ))}
          </Table.body>
        </Table>
      </div>
    </div>
  );
}
