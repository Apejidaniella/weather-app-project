import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from './Header'
import Footer from './Footer'


function Layout() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
      <div className="flex h-full grow flex-col">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  )
        
}

export default Layout;