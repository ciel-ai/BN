import { Routes, Route } from 'react-router-dom'
import { Suspense, lazy, useState } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import ScrollToTop from './components/ScrollToTop'
import PublicLayout from './components/PublicLayout'
import { ProtectedRoute } from './components/admin/ProtectedRoute'
import AdminLayout from './components/admin/AdminLayout'
import { AuthProvider } from './context/AuthContext'
import { Toaster } from 'react-hot-toast'
import Preloader from './components/Preloader'
import './App.css'

// Public Pages
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Products = lazy(() => import('./pages/Products'))
const ProductCategory = lazy(() => import('./pages/ProductCategory'))
const ProductDetail = lazy(() => import('./pages/ProductDetail'))
const WhyPartner = lazy(() => import('./pages/WhyPartner'))
const Distributors = lazy(() => import('./pages/Distributors'))
const Export = lazy(() => import('./pages/Export'))
const Contact = lazy(() => import('./pages/Contact'))
const Login = lazy(() => import('./pages/Login'))

// Admin Pages
const Dashboard = lazy(() => import('./pages/admin/Dashboard'))
const ProductList = lazy(() => import('./pages/admin/ProductList'))
const ProductForm = lazy(() => import('./pages/admin/ProductForm'))
const ContentManager = lazy(() => import('./pages/admin/ContentManager'))
const SettingsManager = lazy(() => import('./pages/admin/SettingsManager'))
const DealerAccess = lazy(() => import('./pages/admin/DealerAccess'))
const UserList = lazy(() => import('./pages/admin/UserList'))
const Categories = lazy(() => import('./pages/admin/Categories'))

// Loading Spinner Component
const LoadingFallback = () => (
    <div className="flex-center" style={{ height: '100vh', width: '100%' }}>
        <div className="loader" style={{
            width: '48px',
            height: '48px',
            border: '5px solid var(--color-gray-200)',
            borderBottomColor: 'var(--color-primary)',
            borderRadius: '50%',
            display: 'inline-block',
            boxSizing: 'border-box',
            animation: 'rotation 1s linear infinite'
        }}></div>
        <style>{`
            @keyframes rotation {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        `}</style>
    </div>
)

function App() {
    const [loading, setLoading] = useState(true)

    return (
        <HelmetProvider>
            <AuthProvider>
                <Toaster position="top-right" />
                <ScrollToTop />
                {loading && <Preloader onFinish={() => setLoading(false)} />}
                <div className="app">
                    <Suspense fallback={<LoadingFallback />}>
                        <Routes>
                            {/* Public Routes */}
                            <Route element={<PublicLayout />}>
                                <Route path="/" element={<Home />} />
                                <Route path="/about" element={<About />} />
                                <Route path="/products" element={<Products />} />
                                <Route path="/products/category/:categoryId" element={<ProductCategory />} />
                                <Route path="/products/:productId" element={<ProductDetail />} />
                                <Route path="/why-partner" element={<WhyPartner />} />
                                <Route path="/distributors" element={<Distributors />} />
                                <Route path="/export" element={<Export />} />
                                <Route path="/contact" element={<Contact />} />
                            </Route>

                            {/* Standalone Routes */}
                            <Route path="/login" element={<Login />} />

                            {/* Admin Routes */}
                            <Route element={<ProtectedRoute />}>
                                <Route path="/admin" element={<AdminLayout />}>
                                    <Route index element={<Dashboard />} />
                                    <Route path="products" element={<ProductList />} />
                                    <Route path="products/new" element={<ProductForm />} />
                                    <Route path="products/:id" element={<ProductForm />} />
                                    <Route path="categories" element={<Categories />} />
                                    <Route path="pages" element={<ContentManager />} />
                                    <Route path="content" element={<ContentManager />} />
                                    <Route path="dealer-access" element={<DealerAccess />} />
                                    <Route path="users" element={<UserList />} />
                                    <Route path="settings" element={<SettingsManager />} />
                                </Route>
                            </Route>
                        </Routes>
                    </Suspense>
                    {/* Floating WhatsApp Button */}
                    <a
                        href="https://wa.me/917604826562?text=Hi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="whatsapp-float"
                        aria-label="Chat on WhatsApp"
                    >
                        <svg viewBox="0 0 32 32" width="32" height="32" fill="#fff">
                            <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.5 1.129 6.744 3.047 9.381L1.054 31.2l6.023-1.932A15.907 15.907 0 0 0 16.004 32C24.826 32 32 24.822 32 16.004 32 7.176 24.826 0 16.004 0zm9.312 22.608c-.39 1.098-1.924 2.01-3.178 2.276-.86.18-1.98.324-5.756-1.238-4.834-2.002-7.942-6.902-8.182-7.222-.23-.32-1.934-2.576-1.934-4.914s1.224-3.484 1.658-3.96c.434-.478.948-.598 1.264-.598.316 0 .632.004.908.016.292.012.684-.11 1.07.814.39.942 1.328 3.24 1.446 3.476.118.236.196.51.04.816-.158.316-.236.512-.472.788-.236.276-.496.616-.708.826-.236.236-.482.492-.206.962.276.47 1.228 2.024 2.636 3.278 1.812 1.614 3.34 2.114 3.81 2.35.472.236.748.198 1.024-.118.276-.316 1.184-1.382 1.5-1.858.316-.478.632-.394 1.066-.236.434.158 2.748 1.296 3.22 1.532.472.236.788.354.906.55.118.196.118 1.138-.272 2.234z" />
                        </svg>
                    </a>
                </div>
            </AuthProvider>
        </HelmetProvider>
    )
}

export default App
