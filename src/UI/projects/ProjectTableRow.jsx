import { useState } from "react";
import ProjectTags from "./ProjectTags";
import { FaEdit, FaTrash } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import truncateText from "../../utils/truncateText";
import toLocalDateShort from "../../utils/toLocalDateShort";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers";
import Table from "../Table";
import Modal from "../Modal";
import ConfirmDeleteProject from "./ConfirmDeleteProject";

export default function ProjectTableRow({
  id,
  title,
  deadline,
  budget,
  tags,
  category,
  status,
  freelancer,
}) {
  const [isEditOpen, setIsEditOpen] = useState();
  const [isDeleteOpen,setIsDeleteOpen] = useState()
  return (
    <Table.row className="bg-white border-b">
      <th
        scope="row"
        className="px-6 py-4 font-medium whitespace-nowraw projectTableData"
      >
        {truncateText(title, 10)}
      </th>
      <td className="projectTableData">
        <div className="flex flex-wrap max-w-[200px] gap-2">
          {tags.map((t, index) => (
            <ProjectTags tags={t} key={index} />
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
      <td className="projectTableData">
        <div className="flex gap-y-4 justify-between">
          <>
            <button onClick={() => setIsEditOpen(true)}>
              <FaEdit className="text-lg hover:opacity-65 transition-all text-emerald-500" />
            </button>
            <Modal
              open={isEditOpen}
              title="my modal"
              onClose={() => setIsEditOpen(false)}
            ></Modal>
          </>
          <>
          <button onClick={()=>setIsDeleteOpen(true)}>
            <FaTrash className="text-lg hover:opacity-65 transition-all text-error" />
          </button>
          <Modal open={isDeleteOpen} onClose={()=>setIsDeleteOpen(false)} title={`حذف ${truncateText(title)}`}>
            <ConfirmDeleteProject resourceName={title} onClose={()=>setIsDeleteOpen(false)} onConfirm={()=>{}}/>
          </Modal>
          </>
        </div>
      </td>
    </Table.row>
  );
}
