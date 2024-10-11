import React from 'react'
import { JobBarChart } from '../../components/Charts'
import { Widget } from '../../components'

const AdminHomePage = () => {
  return (
    <div className='w-full'>
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-3">
          <Widget />
        </div>
        <div className="col-span-3">
          <Widget />
        </div>
        <div className="col-span-3">
          <Widget />
        </div>
        <div className="col-span-3">
          <Widget />
        </div>
      </div>
      <div className="grid grid-cols-12 mt-8">
        <div className="col-span-6 rounded-md shadow-lg ">
          <JobBarChart />
        </div>
        <div className="col-span-6 p-5 rounded-md shadow-lg h-6">

        </div>
      </div>
    </div>
  )
}

export default AdminHomePage
