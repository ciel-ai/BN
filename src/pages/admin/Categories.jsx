import { useState, useEffect } from 'react'
import { Folder, Plus, Edit, Trash2 } from 'lucide-react'
import toast from 'react-hot-toast'
import Button from '../../components/Button'
import { dataService } from '../../services/dataService'

const Categories = () => {
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true)
    const [showModal, setShowModal] = useState(false)
    const [editingCategory, setEditingCategory] = useState(null)
    const [formData, setFormData] = useState({ name: '' })

    useEffect(() => {
        loadCategories()
    }, [])

    const loadCategories = async () => {
        try {
            const cats = await dataService.getCategories()
            setCategories(cats)
        } catch (error) {
            console.error('Failed to load categories', error)
            toast.error('Failed to load categories')
        } finally {
            setLoading(false)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await dataService.saveCategory({
                ...formData,
                id: editingCategory?.id
            })
            toast.success(editingCategory ? 'Category updated!' : 'Category created!')
            setShowModal(false)
            setEditingCategory(null)
            setFormData({ name: '' })
            loadCategories()
        } catch (error) {
            console.error('Failed to save category', error)
            toast.error('Failed to save category')
        }
    }

    const handleEdit = (category) => {
        setEditingCategory(category)
        setFormData({ name: category.name })
        setShowModal(true)
    }

    const handleDelete = async (id, name, count) => {
        if (count > 0) {
            toast.error(`Cannot delete "${name}" - it has ${count} product(s)`)
            return
        }

        if (window.confirm(`Are you sure you want to delete "${name}"?`)) {
            try {
                await dataService.deleteCategory(id)
                toast.success('Category deleted successfully')
                loadCategories()
            } catch (error) {
                console.error('Failed to delete category', error)
                toast.error(error.message || 'Failed to delete category')
            }
        }
    }

    const openAddModal = () => {
        setEditingCategory(null)
        setFormData({ name: '' })
        setShowModal(true)
    }

    if (loading) {
        return (
            <div className="admin-page">
                <div style={{ padding: '2rem', textAlign: 'center' }}>Loading categories...</div>
            </div>
        )
    }

    return (
        <div className="admin-page">
            <div className="page-header">
                <div className="header-title">
                    <h1>Categories</h1>
                    <p>Organize products into categories ({categories.length} total)</p>
                </div>
                <Button variant="primary" icon={<Plus size={18} />} onClick={openAddModal}>
                    Add Category
                </Button>
            </div>

            <div className="grid-2">
                {categories.map(cat => (
                    <div key={cat.id} className="content-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{
                                width: '40px', height: '40px',
                                background: 'var(--color-gray-100)',
                                borderRadius: '8px',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                color: 'var(--color-primary)'
                            }}>
                                <Folder size={20} />
                            </div>
                            <div>
                                <h3 style={{ margin: 0, fontSize: '1rem' }}>{cat.name}</h3>
                                <span style={{ fontSize: '0.85rem', color: '#666' }}>{cat.count} Product{cat.count !== 1 ? 's' : ''}</span>
                            </div>
                        </div>
                        <div className="action-buttons">
                            <button className="action-btn edit" onClick={() => handleEdit(cat)} title="Edit">
                                <Edit size={16} />
                            </button>
                            <button
                                className="action-btn delete"
                                onClick={() => handleDelete(cat.id, cat.name, cat.count)}
                                title={cat.count > 0 ? 'Cannot delete - has products' : 'Delete'}
                                style={cat.count > 0 ? { opacity: 0.5, cursor: 'not-allowed' } : {}}
                            >
                                <Trash2 size={16} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {showModal && (
                <div className="modal-overlay" onClick={() => setShowModal(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2>{editingCategory ? 'Edit Category' : 'Add New Category'}</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Category Name</label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ name: e.target.value })}
                                    placeholder="e.g. Needles, Scissors"
                                    required
                                    autoFocus
                                />
                            </div>
                            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                                <button type="submit" className="btn-primary" style={{ flex: 1 }}>
                                    {editingCategory ? 'Update' : 'Create'}
                                </button>
                                <button type="button" onClick={() => setShowModal(false)} className="btn-secondary" style={{ flex: 1 }}>
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <style>{`
                .grid-2 {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                    gap: 1rem;
                }

                .modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.5);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 1000;
                }

                .modal-content {
                    background: white;
                    padding: 2rem;
                    border-radius: 8px;
                    width: 90%;
                    max-width: 500px;
                    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
                }

                .modal-content h2 {
                    margin: 0 0 1.5rem;
                }

                .btn-primary {
                    background: var(--color-primary);
                    color: white;
                    border: none;
                    padding: 0.625rem 1.25rem;
                    border-radius: 4px;
                    font-weight: 500;
                    cursor: pointer;
                }

                .btn-primary:hover {
                    background: #1e40af;
                }

                .btn-secondary {
                    background: var(--color-gray-200);
                    color: var(--color-gray-700);
                    border: none;
                    padding: 0.625rem 1.25rem;
                    border-radius: 4px;
                    font-weight: 500;
                    cursor: pointer;
                }

                .btn-secondary:hover {
                    background: var(--color-gray-300);
                }
            `}</style>
        </div>
    )
}

export default Categories
