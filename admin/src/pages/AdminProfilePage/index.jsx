import React from 'react'

const AdminProfilePage = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4 rounded-lg">
          <div className="relative">
            <div className="h-32 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 rounded-t-lg">
            </div>
            <div className="flex px-6">
              <div className="flex flex-col">
                <div className="-translate-y-1/2">
                  <img alt="Profile picture of a man with a beard" className="size-28 rounded-full border-4 border-white" src="https://storage.googleapis.com/a1aa/image/FuV7QnKpxpqDPlOvhOm8H7wA7nlsj18ZobcewZsufamTqAmTA.jpg" />
                </div>
                <div className="">
                  <span className="font-semibold text-xl">Nguyễn Long</span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default AdminProfilePage
