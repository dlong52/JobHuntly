import React from 'react'
import { HeaderAdmin, SidebarAdmin } from '../partials'

const AdminLayout = ({ children }) => {
  return (
    <div className='relative flex'>
      <SidebarAdmin />
      <div className='ml-content-admin w-full'>
        <HeaderAdmin />
        <div className="p-[32px]">
          {children}
        </div>
      </div>
    </div>
  )
}

export default AdminLayout