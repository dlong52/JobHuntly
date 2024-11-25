import React from 'react'
import { Link } from 'react-router-dom'
import { User } from '../../../assets/images'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const HeaderAdmin = () => {
    return (
        <div className='flex justify-between items-center px-8 h-[75px] w-full border-b bg-white sticky top-0'>
            <h1 className='font-bold text-[24px] font-RedHatDisplay'>Dashboard</h1>
            <div className="flex items-center gap-3">
                <Link to={'/admin/profile'} className='flex items-center gap-2'>
                    <img src={User} alt="" className='p-3 rounded-full bg-slate-300' />
                    <div className="flex flex-col  leading-5">
                        <span className='font-semibold'>Nguyễn Long</span>
                        <span className='text-[13px] text-neutrals-80'>dlong.work23@gmail.com</span>
                    </div>
                </Link>
                <button><ChevronDownIcon className='w-5' /> </button>
            </div>
        </div>
    )
}

export default HeaderAdmin
