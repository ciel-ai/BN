import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import Button from '../components/Button'
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('admin@test.com')
    const [password, setPassword] = useState('password')
    const [loading, setLoading] = useState(false)
    const { login } = useAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            await login(email, password)
            navigate('/admin') // Redirect to admin dashboard after login
        } catch (error) {
            console.error("Login failed", error)
            setLoading(false)
        }
    }

    return (
        <div className="login-page">
            <div className="login-container">
                <h2>CMS Login</h2>
                <p>Sign in to manage website content</p>
                <div style={{ marginBottom: '1rem', fontSize: '0.85rem', color: 'var(--color-primary)', background: '#e0f2fe', padding: '0.5rem', borderRadius: '4px' }}>
                    <strong>Demo Mode:</strong><br />
                    • Use <b>admin@test.com</b> for Full Access<br />
                    • Use <b>editor@test.com</b> for Limited Access
                </div>
                <form onSubmit={handleSubmit} className="login-form">
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <Button
                        type="submit"
                        variant="primary"
                        className="w-full"
                        disabled={loading}
                    >
                        {loading ? 'Signing In...' : 'Sign In'}
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default Login
