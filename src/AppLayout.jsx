import React from 'react'
import { Outlet } from 'react-router'
import NavComponent from './NavComponent/NavComponent'

export const AppLayout = () => {
  return (
    <div>
        <NavComponent />
        <Outlet />
    </div>
  )
}
