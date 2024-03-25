import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'


function Layout() {

  const location = useLocation()
  const login = location.pathname === '/login'
  const section = location.pathname === '/section'
  const signup = location.pathname === '/signup'
  const dec = !(login || section || signup)
  return (
    <>
    {dec && <Header />}
    <Outlet />
    {dec && <Footer />}
    
    </>
  )
}

export default Layout