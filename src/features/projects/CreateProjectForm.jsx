import React from 'react'

function CreateProjectForm({open}) {
  return open && <div className='backdrop'></div>
}

export default CreateProjectForm