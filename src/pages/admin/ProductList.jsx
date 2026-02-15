import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Plus, Edit, Trash2, Search } from 'lucide-react'
import toast from 'react-hot-toast'
import Button from '../../components/Button'
import { dataService } from '../../services/dataService'
import './ProductList.css'

const ProductList = () => {
    const navigate = useNavigate()
    const [searchTerm, setSearchTerm] = useState('')

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        loadProducts()
    }, [])

    const loadProducts = async () => {
        try {
            const data = await dataService.getProducts()
            setProducts(data)
        } catch (error) {
            console.error('Failed to load products', error)
            toast.error('Failed to load products')
        } finally {
            setLoading(false)
        }
    }

    const handleDelete = async (id, title) => {
        if (window.confirm(`Are you sure you want to delete "${title}"? This action cannot be undone.`)) {
            try {
                await dataService.deleteProduct(id)
                toast.success('Product deleted successfully')
                await loadProducts() // Refresh list
            } catch (error) {
                console.error('Failed to delete product', error)
                toast.error('Failed to delete product')
            }
        }
    }

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
    )

    if (loading) {
        return (
            <div className="admin-page">
                <div style={{ padding: '2rem', textAlign: 'center' }}>Loading products...</div>
            </div>
        )
    }

    return (
        <div className="admin-page">
            <div className="page-header">
                <div className="header-title">
                    <h1>Products</h1>
                    <p>Manage your product catalog ({products.length} total)</p>
                </div>
                <Button onClick={() => navigate('/admin/products/new')} variant="primary" icon={<Plus size={18} />}>
                    Add Product
                </Button>
            </div>

            <div className="content-card">
                <div className="table-actions">
                    <div className="search-bar">
                        <Search size={18} className="search-icon" />
                        <input
                            type="text"
                            placeholder="Search products by name or category..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                <div className="table-responsive">
                    <table className="admin-table">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Category</th>
                                <th>SKUs</th>
                                <th>Price</th>
                                <th style={{ textAlign: 'right' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredProducts.map((product) => {
                                const defaultSKU = product.skus?.find(sku => sku.isDefault) || product.skus?.[0];
                                const skuCount = product.skus?.length || 0;

                                return (
                                    <tr key={product.id}>
                                        <td>
                                            <div className="product-cell">
                                                {product.images && product.images.length > 0 ? (
                                                    <img
                                                        src={product.images[0].url}
                                                        alt={product.title}
                                                        className="product-img"
                                                    />
                                                ) : product.image ? (
                                                    <img
                                                        src={product.image}
                                                        alt={product.title}
                                                        className="product-img"
                                                        onError={(e) => { e.target.style.display = 'none' }}
                                                    />
                                                ) : (
                                                    <div className="product-img-placeholder"></div>
                                                )}
                                                <span className="product-name">{product.title}</span>
                                            </div>
                                        </td>
                                        <td>{product.category}</td>
                                        <td>
                                            <span style={{
                                                background: skuCount > 1 ? '#dbeafe' : '#f3f4f6',
                                                color: skuCount > 1 ? '#2563eb' : '#6b7280',
                                                padding: '0.25rem 0.625rem',
                                                borderRadius: '999px',
                                                fontSize: '0.8125rem',
                                                fontWeight: '600'
                                            }}>
                                                {skuCount} SKU{skuCount !== 1 ? 's' : ''}
                                            </span>
                                        </td>
                                        <td>{defaultSKU?.price || product.price || 'Contact for Price'}</td>
                                        <td>
                                            <div className="action-buttons">
                                                <button
                                                    className="action-btn edit"
                                                    onClick={() => navigate(`/admin/products/${product.id}`)}
                                                    title={"Edit"}
                                                >
                                                    <Edit size={18} />
                                                </button>
                                                <button
                                                    className="action-btn delete"
                                                    onClick={() => handleDelete(product.id, product.title)}
                                                    title="Delete"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                            {filteredProducts.length === 0 && (
                                <tr>
                                    <td colSpan="5" className="text-center p-4">
                                        {searchTerm ? `No products found matching "${searchTerm}"` : 'No products yet. Click "Add Product" to create your first product.'}
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ProductList
