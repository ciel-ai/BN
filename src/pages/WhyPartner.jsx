import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import { CheckIcon, PackageIcon, GlobeIcon, TruckIcon, HandshakeIcon, TrendingIcon, FactoryIcon } from '../components/Icons'
import CountUpAnimation from '../components/CountUpAnimation'
import TiltCard from '../components/TiltCard'
import './WhyPartner.css'

const WhyPartner = () => {
    const navigate = useNavigate()

    const benefits = [
        {
            icon: <FactoryIcon />,
            title: 'Precision Manufacturing',
            description: 'State-of-the-art facilities delivering consistent quality across millions of units.',
            points: [
                'ISO-Certified production',
                'Advanced quality control',
                'Batch consistency guaranteed'
            ]
        },
        {
            icon: <PackageIcon />,
            title: 'Premium Packaging',
            description: 'Retail-ready packaging designed to protect products and enhance brand value.',
            points: [
                'Secure protective casing',
                'Custom branding options',
                'Eco-friendly materials'
            ]
        },
        {
            icon: <GlobeIcon />,
            title: 'Global Logistics',
            description: 'Seamless export operations to over 27 countries with reliable tracking.',
            points: [
                'Efficient export documentation',
                'Multi-channel shipping',
                'On-time delivery commitment'
            ]
        },
        {
            icon: <HandshakeIcon />,
            title: 'Dedicated Support',
            description: 'Long-term partnership focus with dedicated account managers for your growth.',
            points: [
                'Technical product training',
                'Marketing material support',
                'Priority customer service'
            ]
        }
    ]

    const stats = [
        { value: <CountUpAnimation end={40} suffix="+" />, label: 'Years Experience' },
        { value: <CountUpAnimation end={27} />, label: 'Countries Served' },
        { value: <CountUpAnimation end={100} suffix="%" />, label: 'Quality Guarantee' },
        { value: <CountUpAnimation end={500} suffix="+" />, label: 'Global Partners' },
    ]

    return (
        <div className="why-partner-industrial">
            {/* Hero Section */}
            <section className="industrial-hero">
                <div className="hero-overlay"></div>
                <div className="container">
                    <div className="hero-content">
                        <span className="hero-label">Global Manufacturing Partner</span>
                        <h1 className="hero-title">
                            Why Leading Brands Choose Bell Needles
                        </h1>
                        <p className="hero-subtitle">
                            For over 40 years, we have been the silent force behind the world's finest tailoring and garment manufacturing.
                        </p>
                        <div className="hero-actions">
                            <Button variant="white" onClick={() => navigate('/contact')}>
                                Partner With Us
                            </Button>
                            <Button variant="outline" onClick={() => navigate('/distributors')}>
                                Distributor Application
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Supply Chain Flow */}
            <section className="section bg-white">
                <div className="container">
                    <div className="section-header text-center">
                        <p className="section-label">The Partnership Process</p>
                        <h2>Seamless Integration with Your Business</h2>
                        <p className="section-description">
                            From our factory floor to your retail shelf, we ensure excellence at every step of the supply chain.
                        </p>
                    </div>

                    <div className="process-flow">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="process-step">
                                <div className="step-marker">
                                    <div className="step-number">0{index + 1}</div>
                                </div>
                                <TiltCard className="process-card">
                                    <div className="process-icon">
                                        {benefit.icon}
                                    </div>
                                    <div className="process-content">
                                        <h3>{benefit.title}</h3>
                                        <p>{benefit.description}</p>
                                        <ul className="process-points">
                                            {benefit.points.map((point, idx) => (
                                                <li key={idx}>
                                                    <CheckIcon /> {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </TiltCard>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Bell Needles Advantage */}
            <section className="section bg-gray">
                <div className="container">
                    <div className="advantage-split">
                        <div className="advantage-image">
                            <img src="/assets/images/bellneedlless.png" alt="Bell Needles Factory" />
                            <div className="trust-badge">
                                <span className="badge-text">ISO 9001 Certified</span>
                            </div>
                        </div>
                        <div className="advantage-text">
                            <p className="section-label">The Bell Needles Advantage</p>
                            <h2>Built on Trust & Precision</h2>
                            <p>
                                In an industry where precision is everything, Bell Needles stands as a beacon of reliability. Our manufacturing facility combines traditional craftsmanship with modern automation to produce needles and accessories that professionals trust blindly.
                            </p>
                            <div className="advantage-features">
                                <div className="feature-item">
                                    <TrendingIcon />
                                    <div>
                                        <h4>Competitive Wholesale Pricing</h4>
                                        <p>Direct-from-factory pricing that maximizes your margins.</p>
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <TruckIcon />
                                    <div>
                                        <h4>Reliable Global Supply</h4>
                                        <p>Robust logistics network ensuring consistent stock availability.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4">
                                <Button variant="primary" onClick={() => navigate('/about')}>
                                    Learn About Our History
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="industrial-cta">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Elevate Your Product Line?</h2>
                        <p>Join our network of successful distributors and manufacturers across 27 countries.</p>
                        <div className="cta-buttons">
                            <Button variant="white" onClick={() => navigate('/contact')}>Get in Touch</Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default WhyPartner
