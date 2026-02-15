import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, Save, Plus, X } from 'lucide-react'
import toast from 'react-hot-toast'
import Button from '../../components/Button'
import MediaUpload from '../../components/admin/MediaUpload'
import RichTextEditor from '../../components/admin/RichTextEditor'
import SKUManager from '../../components/admin/SKUManager'
import { dataService } from '../../services/dataService'
import './ProductForm.css'

const ProductForm = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const isEditMode = !!id

    const [loading, setLoading] = useState(false)
    const [categories, setCategories] = useState([])
    const [formData, setFormData] = useState({
        title: '',
        category: '',
        description: '',
        price: 'Contact for Price',
        features: [''],
        specifications: {},
        availableModels: [''],
        images: [],
        videoUrl: '',
        skus: [{ id: '1', code: '', name: '', price: '', stock: 'in-stock', isDefault: true }]
    })

    useEffect(() => {
        loadCategories()
        if (isEditMode) {
            loadProduct()
        }
    }, [isEditMode, id])

    const loadCategories = async () => {
        try {
            const cats = await dataService.getCategories()
            setCategories(cats)
        } catch (error) {
            console.error("Failed to load categories", error)
        }
    }

    const loadProduct = async () => {
        try {
            const product = await dataService.getProduct(id)
            if (product) {
                setFormData({
                    ...product,
                    features: product.features || [''],
                    specifications: product.specifications || {},
                    availableModels: product.availableModels || [''],
                    images: product.images || [],
                    videoUrl: product.videoUrl || '',
                    skus: product.skus || [{ id: '1', code: '', name: '', price: '', stock: 'in-stock', isDefault: true }]
                })
            } else {
                toast.error('Product not found')
                navigate('/admin/products')
            }
        } catch (error) {
            console.error("Failed to load product", error)
            toast.error('Failed to load product')
        }
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleFeatureChange = (index, value) => {
        const newFeatures = [...formData.features]
        newFeatures[index] = value
        setFormData({ ...formData, features: newFeatures })
    }

    const addFeature = () => {
        setFormData({ ...formData, features: [...formData.features, ''] })
    }

    const removeFeature = (index) => {
        const newFeatures = formData.features.filter((_, i) => i !== index)
        setFormData({ ...formData, features: newFeatures.length > 0 ? newFeatures : [''] })
    }

    const handleModelChange = (index, value) => {
        const newModels = [...formData.availableModels]
        newModels[index] = value
        setFormData({ ...formData, availableModels: newModels })
    }

    const addModel = () => {
        setFormData({ ...formData, availableModels: [...formData.availableModels, ''] })
    }

    const removeModel = (index) => {
        const newModels = formData.availableModels.filter((_, i) => i !== index)
        setFormData({ ...formData, availableModels: newModels.length > 0 ? newModels : [''] })
    }

    const handleSpecChange = (key, value) => {
        setFormData({
            ...formData,
            specifications: { ...formData.specifications, [key]: value }
        })
    }

    const addSpecification = () => {
        const key = prompt('Enter specification name (e.g., "Material", "Size")')
        if (key) {
            handleSpecChange(key, '')
        }
    }

    const removeSpec = (key) => {
        const newSpecs = { ...formData.specifications }
        delete newSpecs[key]
        setFormData({ ...formData, specifications: newSpecs })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        try {
            // Clean up empty features and models
            const cleanData = {
                ...formData,
                features: formData.features.filter(f => f.trim() !== ''),
                availableModels: formData.availableModels.filter(m => m.trim() !== ''),
                // Set primary image from images array
                image: formData.images.length > 0 ? formData.images[0].url : formData.image
            }

            await dataService.saveProduct(cleanData)
            toast.success(isEditMode ? 'Product updated successfully!' : 'Product created successfully!')
            navigate('/admin/products')
        } catch (error) {
            console.error("Failed to save product", error)
            toast.error('Failed to save product. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="admin-page">
            <div className="form-header">
                <button onClick={() => navigate('/admin/products')} className="back-btn">
                    <ArrowLeft size={20} />
                    Back
                </button>
                <div className="header-actions">
                    <h1>{isEditMode ? 'Edit Product' : 'Add New Product'}</h1>
                </div>
            </div>

            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <div className="form-grid">
                        <div className="form-card main-info">
                            <h3>Basic Information</h3>

                            <div className="form-group">
                                <label>Product Title *</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    placeholder="e.g. Bell Hand Sewing Needles"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Category *</label>
                                <select name="category" value={formData.category} onChange={handleChange} required>
                                    <option value="">Select Category</option>
                                    {categories.map(cat => (
                                        <option key={cat.id || cat.name} value={cat.name}>{cat.name}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Price</label>
                                <input
                                    type="text"
                                    name="price"
                                    value={formData.price}
                                    onChange={handleChange}
                                    placeholder="Contact for Price"
                                />
                            </div>

                            <div className="form-group">
                                <label>Description *</label>
                                <RichTextEditor
                                    value={formData.description}
                                    onChange={(value) => setFormData({ ...formData, description: value })}
                                    placeholder="Enter product description with formatting..."
                                />
                            </div>

                            <div className="form-group">
                                <label>Video URL (Optional)</label>
                                <input
                                    type="url"
                                    name="videoUrl"
                                    value={formData.videoUrl}
                                    onChange={handleChange}
                                    placeholder="https://example.com/video.mp4 or /assets/videos/product.mp4"
                                />
                                <small className="field-hint">Enter a full URL or relative path to product video</small>
                            </div>

                            <div className="form-group">
                                <label>Product Images</label>
                                <MediaUpload
                                    images={formData.images}
                                    onChange={(images) => setFormData({ ...formData, images })}
                                />
                                <small className="field-hint">First image will be used as the primary product image</small>
                            </div>
                        </div>

                        <div className="form-right-col">
                            <div className="form-card">
                                <h3>Features</h3>
                                <div className="features-list">
                                    {formData.features.map((feature, index) => (
                                        <div key={index} className="feature-row">
                                            <input
                                                type="text"
                                                value={feature}
                                                onChange={(e) => handleFeatureChange(index, e.target.value)}
                                                placeholder="Feature point"
                                            />
                                            {formData.features.length > 1 && (
                                                <button
                                                    type="button"
                                                    className="icon-btn remove"
                                                    onClick={() => removeFeature(index)}
                                                >
                                                    <X size={16} />
                                                </button>
                                            )}
                                        </div>
                                    ))}
                                    <button type="button" className="add-feature-btn" onClick={addFeature}>
                                        <Plus size={16} /> Add Feature
                                    </button>
                                </div>
                            </div>

                            <div className="form-card">
                                <h3>Available Models (Optional)</h3>
                                <div className="features-list">
                                    {formData.availableModels.map((model, index) => (
                                        <div key={index} className="feature-row">
                                            <input
                                                type="text"
                                                value={model}
                                                onChange={(e) => handleModelChange(index, e.target.value)}
                                                placeholder="Model name or variant"
                                            />
                                            {formData.availableModels.length > 1 && (
                                                <button
                                                    type="button"
                                                    className="icon-btn remove"
                                                    onClick={() => removeModel(index)}
                                                >
                                                    <X size={16} />
                                                </button>
                                            )}
                                        </div>
                                    ))}
                                    <button type="button" className="add-feature-btn" onClick={addModel}>
                                        <Plus size={16} /> Add Model
                                    </button>
                                </div>
                            </div>

                            <div className="form-card">
                                <h3>Specifications (Optional)</h3>
                                <div className="specs-list">
                                    {Object.entries(formData.specifications).map(([key, value]) => (
                                        <div key={key} className="spec-row">
                                            <label>{key}</label>
                                            <div className="spec-input-group">
                                                <input
                                                    type="text"
                                                    value={value}
                                                    onChange={(e) => handleSpecChange(key, e.target.value)}
                                                    placeholder={`Enter ${key}`}
                                                />
                                                <button
                                                    type="button"
                                                    className="icon-btn remove"
                                                    onClick={() => removeSpec(key)}
                                                >
                                                    <X size={16} />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                    <button type="button" className="add-feature-btn" onClick={addSpecification}>
                                        <Plus size={16} /> Add Specification
                                    </button>
                                </div>
                            </div>

                            {/* SKU Management */}
                            <div className="form-card">
                                <SKUManager
                                    skus={formData.skus}
                                    onChange={(skus) => setFormData({ ...formData, skus })}
                                />
                            </div>

                            <div className="form-card">
                                <h3>Publishing</h3>
                                <div className="publish-actions">
                                    <Button
                                        type="submit"
                                        variant="primary"
                                        className="w-full"
                                        icon={<Save size={18} />}
                                        disabled={loading}
                                    >
                                        {loading ? 'Saving...' : (isEditMode ? 'Update Product' : 'Create Product')}
                                    </Button>
                                    <Button
                                        type="button"
                                        variant="outline"
                                        className="w-full"
                                        onClick={() => navigate('/admin/products')}
                                        disabled={loading}
                                    >
                                        Cancel
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ProductForm
