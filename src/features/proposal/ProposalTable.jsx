import React from 'react'
import useProposalList from './proposalHooks/useProposalList'
import { useParams } from 'react-router-dom'
import useSingleProject from '../projects/projectsHooks/useSingleProject'

function ProposalTable() {
  const {id} = useParams()
  const {isLoading,project} = useSingleProject(id)
    console.log(project?.proposals)
  return (
    <div className='w-full h-full max-h-[1024px] bg-gradient-to-br from-sky-100 to-white p-4'></div>
  )
}

export default ProposalTable