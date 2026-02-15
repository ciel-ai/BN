import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { dataService } from '../services/dataService'
import './Footer.css'

const Footer = () => {
    const [contactInfo, setContactInfo] = useState(null)

    useEffect(() => {
        const loadContact = async () => {
            const data = await dataService.getSiteContent('contact')
            if (data) setContactInfo(data)
        }
        loadContact()
    }, [])

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    {/* Company Info */}
                    <div className="footer-section">
                        <div className="footer-logo">
                            <img src="/assets/images/bell-needles-logo.png" alt="Bell Needles" className="footer-logo-image" />
                            <span className="logo-text">Bell Needles</span>
                        </div>
                        <p className="footer-description">
                            With over 40 years of manufacturing excellence, we've built strong partnerships with distributors, retailers, and manufacturers in more than 27 countries.
                        </p>

                    </div>

                    {/* Quick Links */}
                    <div className="footer-section">
                        <h4 className="footer-title">Quick Links</h4>
                        <ul className="footer-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/products">Products</Link></li>
                            <li><Link to="/why-partner">Why Partner With Us</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Product Categories */}
                    <div className="footer-section">
                        <h4 className="footer-title">Product Categories</h4>
                        <ul className="footer-links">
                            <li><Link to="/products/category/sewing-machine-needles">Sewing Machine Needles</Link></li>
                            <li><Link to="/products/category/hand-sewing-needles">Hand Sewing Needles</Link></li>
                            <li><Link to="/products/category/tailoring-scissors">Tailoring Scissors</Link></li>
                            <li><Link to="/products/category/sewing-accessories">Sewing Accessories</Link></li>
                            <li><Link to="/products/category/crochet-hooks">Crochet Hooks</Link></li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div className="footer-section">
                        <h4 className="footer-title">Contact Us</h4>
                        <ul className="footer-contact">
                            <li>

                                {contactInfo?.address ? contactInfo.address.split('\n')[0] : 'Chennai, India'}
                            </li>
                            <li>
                                <a href={`mailto:${contactInfo?.email || 'sales@bellneedles.com'}`}>{contactInfo?.email || 'sales@bellneedles.com'}</a>
                            </li>
                            <li>
                                <a href="https://www.bellneedles.com">www.bellneedles.com</a>
                            </li>
                            <li>
                                <a href="https://wa.me/917604826562?text=Hi" target="_blank" rel="noopener noreferrer">
                                    <strong>WhatsApp Business</strong>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="footer-bottom">
                    <p>&copy; 2025 Bell Needles. All Rights Reserved.</p>
                    <p className="footer-credit">www.bellneedles.com</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
