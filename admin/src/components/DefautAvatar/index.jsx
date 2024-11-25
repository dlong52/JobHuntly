import { UserIcon } from '@heroicons/react/24/solid'
import React from 'react'

const DefautAvatar = () => {
  return (
    <div className='w-full aspect-square rounded-full flex items-center justify-center bg-slate-500'>
        <UserIcon className='w-4/5 text-white'/>
    </div>
  )
}

export default DefautAvatar