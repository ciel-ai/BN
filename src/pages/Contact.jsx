import { useState, useEffect } from 'react'
import Button from '../components/Button'
import { MapPinIcon, MailIcon, PhoneIcon, ClockIcon, WorldIcon } from '../components/Icons'
import { dataService } from '../services/dataService'
import './Contact.css'

const Contact = () => {
    const [contactInfo, setContactInfo] = useState(null)
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        inquiryType: '',
        message: ''
    })

    useEffect(() => {
        const loadContact = async () => {
            const data = await dataService.getSiteContent('contact')
            if (data) setContactInfo(data)
        }
        loadContact()
    }, [])

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert('Thank you for your message! We will get back to you soon.')
    }

    return (
        <div className="contact">
            {/* Hero Section */}
            <section className="page-hero">
                <div className="hero-overlay"></div>
                <div className="container">
                    <p className="hero-label">Let's talk</p>
                    <h1>Contact Bell Needles</h1>
                    <p className="hero-description">
                        Our team is ready to assist with product enquiries, partnership opportunities, and support requirements.
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="section">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Information */}
                        <div className="contact-info">
                            <h3>Contact Information</h3>

                            <div className="info-item">
                                <div className="info-icon"><MapPinIcon /></div>
                                <div className="info-content">
                                    <h4>Address</h4>
                                    <p style={{ whiteSpace: 'pre-line' }}>
                                        {contactInfo?.address || `8, Marudhar Complex, Narayana Mudali Street,\nChennai - 600001, Tamil Nadu, India`}
                                    </p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon"><MailIcon /></div>
                                <div className="info-content">
                                    <h4>Email</h4>
                                    <p><a href={`mailto:${contactInfo?.email || 'sales@bellneedles.com'}`}>{contactInfo?.email || 'sales@bellneedles.com'}</a></p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon"><PhoneIcon /></div>
                                <div className="info-content">
                                    <h4>WhatsApp / Phone</h4>
                                    <p>{contactInfo?.phone || '7200629792'}</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon"><ClockIcon /></div>
                                <div className="info-content">
                                    <h4>Business Hours</h4>
                                    <p>
                                        Monday - Saturday<br />
                                        09:00 AM - 06:00 PM IST
                                    </p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon"><WorldIcon /></div>
                                <div className="info-content">
                                    <h4>Website</h4>
                                    <p><a href="https://www.bellneedles.com">www.bellneedles.com</a></p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="contact-form-wrapper">
                            <h3>Send Us a Message</h3>
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="name">Your Name *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            placeholder="Your full name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="company">Company Name</label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            placeholder="Your company"
                                            value={formData.company}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="email">Email Address *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="your@email.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone / WhatsApp</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            placeholder="+91 XXXXXXXXXX"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="inquiryType">Inquiry Type *</label>
                                    <select
                                        id="inquiryType"
                                        name="inquiryType"
                                        value={formData.inquiryType}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select inquiry type</option>
                                        <option value="product">Product Inquiry</option>
                                        <option value="wholesale">Wholesale / Bulk Order</option>
                                        <option value="distributor">Become a Distributor</option>
                                        <option value="export">Export Inquiry</option>
                                        <option value="support">Customer Support</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Your Message *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        placeholder="Please describe your inquiry in detail..."
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>

                                <Button type="submit" variant="primary" className="submit-btn">
                                    Send Message
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Location Section */}
            <section className="section bg-gray">
                <div className="container">
                    <div className="map-container">
                        <iframe
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            src="https://maps.google.com/maps?q=8,+Marudhar+Complex,+Narayana+Mudali+Street,+Chennai+-+600001&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            title="Bell Needles Location"
                        ></iframe>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
