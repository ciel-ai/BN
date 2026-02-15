import { useState } from 'react'
import { Globe, Save } from 'lucide-react'
import Button from '../../components/Button'

const SEOManager = () => {
    const [seoSettings, setSeoSettings] = useState({
        siteTitle: 'Bell Needles - Premium Sewing & Tailoring Solutions',
        metaDescription: 'Premium sewing and tailoring solutions for global professionals. Manufacturing excellence since 25+ years.',
        keywords: 'sewing needles, tailoring scissors, garment accessories, industrial needles',
        ogImage: '/assets/images/logo.png'
    })

    const handleChange = (e) => {
        setSeoSettings({ ...seoSettings, [e.target.name]: e.target.value })
    }

    const handleSave = (e) => {
        e.preventDefault()
        // Save to localStorage or similar
        // localStorage.setItem('seo_settings', JSON.stringify(seoSettings))
        alert('SEO Settings Saved!')
    }

    return (
        <div className="admin-page">
            <div className="page-header">
                <div className="header-title">
                    <h1>SEO Manager</h1>
                    <p>Configure global SEO settings and meta tags</p>
                </div>
            </div>

            <div className="content-card" style={{ maxWidth: '800px' }}>
                <form onSubmit={handleSave} style={{ display: 'grid', gap: '1.5rem' }}>
                    <div className="form-group">
                        <label style={{ fontWeight: '600', display: 'block', marginBottom: '0.5rem' }}>Global Site Title</label>
                        <input
                            type="text"
                            name="siteTitle"
                            value={seoSettings.siteTitle}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px' }}
                        />
                        <small style={{ color: '#666' }}>Appears in browser tabs and search results.</small>
                    </div>

                    <div className="form-group">
                        <label style={{ fontWeight: '600', display: 'block', marginBottom: '0.5rem' }}>Meta Description</label>
                        <textarea
                            name="metaDescription"
                            rows="3"
                            value={seoSettings.metaDescription}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px' }}
                        />
                        <small style={{ color: '#666' }}>Recommended length: 150-160 characters.</small>
                    </div>

                    <div className="form-group">
                        <label style={{ fontWeight: '600', display: 'block', marginBottom: '0.5rem' }}>Global Keywords</label>
                        <textarea
                            name="keywords"
                            rows="2"
                            value={seoSettings.keywords}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px' }}
                        />
                    </div>

                    <div className="form-group">
                        <label style={{ fontWeight: '600', display: 'block', marginBottom: '0.5rem' }}>Default Social Image (OG:Image)</label>
                        <input
                            type="text"
                            name="ogImage"
                            value={seoSettings.ogImage}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px' }}
                        />
                    </div>

                    <div>
                        <Button type="submit" variant="primary" icon={<Save size={18} />}>
                            Save Changes
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SEOManager
