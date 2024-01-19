
import truncateText from "../../utils/truncateText";
import Table from "../Table";
import ProjectTableDataWrapper from "./ProjectTableDataWrapper";

export default function ProjectTableRow({ project }) {
  return (
    <Table.row className="bg-white border-b">
      <th
        scope="row"
        className="px-6 py-4 font-medium whitespace-nowraw projectTableData"
      >
        {truncateText(project.title, 10)}
      </th>
      <ProjectTableDataWrapper project={project}/>
    </Table.row>
  );
}
