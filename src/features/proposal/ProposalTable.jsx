import React from 'react'
import useProposalList from './proposalHooks/useProposalList'
import { useParams } from 'react-router-dom'
import useSingleProject from '../projects/projectsHooks/useSingleProject'
import { ProjectTableView } from '../../UI/projects/ProjectTableView'
import Loader from '../../UI/Loader'
import Empty from '../../UI/Empty'

function ProposalTable() {
  const {id} = useParams()
  const {isLoading,project} = useSingleProject(id)
    console.log(project?.proposals)
    if(isLoading) return <Loader/>
    if(project.proposals.length < 1) return <Empty resourceName="درخواست"/>
  return (
    <div className='w-full h-full max-h-[1024px] bg-gradient-to-br from-sky-100 to-white p-4'>
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                  توضیحات
                </th>
                <th scope="col" className="px-6 py-3">
                    زمان تحویل
                </th>
                <th scope="col" className="px-6 py-3">
                    هزینه
                </th>
                <th scope="col" className="px-6 py-3">
                    وضعیت
                </th>
                <th scope="col" className="px-6 py-3">
                    عملیات
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

            </tr>
        </tbody>
    </table>
</div>

    </div>
  )
}

export default ProposalTable
