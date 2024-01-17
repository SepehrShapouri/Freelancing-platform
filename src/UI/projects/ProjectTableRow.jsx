import { useState } from "react";
import { CiRead, CiUnread } from "react-icons/ci";

export default function ProjectTableRow({
  title,
  desc,
  deadline,
  budget,
  tags,
  category,
}) {
  const [openDesc, setOpenDesc] = useState(false);
  return (
    <tr className="bg-white border-b">
      <th
        scope="row"
        className="px-6 py-4 font-medium whitespace-nowraw projectTableData"
      >
        {title}
      </th>
      <td
        className="projectTableData flex items-center justify-center border-none"
        onClick={() => setOpenDesc((prev) => !prev)}
      >
        {openDesc ? (
          <CiUnread className="read-desc-icon" />
        ) : (
          <CiRead className="read-desc-icon" />
        )}
      </td>
      <td className="projectTableData">
        <ProjectTags tags={tags} />
      </td>
      <td className="projectTableData">{budget}</td>
      <td className="projectTableData">{category}</td>
      <td className="projectTableData">{deadline}</td>
      <td className="projectTableData"></td>
    </tr>
  );
}
