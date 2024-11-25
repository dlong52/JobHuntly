import React from 'react'
import { Sidebar } from '../partials'

const HRLayout = ({ children }) => {
  return (
    <div className='relative flex'>
      <Sidebar />
      <div className='ml-content-admin w-full bg-neutrals-0'>
        {/* <HeaderAdmin /> */}
        <div className="p-[32px]">
          {children}
        </div>
      </div>
    </div>
  )
}

export default HRLayout
