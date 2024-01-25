import React, { useState } from 'react' 
import ProjectTags from './ProjectTags';
import { toPersianNumbersWithComma } from '../../utils/toPersianNumbers';
import toLocalDateShort from '../../utils/toLocalDateShort';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Modal from '../Modal';
import ConfirmDeleteProject from './ConfirmDeleteProject';
import truncateText from '../../utils/truncateText';
import useRemoveProject from "../../features/projects/projectsHooks/useRemoveProject"
import CreateProjectForm from "../../features/projects/CreateProjectForm"
import ToggleProjectStatus from '../../features/projects/toggleProjectStatus';
function ProjectTableDataWrapper({project}) {
    const [isEditOpen, setIsEditOpen] = useState();
    const [isDeleteOpen, setIsDeleteOpen] = useState();
   const {isDeleting,removeProject}= useRemoveProject()
  return (
    <>
          <td className="projectTableData">
        <div className="flex flex-wrap max-w-[200px] gap-2 justify-center">
          {project.tags.map((t, index) => (
            <ProjectTags tags={t} key={index} />
          ))}
        </div>
      </td>
      <td className="projectTableData">
        {toPersianNumbersWithComma(project.budget)}
      </td>
      <td className="projectTableData">{project?.category?.title}</td>
      <td className="projectTableData">{toLocalDateShort(project.deadline)}</td>
      <td className="projectTableData flex gap-x-2">
                {project.status == "OPEN" ? (
          <span className="badge badge--success">باز</span>
        ) : (
          <span className="badge badge--danger">بسته</span>
        )}
        <ToggleProjectStatus project={project}/>
      </td>
      <td className="projectTableData">
        <span>{project.freelancer ? project.freelancer : "-"}</span>
      </td>
      <td className="projectTableData">
        <div className="flex gap-x-2">
          <>
            <button onClick={() => setIsEditOpen(true)}>
              <FaEdit className="text-lg hover:opacity-65 transition-all text-emerald-500" />
            </button>
            <div className='text-start font-medium text-[16px]'>
            <CreateProjectForm project={project} open={isEditOpen} isEditOpen={isEditOpen} onClose={()=>setIsEditOpen(false)}/>
            </div>
          </>
          <>
            <button onClick={() => setIsDeleteOpen(true)}>
              <FaTrash className="text-lg hover:opacity-65 transition-all text-error" />
            </button>
            <Modal
              open={isDeleteOpen}
              onClose={() => setIsDeleteOpen(false)}
              title={`حذف ${truncateText(project.title)}`}
            >
              <ConfirmDeleteProject
                resourceName={project.title}
                onClose={() => setIsDeleteOpen(false)}
                onConfirm={() => removeProject(project._id,{onSuccess:()=>setIsDeleteOpen(false)})}
                disabled={isDeleting}
              />
            </Modal>
          </>
        </div>
      </td>
    </>
  )
}

export default ProjectTableDataWrapper