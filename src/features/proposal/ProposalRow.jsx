import { useQueryClient } from '@tanstack/react-query'
import React, { useState } from 'react'
import useToggleProposal from './proposalHooks/useToggleProposal'
import ChangeProposalStatus from './ChangeProposalStatus'
import { toPersianNumbers, toPersianNumbersWithComma } from '../../utils/toPersianNumbers'
import Modal from '../../UI/Modal'

export function ProposalRow({proposal}){
    const {toggleProposalStatus,isToggling} = useToggleProposal()
    const {_id} = proposal
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
    return <tr className="bg-white border-b ">
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