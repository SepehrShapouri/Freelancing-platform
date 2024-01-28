import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import useSingleProject from '../projects/projectsHooks/useSingleProject'
import Loader from '../../UI/Loader'
import { toPersianNumbers, toPersianNumbersWithComma } from '../../utils/toPersianNumbers'
import { useMoveBack } from '../../hooks/useMoveBack'
import { ArrowLeft } from 'lucide-react'
import Modal from '../../UI/Modal'
import useToggleProposal from './proposalHooks/useToggleProposal'
import { useQueryClient } from '@tanstack/react-query'
import { Listbox } from '@headlessui/react'
import ChangeProposalStatus from './ChangeProposalStatus'
function ProposalTable() {
  const moveBack = useMoveBack()
  const {id} = useParams()
  const {isLoading,project} = useSingleProject(id)
    console.log(project?.proposals)
    if(isLoading) return <Loader/>
    if(project.proposals.length < 1) return <div className=" flex justify-between w-full h-screen bg-gradient-to-br from-sky-100 to-white p-2"><h2 className='text-cyan-700'>درخواست فعالی برای این پروژه موجود نیست</h2> <ArrowLeft className='text-cyan-700' onClick={()=>moveBack()}/> </div>
  return (
    <div className='w-full h-full max-h-[1024px] bg-gradient-to-br from-sky-100 to-white p-4'>
      <div className='flex justify-between items-center mb-4'><h2 className='text-cyan-800 text-xs'>درخواست های پروژه {project.title}</h2><ArrowLeft className='text-cyan-600' onClick={()=>moveBack()}/></div>
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
            <th scope="col" className="px-6 py-3 projectTableData">
     نام فریلنسر
                </th>
                <th scope="col" className="px-6 py-3 projectTableData">
                  توضیحات
                </th>
                <th scope="col" className="px-6 py-3 projectTableData">
                    زمان تحویل
                </th>
                <th scope="col" className="px-6 py-3 projectTableData">
                    هزینه
                </th>
                <th scope="col" className="px-6 py-3 projectTableData">
                    وضعیت
                </th>
                <th scope="col" className="px-6 py-3 projectTableData">
                    عملیات
                </th>
            </tr>
        </thead>
        <tbody>
          {project.proposals.map((proposal)=><ProposalRow key={proposal._id} proposal={proposal} project={project}/>)}
        </tbody>
    </table>
</div>

    </div>
  )
}

export default ProposalTable

export function ProposalRow({proposal,project}){
  const {toggleProposalStatus,isToggling} = useToggleProposal()
  const {_id} = proposal
  const {id:projectId} = useParams()
  const queryClinet = useQueryClient()
  const [open,setOpen] = useState(false)
  const statusStyles =[{label:"رد شده",className:"badge badge--danger"},{label:"در انتظار",className:"bg-yellow-400 text-white"},{label:"تایید شده",className:"badge badge--success"}]
  const statusBadge = <span className={`badge ${statusStyles[proposal.status].className}`}>{statusStyles[proposal.status].label}</span>
  const handleSubmit = (status)=>{
    const statusData = {
      id:_id,
      status:{
        status
      }
    }
    toggleProposalStatus(statusData,
      {onSuccess:()=>{
        queryClinet.invalidateQueries({
          queryKey:['single-project'],
        })
        setOpen(false)
    }})
  }
  return <tr className="bg-white border-b hover:bg-gray-50 ">
    <td className="projectTableData">{proposal.user.name}</td>
    <td className='projectTableData'>{proposal.description}</td>
    <td className='projectTableData'>{toPersianNumbers(proposal.duration)} روز</td>
    <td className='projectTableData'>{toPersianNumbersWithComma(proposal.price)}</td>
    <td className='projectTableData'>{statusBadge}</td>
    <td className='projectTableData text-xs transition-all'><button onClick={()=>setOpen(true)} className='text-indigo-800 transition-all hover:text-indigo-400'>تغییر وضعیت</button>
    <Modal open={open} onClose={()=>setOpen(false)} title={`تغییر وضعیت درخواست ${proposal.user.name}`}>
      <div className='flex justify-between'>
        <ChangeProposalStatus onSubmit={handleSubmit}/>
      </div>
    </Modal>
    </td>
  </tr>
}