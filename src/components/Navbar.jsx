import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Button from './Button'
import './Navbar.css'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isProductsOpen, setIsProductsOpen] = useState(false)
    const location = useLocation()

    const productCategories = [
        { id: 'hand-sewing-needles', title: 'Bell Hand Sewing Needles' },
        { id: 'sewing-machine-needles', title: 'Bell Sewing Machine Needles' },
        { id: 'tailoring-scissors', title: 'Bell Tailor Scissor' },
        { id: 'sewing-accessories', title: 'Bell Sewing Accessories' },
        { id: 'crochet-hooks', title: 'Bell Crochet Hooks' },
        { id: 'safety-pins', title: 'Safety Pins - Aromi & Panda' },
    ]

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About Us' },
        { path: '/products', label: 'Products', hasDropdown: true },
        { path: '/why-partner', label: 'Why Partner' },
        { path: '/distributors', label: 'Distributors' },
        { path: '/export', label: 'Export' },
        { path: '/contact', label: 'Contact' },
    ]

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
        setIsProductsOpen(false)
    }

    const toggleProducts = () => {
        setIsProductsOpen(!isProductsOpen)
    }

    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar-content">
                    {/* Logo */}
                    <Link to="/" className="navbar-logo" onClick={closeMenu}>
                        <img src="/assets/images/bell-needles-logo.png" alt="Bell Needles" className="logo-image" />
                        <div className="logo-text-wrapper">
                            <span className="logo-text">Bell Needles</span>
                            <span className="logo-tagline">Sew Well with Bell</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="navbar-links desktop-only">
                        {navLinks.map((link) => (
                            link.hasDropdown ? (
                                <div key={link.path} className="nav-dropdown">
                                    <Link
                                        to={link.path}
                                        className={`nav-link ${location.pathname.startsWith(link.path) ? 'active' : ''}`}
                                    >
                                        {link.label}
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" style={{ marginLeft: '4px' }}>
                                            <path d="M6 8L2 4h8L6 8z" />
                                        </svg>
                                    </Link>
                                    <div className="dropdown-menu">
                                        {productCategories.map((category) => (
                                            <Link
                                                key={category.id}
                                                to={`/products/category/${category.id}`}
                                                className="dropdown-item"
                                            >
                                                {category.title}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                                >
                                    {link.label}
                                </Link>
                            )
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="navbar-actions desktop-only">
                        <Link to="/contact">
                            <Button variant="secondary">Request Catalogue</Button>
                        </Link>
                        <Link to="/distributors">
                            <Button variant="primary">Become a Distributor</Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="mobile-menu-btn mobile-only"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                    <div className="mobile-menu-links">
                        {navLinks.map((link) => (
                            link.hasDropdown ? (
                                <div key={link.path} className="mobile-nav-group">
                                    <div
                                        className={`mobile-nav-link ${location.pathname.startsWith(link.path) ? 'active' : ''} has-dropdown`}
                                        onClick={toggleProducts}
                                    >
                                        {link.label}
                                        <svg
                                            width="12"
                                            height="12"
                                            viewBox="0 0 12 12"
                                            fill="currentColor"
                                            style={{
                                                marginLeft: 'auto',
                                                transform: isProductsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                                transition: 'transform 0.2s'
                                            }}
                                        >
                                            <path d="M6 8L2 4h8L6 8z" />
                                        </svg>
                                    </div>
                                    <div className={`mobile-dropdown-content ${isProductsOpen ? 'open' : ''}`}>
                                        <Link
                                            to="/products"
                                            className="mobile-dropdown-item main-link"
                                            onClick={closeMenu}
                                        >
                                            All Products
                                        </Link>
                                        {productCategories.map((category) => (
                                            <Link
                                                key={category.id}
                                                to={`/products/category/${category.id}`}
                                                className="mobile-dropdown-item"
                                                onClick={closeMenu}
                                            >
                                                {category.title}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
                                    onClick={closeMenu}
                                >
                                    {link.label}
                                </Link>
                            )
                        ))}
                    </div>
                    <div className="mobile-menu-actions">
                        <Link to="/contact" onClick={closeMenu} className="w-full">
                            <Button variant="secondary" className="w-full">Request Catalogue</Button>
                        </Link>
                        <Link to="/distributors" onClick={closeMenu} className="w-full">
                            <Button variant="primary" className="w-full">Become a Distributor</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
