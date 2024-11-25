import React from 'react'
import { logo } from '../../assets/images'

const Logo = () => {
    return (
        <div className="flex items-center gap-x-2 px-6 h-[75px]">
            <img src={logo} alt="Logo"  className='h-[36px]'/>
            <span className='font-RedHatDisplay text-[24px] font-semibold text-neutrals-100'>JobHuntly</span>
        </div>
    )
}

export default Logo
