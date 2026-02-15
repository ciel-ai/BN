import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { LayoutDashboard, Package, FileText, Settings, LogOut, ExternalLink, Users, Search, Folder, Shield, Lock } from 'lucide-react'
import './AdminBase.css'
import './AdminLayout.css'

const AdminLayout = () => {
    const { logout, userRole, isAdmin } = useAuth()
    const location = useLocation()
    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
            await logout()
            navigate('/login')
        } catch (error) {
            console.error("Logout failed", error)
        }
    }
    const menuItems = [
        { path: '/admin', icon: <LayoutDashboard size={20} />, label: 'Dashboard', roles: ['admin', 'editor'] },
        { path: '/admin/pages', icon: <FileText size={20} />, label: 'Pages', roles: ['admin'] },
        { path: '/admin/products', icon: <Package size={20} />, label: 'Products', roles: ['admin', 'editor'] },
        { path: '/admin/categories', icon: <Folder size={20} />, label: 'Categories', roles: ['admin', 'editor'] },
        { path: '/admin/dealer-access', icon: <Lock size={20} />, label: 'Dealer Access', roles: ['admin'] },
        { path: '/admin/users', icon: <Users size={20} />, label: 'Users & Roles', roles: ['admin'] },
        { path: '/admin/settings', icon: <Settings size={20} />, label: 'Settings', roles: ['admin'] },
    ]

    return (
        <div className="admin-layout">
            {/* Sidebar */}
            <aside className="admin-sidebar">
                <div className="sidebar-header">
                    <h3>BN CMS</h3>
                    <span className="role-badge">{userRole}</span>
                </div>

                <nav className="sidebar-nav">
                    {menuItems.map((item) => {
                        if (!item.roles.includes(userRole) && userRole !== 'admin') return null;

                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`sidebar-link ${location.pathname === item.path ? 'active' : ''}`}
                            >
                                {item.icon}
                                <span>{item.label}</span>
                            </Link>
                        )
                    })}
                </nav>

                <div className="sidebar-footer">
                    <Link to="/" target="_blank" className="sidebar-link plain">
                        <ExternalLink size={18} />
                        <span>View Site</span>
                    </Link>
                    <button onClick={handleLogout} className="sidebar-link logout-btn">
                        <LogOut size={18} />
                        <span>Logout</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="admin-content">
                <header className="admin-header">
                    <h2>{menuItems.find(item => item.path === location.pathname)?.label || 'Admin'}</h2>
                    <div className="header-user">
                        <span>Logged in as <strong>{userRole}</strong></span>
                    </div>
                </header>
                <div className="admin-page-container">
                    <Outlet />
                </div>
            </main>
        </div>
    )
}

export default AdminLayout
