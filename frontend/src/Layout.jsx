import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'


function Layout() {

  const location = useLocation()
  const login = location.pathname === '/login'
  const section = location.pathname === '/section'
  const signup = location.pathname === '/signup'
  const mensignup = location.pathname === '/mensignup'
  const dash = location.pathname === '/dash'
  const profile = location.pathname === '/profile'
  const create_post = location.pathname === '/create-post'
  const forgot_password = location.pathname === '/forgot-password'
  const reset_password = location.pathname === '/reset-password'
  const dec = !(login || section || signup || mensignup || dash || profile || create_post || forgot_password || reset_password)
  return (
    <>
    {dec && <Header />}
    <Outlet />
    {dec && <Footer />}
    
    </>
  )
}

export default Layout