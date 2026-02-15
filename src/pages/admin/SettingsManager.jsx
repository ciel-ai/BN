import Button from '../../components/Button'

const SettingsManager = () => {
    return (
        <div className="admin-page">
            <div className="page-header">
                <div className="header-title">
                    <h1>Site Settings</h1>
                    <p>Global configuration</p>
                </div>
            </div>

            <div className="content-card">
                <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--color-gray-600)' }}>
                    <h3>Settings Panel</h3>
                    <p>Manage application-wide settings such as Logo, Footer Links, and SEO metadata.</p>
                </div>
            </div>
        </div>
    )
}

export default SettingsManager
