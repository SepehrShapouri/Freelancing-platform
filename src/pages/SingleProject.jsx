import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

function SingleProject() {
    const params = useParams()
    console.log(params.id)
  return (
    <div>SingleProject {params.id}</div>
  )
}

export default SingleProject