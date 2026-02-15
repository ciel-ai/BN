import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import './ProtectedRoute.css'

// Wrapper for routes that require authentication
export const ProtectedRoute = ({ allowedRoles = [] }) => {
    const { currentUser, userRole, loading } = useAuth()

    if (loading) {
        return <div className="loading-screen">Loading CMS...</div>
    }

    if (!currentUser) {
        // Not logged in, redirect to login
        return <Navigate to="/login" replace />
    }

    // specific role check (if provided)
    if (allowedRoles.length > 0 && !allowedRoles.includes(userRole)) {
        // Logged in but doesn't have required role
        // For example, an 'editor' trying to access 'admin' settings
        return <Navigate to="/admin" replace />
    }

    // Authorized, render the child route
    return <Outlet />
}
