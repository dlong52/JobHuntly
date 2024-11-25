import React from 'react'
import Header from '../partials/Header'
import Footer from '../partials/Footer'

const MainLayout = ({ children }) => {
  return (
    <div className=''>
      <Header />
      <div className="bg-neutrals-0 text-neutrals-100 min-h-screen">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout
