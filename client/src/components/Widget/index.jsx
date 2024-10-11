import { BuildingOffice2Icon } from '@heroicons/react/24/outline'
import React from 'react'

const Widget = () => {
  return (
    <div className='p-5 rounded-md w-full bg-blue-950 text-white'>
      <div className="pb-5 border-b flex items-center gap-3">
        <BuildingOffice2Icon className='w-5'/>
        <span>Company balance</span>
      </div>
      <div className="pt-5 border-t">
        <span className='font-semibold text-[20px] font-RedHatDisplay'>120.000.000 VND</span>
      </div>
    </div>
  )
}

export default Widget
