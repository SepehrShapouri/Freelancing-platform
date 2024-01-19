import React from 'react'

function AddProject({isFormOpen}) {
  return  isFormOpen && <div className='w-full h-screen bg-secondary-900 fixed z-50'>AddProject</div>
}

export default AddProject