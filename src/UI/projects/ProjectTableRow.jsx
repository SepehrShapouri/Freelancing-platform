import { useState } from "react";
import ProjectTags from "./ProjectTags";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import truncateText from "../../utils/truncateText";
import toLocalDateShort from "../../utils/toLocalDateShort";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers";

export default function ProjectTableRow({
  title,
  deadline,
  budget,
  tags,
  category,
  status,
  freelancer,
}) {
  return (
    <tr className="bg-white border-b">
      <th
        scope="row"
        className="px-6 py-4 font-medium whitespace-nowraw projectTableData"
      >
        {truncateText(title,10)}
      </th>
      <td className="projectTableData">
        <div className="flex flex-wrap max-w-[200px] gap-2">
          {tags.map((t) => (
            <ProjectTags tags={t} />
          ))}
        </div>
      </td>
      <td className="projectTableData">{toPersianNumbersWithComma(budget)}</td>
      <td className="projectTableData">{category.title}</td>
      <td className="projectTableData">{toLocalDateShort(deadline)}</td>
      <td className="projectTableData">
        {status == "OPEN" ? (
          <span className="badge badge--success">باز</span>
        ) : (
          <span className="badge badge--danger">بسته</span>
        )}
      </td>
      <td className="projectTableData">
        <span>{freelancer ? freelancer : "-"}</span>
      </td>
      <td className="projectTableData flex border-none justify-between">
        <FaEdit className="text-xl text-emerald-500 hover:opacity-55 transition-all  " />
        <MdDelete className="text-xl text-rose-500 hover:opacity-55 transition-all " />
      </td>
    </tr>
  );
}
