import { useState, useEffect } from 'react'
import Button from '../../components/Button'
import { dataService } from '../../services/dataService'
import { Save, Layout, Phone } from 'lucide-react'
import toast from 'react-hot-toast'
import './ContentManager.css'

const ContentManager = () => {
    const [activeTab, setActiveTab] = useState('hero')
    const [loading, setLoading] = useState(true)
    const [saving, setSaving] = useState(false)

    // Form State
    const [heroContent, setHeroContent] = useState({
        title: '',
        subtitle: '',
        ctaText: '',
        ctaLink: ''
    })

    const [contactContent, setContactContent] = useState({
        email: '',
        phone: '',
        address: ''
    })

    useEffect(() => {
        loadContent()
    }, [])

    const loadContent = async () => {
        try {
            setLoading(true)
            const hero = await dataService.getSiteContent('hero')
            const contact = await dataService.getSiteContent('contact')

            if (hero) setHeroContent(hero)
            if (contact) setContactContent(contact)
        } catch (error) {
            console.error("Failed to load content", error)
            toast.error("Failed to load content")
        } finally {
            setLoading(false)
        }
    }

    const handleSave = async () => {
        setSaving(true)
        try {
            if (activeTab === 'hero') {
                await dataService.saveSiteContent('hero', heroContent)
            } else if (activeTab === 'contact') {
                await dataService.saveSiteContent('contact', contactContent)
            }
            toast.success("Content saved successfully!")
        } catch (error) {
            console.error("Failed to save content", error)
            toast.error("Failed to save")
        } finally {
            setSaving(false)
        }
    }

    const renderHeroForm = () => (
        <div className="form-section fade-in">
            <h3>Hero Section</h3>
            <div className="form-group">
                <label>Main Title</label>
                <input
                    type="text"
                    value={heroContent.title}
                    onChange={(e) => setHeroContent({ ...heroContent, title: e.target.value })}
                    placeholder="e.g. Precision Engineering..."
                />
            </div>
            <div className="form-group">
                <label>Subtitle</label>
                <textarea
                    rows="3"
                    value={heroContent.subtitle}
                    onChange={(e) => setHeroContent({ ...heroContent, subtitle: e.target.value })}
                    placeholder="Description text..."
                />
            </div>
            <div className="form-row">
                <div className="form-group">
                    <label>CTA Button Text</label>
                    <input
                        type="text"
                        value={heroContent.ctaText}
                        onChange={(e) => setHeroContent({ ...heroContent, ctaText: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label>CTA Link</label>
                    <input
                        type="text"
                        value={heroContent.ctaLink}
                        onChange={(e) => setHeroContent({ ...heroContent, ctaLink: e.target.value })}
                    />
                </div>
            </div>
        </div>
    )

    const renderContactForm = () => (
        <div className="form-section fade-in">
            <h3>Contact Information</h3>
            <div className="form-group">
                <label>Email Address</label>
                <input
                    type="email"
                    value={contactContent.email}
                    onChange={(e) => setContactContent({ ...contactContent, email: e.target.value })}
                />
            </div>
            <div className="form-group">
                <label>Phone Number</label>
                <input
                    type="text"
                    value={contactContent.phone}
                    onChange={(e) => setContactContent({ ...contactContent, phone: e.target.value })}
                />
            </div>
            <div className="form-group">
                <label>Physical Address</label>
                <textarea
                    rows="3"
                    value={contactContent.address}
                    onChange={(e) => setContactContent({ ...contactContent, address: e.target.value })}
                />
            </div>
        </div>
    )

    if (loading) return <div className="p-8 text-center">Loading content...</div>

    return (
        <div className="admin-page">
            <div className="page-header">
                <div className="header-title">
                    <h1>Site Content</h1>
                    <p>Manage static text and images for pages</p>
                </div>
                <Button
                    onClick={handleSave}
                    variant="primary"
                    disabled={saving}
                    icon={<Save size={18} />}
                >
                    {saving ? 'Saving...' : 'Save Changes'}
                </Button>
            </div>

            <div className="content-manager-layout">
                <div className="sidebar-tabs">
                    <button
                        className={`tab-btn ${activeTab === 'hero' ? 'active' : ''}`}
                        onClick={() => setActiveTab('hero')}
                    >
                        <Layout size={18} /> Hero Section
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'contact' ? 'active' : ''}`}
                        onClick={() => setActiveTab('contact')}
                    >
                        <Phone size={18} /> Contact Info
                    </button>
                </div>

                <div className="tab-content">
                    <div className="content-card">
                        {activeTab === 'hero' && renderHeroForm()}
                        {activeTab === 'contact' && renderContactForm()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentManager
