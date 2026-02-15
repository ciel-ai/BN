import { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { DownloadIcon } from './Icons'
import Button from './Button'
import './ContactPopup.css'
import { X } from 'lucide-react'

const ContactPopup = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })

    const location = useLocation()
    const [brochureLink, setBrochureLink] = useState(null)

    const timerRef = useRef(null)
    const wasProductPageRef = useRef(false)

    useEffect(() => {
        // Only show on product pages
        const isProductPage = location.pathname.includes('/products') || location.pathname.includes('/product/')

        // Determine brochure link based on path
        let link = '/assets/datasheets/ACCESSORIES.pdf' // Default

        if (location.pathname.includes('machine-needles')) {
            link = '/assets/datasheets/MACHINE-NEEDLES.pdf'
        } else if (location.pathname.includes('hand-sewing')) {
            link = '/assets/datasheets/HAND-SEWING-NEEDLES.pdf'
        } else if (location.pathname.includes('aromi')) {
            link = '/assets/datasheets/AROMI PINS.pdf'
        } else if (location.pathname.includes('panda')) {
            link = '/assets/datasheets/PANDA PINS.pdf'
        }

        setBrochureLink(link)

        if (isProductPage) {
            if (!wasProductPageRef.current) {
                // Just entered product section - start 2 minute timer
                // Clear any existing timer just in case
                if (timerRef.current) clearTimeout(timerRef.current)

                timerRef.current = setTimeout(() => {
                    setIsVisible(true)
                }, 120000) // 2 minutes
            }
            // If already on product page (navigating between products), do nothing 
            // so the original timer continues.
        } else {
            // Left product section - clear timer and hide
            if (timerRef.current) {
                clearTimeout(timerRef.current)
                timerRef.current = null
            }
            setIsVisible(false)
        }

        wasProductPageRef.current = isProductPage
    }, [location.pathname])

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current)
        }
    }, [])

    const handleClose = () => {
        setIsVisible(false)
        // Removed sessionStorage setting to allow popup to reappear
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Here you would typically handle form submission logic

        // Close popup and mark as seen
        handleClose()
        // Optional: Show success message/toast
        alert('Thank you for contacting us! We will get back to you soon.')
    }

    if (!isVisible) return null

    return (
        <div className="contact-popup-overlay">
            <div className="contact-popup-content">
                <button className="contact-popup-close" onClick={handleClose} aria-label="Close popup">
                    <X size={24} />
                </button>

                <h2 className="text-center mb-3">Interested in our products?</h2>
                <p className="text-center text-gray mb-4">Get in touch with us related to your queries.</p>

                <form className="contact-popup-form" onSubmit={handleSubmit}>
                    <div className="contact-popup-field">
                        <label htmlFor="popup-name">Name</label>
                        <input
                            type="text"
                            id="popup-name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Your Name"
                        />
                    </div>

                    <div className="contact-popup-field">
                        <label htmlFor="popup-email">Email</label>
                        <input
                            type="email"
                            id="popup-email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="your@email.com"
                        />
                    </div>

                    <div className="contact-popup-field">
                        <label htmlFor="popup-phone">Phone</label>
                        <input
                            type="tel"
                            id="popup-phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+1 (123) 456-7890"
                        />
                    </div>

                    <div className="contact-popup-field">
                        <label htmlFor="popup-message">Message</label>
                        <textarea
                            id="popup-message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            placeholder="How can we help you?"
                            rows="3"
                        ></textarea>
                    </div>

                    <Button type="submit" className="mt-2" style={{ width: '100%' }}>
                        Send Message
                    </Button>
                </form>


                {brochureLink && (
                    <a href={brochureLink} target="_blank" rel="noopener noreferrer" style={{ display: 'block', width: '100%', marginTop: '1rem' }}>
                        <Button variant="primary" style={{ width: '100%', backgroundColor: '#0056b3', borderColor: '#0056b3' }}>
                            <DownloadIcon size={18} /> Download Brochure
                        </Button>
                    </a>
                )}

            </div>
        </div>
    )
}

export default ContactPopup
