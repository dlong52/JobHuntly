import React from 'react'
import CompanyItem from '../CompanyItem'
import Pagination from '../Pagination'

const CompanyList = () => {
  const companies = [
    {
      logo: 'https://cdn-new.topcv.vn/unsafe/200x/https://static.topcv.vn/company_logos/cong-ty-dich-vu-mobifone-khu-vuc-1-chi-nhanh-tong-cong-ty-vien-thong-mobifone-620397a8e7024.jpg',
      name: 'CÔNG TY DỊCH VỤ MOBIFONE KHU VỰC 1',
      description: '',
      location: 'Số 5/82 đường Duy Tân, Phường Dịch Vọng Hậu, Quận Cầu Giấy, Thành phố Hà Nội, Việt Nam',
      jobQuantity: 10
    },
    {
      logo: 'https://cdn-new.topcv.vn/unsafe/200x/https://static.topcv.vn/company_logos/cong-ty-dich-vu-mobifone-khu-vuc-1-chi-nhanh-tong-cong-ty-vien-thong-mobifone-620397a8e7024.jpg',
      name: 'CÔNG TY DỊCH VỤ MOBIFONE KHU VỰC 1',
      description: '',
      location: 'Số 5/82 đường Duy Tân, Phường Dịch Vọng Hậu, Quận Cầu Giấy, Thành phố Hà Nội, Việt Nam',
      jobQuantity: 10
    },
    {
      logo: 'https://cdn-new.topcv.vn/unsafe/200x/https://static.topcv.vn/company_logos/cong-ty-dich-vu-mobifone-khu-vuc-1-chi-nhanh-tong-cong-ty-vien-thong-mobifone-620397a8e7024.jpg',
      name: 'CÔNG TY DỊCH VỤ MOBIFONE KHU VỰC 1',
      description: '',
      location: 'Số 5/82 đường Duy Tân, Phường Dịch Vọng Hậu, Quận Cầu Giấy, Thành phố Hà Nội, Việt Nam',
      jobQuantity: 10
    },
    {
      logo: 'https://cdn-new.topcv.vn/unsafe/200x/https://static.topcv.vn/company_logos/cong-ty-dich-vu-mobifone-khu-vuc-1-chi-nhanh-tong-cong-ty-vien-thong-mobifone-620397a8e7024.jpg',
      name: 'CÔNG TY DỊCH VỤ MOBIFONE KHU VỰC 1',
      description: '',
      location: 'Số 5/82 đường Duy Tân, Phường Dịch Vọng Hậu, Quận Cầu Giấy, Thành phố Hà Nội, Việt Nam',
      jobQuantity: 10
    },
    {
      logo: 'https://cdn-new.topcv.vn/unsafe/200x/https://static.topcv.vn/company_logos/cong-ty-dich-vu-mobifone-khu-vuc-1-chi-nhanh-tong-cong-ty-vien-thong-mobifone-620397a8e7024.jpg',
      name: 'CÔNG TY DỊCH VỤ MOBIFONE KHU VỰC 1',
      description: '',
      location: 'Số 5/82 đường Duy Tân, Phường Dịch Vọng Hậu, Quận Cầu Giấy, Thành phố Hà Nội, Việt Nam',
      jobQuantity: 10
    },
  ]
  return (
    <div className="py-4">
      <div className="flex flex-col pb-6">
        <span className='font-bold font-Inter text-[24px]'>Tất cả công ty</span>
        <span className='text-neutrals-80 text-sm'>Hiển thị 500 kết quả</span>
      </div>
      <div className='flex flex-col gap-y-3'>
        {
          companies?.map((company, index) => (
            <div key={index} className="">
              <CompanyItem data={company} />
            </div>
          ))
        }
      </div>
      <Pagination currentPage={1} totalPages={20} />
    </div>
  )
}

export default CompanyList
