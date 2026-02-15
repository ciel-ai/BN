import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Package, FileText, Users, Folder } from 'lucide-react'
import { dataService } from '../../services/dataService'
import './Dashboard.css'

const Dashboard = () => {
    const navigate = useNavigate()
    const [stats, setStats] = useState({
        products: 0,
        categories: 0
    })
    const [recentProducts, setRecentProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        loadDashboardData()
    }, [])

    const loadDashboardData = async () => {
        try {
            const products = await dataService.getProducts()
            const categories = await dataService.getCategories()

            setStats({
                products: products.length,
                categories: categories.length
            })

            // Get the 5 most recent products 
            setRecentProducts(products.slice(0, 5))
        } catch (error) {
            console.error('Failed to load dashboard data', error)
        } finally {
            setLoading(false)
        }
    }

    const statsCards = [
        {
            label: 'Total Products',
            value: stats.products,
            icon: <Package size={24} />,
            color: '#2563eb',
            link: '/admin/products'
        },
        {
            label: 'Categories',
            value: stats.categories,
            icon: <Folder size={24} />,
            color: '#166534',
            link: '/admin/categories'
        },
        {
            label: 'Content Pages',
            value: '5+',
            icon: <FileText size={24} />,
            color: '#7c3aed',
            link: '/admin/content'
        },
    ]

    if (loading) {
        return (
            <div className="dashboard-page">
                <div style={{ padding: '2rem', textAlign: 'center' }}>Loading dashboard...</div>
            </div>
        )
    }

    return (
        <div className="dashboard-page">
            <div className="dashboard-welcome">
                <div>
                    <h1>Bell Needles CMS Dashboard</h1>
                    <p>Welcome back! Manage your website content with ease.</p>
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <button
                        onClick={() => navigate('/admin/products/new')}
                        className="btn btn-primary"
                        style={{ display: 'flex', alignItems: 'center', gap: '5px', textDecoration: 'none', background: '#2563eb', color: 'white', padding: '0.625rem 1rem', borderRadius: '6px', border: 'none', cursor: 'pointer', fontWeight: '500' }}
                    >
                        + Add Product
                    </button>
                    <button
                        onClick={() => navigate('/admin/categories')}
                        className="btn btn-secondary"
                        style={{ display: 'flex', alignItems: 'center', gap: '5px', textDecoration: 'none', background: 'white', color: '#2563eb', padding: '0.625rem 1rem', borderRadius: '6px', border: '1px solid #2563eb', cursor: 'pointer', fontWeight: '500' }}
                    >
                        Manage Categories
                    </button>
                </div>
            </div>

            <div className="dashboard-stats">
                {statsCards.map((stat, index) => (
                    <div
                        key={index}
                        className="stat-card"
                        onClick={() => navigate(stat.link)}
                        style={{ cursor: 'pointer' }}
                    >
                        <div className="stat-icon" style={{ backgroundColor: '#e0f2fe', color: stat.color }}>
                            {stat.icon}
                        </div>
                        <div className="stat-info">
                            <span className="stat-label" style={{ fontWeight: '600', color: '#64748b' }}>{stat.label}</span>
                            <span className="stat-value" style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1e293b' }}>{stat.value}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
                <div className="dashboard-recent">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                        <h3>Recent Products</h3>
                        <button
                            onClick={() => navigate('/admin/products')}
                            style={{ background: 'none', border: 'none', color: '#2563eb', cursor: 'pointer', fontWeight: '500' }}
                        >
                            View All →
                        </button>
                    </div>
                    <div className="content-card">
                        {recentProducts.length > 0 ? (
                            <table className="admin-table">
                                <thead>
                                    <tr>
                                        <th>Product Name</th>
                                        <th>Category</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {recentProducts.map((product) => (
                                        <tr key={product.id}>
                                            <td>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                    {product.images && product.images[0] ? (
                                                        <img
                                                            src={product.images[0].url}
                                                            alt={product.title}
                                                            style={{ width: '32px', height: '32px', objectFit: 'cover', borderRadius: '4px' }}
                                                        />
                                                    ) : product.image ? (
                                                        <img
                                                            src={product.image}
                                                            alt={product.title}
                                                            style={{ width: '32px', height: '32px', objectFit: 'cover', borderRadius: '4px' }}
                                                            onError={(e) => { e.target.style.display = 'none' }}
                                                        />
                                                    ) : (
                                                        <div style={{ width: '32px', height: '32px', background: '#f1f5f9', borderRadius: '4px' }}></div>
                                                    )}
                                                    <span>{product.title}</span>
                                                </div>
                                            </td>
                                            <td>{product.category}</td>
                                            <td>
                                                <button
                                                    className="btn-sm"
                                                    onClick={() => navigate(`/admin/products/${product.id}`)}
                                                    style={{ background: '#2563eb', color: 'white', border: 'none', padding: '0.25rem 0.75rem', borderRadius: '4px', cursor: 'pointer' }}
                                                >
                                                    Edit
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <div style={{ padding: '2rem', textAlign: 'center', color: '#64748b' }}>
                                No products yet. Create your first product!
                            </div>
                        )}
                    </div>
                </div>

                <div className="dashboard-recent">
                    <h3 style={{ marginBottom: '1rem' }}>Quick Actions</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <div
                            className="content-card"
                            style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', cursor: 'pointer' }}
                            onClick={() => navigate('/admin/content')}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <FileText size={20} style={{ color: '#2563eb' }} />
                                <strong>Edit Website Content</strong>
                            </div>
                            <span style={{ color: '#64748b' }}>→</span>
                        </div>
                        <div
                            className="content-card"
                            style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', cursor: 'pointer' }}
                            onClick={() => navigate('/admin/seo')}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <Package size={20} style={{ color: '#7c3aed' }} />
                                <strong>SEO Settings</strong>
                            </div>
                            <span style={{ color: '#64748b' }}>→</span>
                        </div>
                        <div
                            className="content-card"
                            style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', cursor: 'pointer' }}
                            onClick={() => navigate('/admin/users')}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <Users size={20} style={{ color: '#166534' }} />
                                <strong>Manage Users</strong>
                            </div>
                            <span style={{ color: '#64748b' }}>→</span>
                        </div>
                    </div>

                    <div style={{ marginTop: '2rem' }}>
                        <h4 style={{ marginBottom: '0.75rem', fontSize: '0.875rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>System Info</h4>
                        <div className="content-card" style={{ padding: '1rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                <span style={{ color: '#64748b' }}>Storage</span>
                                <strong>LocalStorage</strong>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span style={{ color: '#64748b' }}>Last Updated</span>
                                <strong>{new Date().toLocaleDateString()}</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dashboard
