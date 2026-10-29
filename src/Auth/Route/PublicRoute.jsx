import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PublicRoute = () => {
    
    return localStorage.getItem("isloggedIn") === "true"
        ? <Navigate to="/dashboard" replace />
        : <Outlet />
}

export default PublicRoute