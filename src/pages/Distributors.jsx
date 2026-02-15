import { useState } from 'react'
import Button from '../components/Button'
import { TrendingIcon, HandshakeIcon, PackageIcon, GlobeIcon, CheckIcon, TargetIcon, BadgeIcon } from '../components/Icons'
import TiltCard from '../components/TiltCard'
import './Distributors.css'

const Distributors = () => {
    const [formData, setFormData] = useState({
        businessName: '',
        yourName: '',
        email: '',
        phone: '',
        businessType: '',
        country: '',
        addressLine1: '',
        addressLine2: '',
        message: ''
    })

    const benefits = [
        {
            icon: <TrendingIcon />,
            title: 'Competitive Margins',
            description: 'Enjoy attractive profit margins designed to help you grow your business sustainably.'
        },
        {
            icon: <HandshakeIcon />,
            title: 'Marketing & Brand Support',
            description: 'Access to marketing materials, product knowledge, and promotional support.'
        },
        {
            icon: <PackageIcon />,
            title: 'Stable Long-Term Supply',
            description: 'Reliable inventory availability ensuring consistent supply for your customers.'
        },
        {
            icon: <GlobeIcon />,
            title: 'Exclusive Territory Opportunity',
            description: 'Possibility of exclusive distribution rights in your region for market protection.'
        },
        {
            icon: <TargetIcon />,
            title: 'Lead Generation Support',
            description: 'We actively pass on local customer inquiries and leads to our authorized distributors.'
        },
        {
            icon: <BadgeIcon />,
            title: 'Technical Product Training',
            description: 'Comprehensive training for your sales team to become experts on our product range.'
        }
    ]

    const eligibility = [
        'Existing retailers or wholesalers',
        'Strong warehouse or inventory',
        'Established distribution network',
        'Regional or national reach',
        'Retail chain interests'
    ]

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission
        alert('Thank you for your distributor inquiry! We will contact you soon.')
    }

    return (
        <div className="distributors">
            {/* Hero Section */}
            <section className="distributors-hero">
                <div className="hero-overlay"></div>
                <div className="container">
                    <p className="hero-label">Join our network</p>
                    <h1>Partner with a Growing Global Sewing Brand</h1>
                    <p className="hero-description">
                        Join our network of successful wholesalers, distributors, and importers. Grow your business with Bell Needles.
                    </p>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="section">
                <div className="container">
                    <div className="section-header text-center">
                        <p className="section-label">Benefits of partnering</p>
                        <h2>Distributor Benefits</h2>
                        <p className="section-description">
                            Partner with Bell Needles and enjoy special opportunities for your business.
                        </p>
                    </div>
                    <div className="benefits-grid">
                        {benefits.map((benefit, index) => (
                            <TiltCard key={index} className="benefit-card">
                                <div className="benefit-icon">{benefit.icon}</div>
                                <h3>{benefit.title}</h3>
                                <p>{benefit.description}</p>
                            </TiltCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* Enquiry Form Section */}
            <section className="section bg-gray">
                <div className="container">
                    <div className="enquiry-layout">
                        {/* Eligibility */}
                        <div className="eligibility-section">
                            <p className="section-label">Who can apply</p>
                            <h2>Who Can Apply?</h2>
                            <p className="eligibility-description">
                                We welcome partnerships from well-established businesses in the sewing and tailoring materials industry.
                            </p>
                            <ul className="eligibility-list">
                                {eligibility.map((item, index) => (
                                    <li key={index}>
                                        <CheckIcon />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Enquiry Form */}
                        <div className="enquiry-form-wrapper">
                            <h3>Distributor Enquiry Form</h3>
                            <p className="form-subtitle">Fill out the form below to start your partnership journey</p>
                            <form className="enquiry-form" onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Business Name *</label>
                                        <input
                                            type="text"
                                            name="businessName"
                                            value={formData.businessName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Your Name *</label>
                                        <input
                                            type="text"
                                            name="yourName"
                                            value={formData.yourName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Email *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Phone *</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Business Type *</label>
                                        <select
                                            name="businessType"
                                            value={formData.businessType}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Select</option>
                                            <option value="wholesaler">Wholesaler</option>
                                            <option value="retailer">Retailer</option>
                                            <option value="distributor">Distributor</option>
                                            <option value="importer">Importer</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Country *</label>
                                        <input
                                            type="text"
                                            name="country"
                                            value={formData.country}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>Address Line 1 *</label>
                                    <input
                                        type="text"
                                        name="addressLine1"
                                        value={formData.addressLine1}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Address Line 2</label>
                                    <input
                                        type="text"
                                        name="addressLine2"
                                        value={formData.addressLine2}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Additional Information</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="4"
                                        placeholder="Tell us about your business and distribution capabilities..."
                                    ></textarea>
                                </div>

                                <Button variant="primary" className="submit-btn">
                                    Submit Enquiry →
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content text-center">
                        <h2 className="text-white">Have Questions About Partnership?</h2>
                        <p className="cta-description">
                            Our partnership team is ready to discuss how we can work together.
                        </p>
                        <div className="cta-actions">
                            <Button variant="white">Contact Partnership Team →</Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Distributors
