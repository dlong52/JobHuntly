import React from 'react'
import { Facebook, Instagram, LinkedIn, logo, Twitter } from '../../../assets/images'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-footer text-white font-Epilogue'>
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-8 py-10">
          <div className="col-span-4 flex flex-col gap-y-5">
            <div className="flex items-center gap-x-2">
              <img src={logo} alt="Logo" className='h-[36px]' />
              <span className='font-RedHatDisplay text-[24px] font-semibold text-white'>JobHuntly</span>
            </div>
            <span className='text-neutrals-40 font-Inter text-[15px]'>Nền tảng tuyệt vời dành cho người tìm việc đam mê khởi nghiệp. Tìm công việc mơ ước của bạn dễ dàng hơn.</span>
          </div>
          <div className="col-span-2">
            <h2 className='text-[16px] font-semibold text'>Về chúng tôi</h2>
            <div className="flex flex-col gap-2 mt-4 text-neutrals-40 font-Inter text-[15px]">
              <Link>Công ty</Link>
              <Link>Định giá</Link>
              <Link>Điều khoản</Link>
              <Link>Khuyên bảo</Link>
              <Link>Chính sách bảo mật</Link>
            </div>
          </div>
          <div className="col-span-2">
            <h2 className='text-[16px] font-semibold'>Tài nguyên</h2>
            <div className="flex flex-col gap-2 mt-4 text-neutrals-40 font-Inter text-[15px]">
              <Link>Tài liệu trợ giúp</Link>
              <Link>Hướng dẫn</Link>
              <Link>Cập nhật</Link>
              <Link>Liên hệ với chúng tôi</Link>
            </div>
          </div>
          <div className="col-span-4">
            <h2 className='text-[16px] font-semibold text'>Nhận thông báo việc làm</h2>
            <p className='mt-4 text-neutrals-40 font-Inter text-[15px]'>Những tin tức, bài viết việc làm mới nhất, được gửi tới hộp thư đến của bạn hàng tuần.</p>
          </div>
        </div>
        <div className="flex justify-between items-center py-4 border-t border-neutrals-60">
          <span>2021 @ JobHuntly. Mọi quyền được bảo lưu.</span>
          <div className="flex gap-3">
            <Link className='bg-neutrals-10 rounded-full size-[35px] flex justify-center items-center' to={'/'}>
              <img className='w-4' src={Facebook} alt="" />
            </Link>
            <Link className='bg-neutrals-10 rounded-full size-[35px] flex justify-center items-center' to={'/'}>
              <img className='w-4' src={Instagram} alt="" />
            </Link>
            <Link className='bg-neutrals-10 rounded-full size-[35px] flex justify-center items-center' to={'/'}>
              <img className='w-4' src={LinkedIn} alt="" />
            </Link>
            <Link className='bg-neutrals-10 rounded-full size-[35px] flex justify-center items-center' to={'/'}>
              <img className='w-4' src={Twitter} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
