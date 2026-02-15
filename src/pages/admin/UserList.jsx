import { Users, Shield, Edit } from 'lucide-react'
import Button from '../../components/Button'

const UserList = () => {
    // Mock user data
    const users = [
        { id: 1, name: 'Admin', email: 'admin@bellneedles.com', role: 'admin', lastActive: 'Now' },
        { id: 2, name: 'Editor', email: 'editor@bellneedles.com', role: 'editor', lastActive: '2 days ago' },
        { id: 3, name: 'Guest', email: 'demo@guest.com', role: 'viewer', lastActive: '1 week ago' },
    ]

    return (
        <div className="admin-page">
            <div className="page-header">
                <div className="header-title">
                    <h1>Users & Roles</h1>
                    <p>Manage access permissions</p>
                </div>
                <Button variant="primary" icon={<Users size={18} />}>
                    Invite User
                </Button>
            </div>

            <div className="content-card">
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Last Active</th>
                            <th style={{ textAlign: 'right' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td>
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        <span style={{ fontWeight: '600' }}>{user.name}</span>
                                        <span style={{ fontSize: '0.85rem', color: '#666' }}>{user.email}</span>
                                    </div>
                                </td>
                                <td>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                        <Shield size={14} color="var(--color-primary)" />
                                        {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                                    </div>
                                </td>
                                <td><span className="status-badge active">Active</span></td>
                                <td>{user.lastActive}</td>
                                <td style={{ textAlign: 'right' }}>
                                    <button className="action-btn edit">
                                        <Edit size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UserList
