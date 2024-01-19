
import truncateText from "../../utils/truncateText";
import Table from "../Table";
import ProjectTableDataWrapper from "./ProjectTableDataWrapper";

export default function ProjectTableRow({ project }) {
  return (
    <Table.row className="bg-white border-b">
      <th
        scope="row"
        className="font-medium whitespace-nowrap projectTableData"
      >
        {truncateText(project.title, 10)}
      </th>
      <ProjectTableDataWrapper project={project}/>
    </Table.row>
  );
}
