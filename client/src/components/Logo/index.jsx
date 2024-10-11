import React from 'react'
import { logo } from '../../assets/images'

const Logo = () => {
    return (
        <div className="flex gap-x-2 px-6 py-8">
            <img src={logo} alt="Logo" />
            <span className='font-RedHatDisplay text-[24px] font-semibold'>JobHuntly</span>
        </div>
    )
}

export default Logo
