import Button from '../components/Button'
import { PackageIcon, GlobeIcon, TruckIcon, CheckIcon, BadgeIcon, BuildingIcon } from '../components/Icons'
import './Export.css'

const Export = () => {
    const infrastructure = [
        {
            icon: <PackageIcon />,
            title: 'Export-Ready Packaging',
            description: 'All our products are packaged to international standards for safe shipping worldwide.',
            features: [
                'Durable export-grade packaging',
                'Custom branding options',
                'Retail-ready presentation',
                'Carton marking as per requirements'
            ]
        },
        {
            icon: <GlobeIcon />,
            title: 'Documentation & Compliance',
            description: 'Complete export documentation support for hassle-free customs clearance.',
            features: [
                'Commercial invoice',
                'Packing list & weight details',
                'Certificate of Origin',
                'Any other certificates on request'
            ]
        },
        {
            icon: <TruckIcon />,
            title: 'Shipping & Logistics',
            description: 'Flexible shipping options to suit your delivery and budget requirements.',
            features: [
                'Air freight (fast delivery)',
                'Sea freight (cost-effective)',
                'FOB, CIF, or CNF terms',
                'Door-to-door delivery available'
            ]
        },
        {
            icon: <PackageIcon />,
            title: 'Private Labeling',
            description: 'We offer private labeling services to help you build your own brand.',
            features: [
                'Custom packaging design',
                'Your brand name & logo',
                'Flexible MOQ for private label'
            ]
        },
        {
            icon: <BadgeIcon />,
            title: 'Quality Assurance',
            description: 'Rigorous quality control processes to ensure every shipment meets international standards.',
            features: [
                '100% Pre-shipment inspection',
                'ISO 9001:2015 certified process',
                'Batch testing & validation',
                'Third-party inspection support'
            ]
        },
        {
            icon: <BuildingIcon />,
            title: 'Secure Warehousing',
            description: 'State-of-the-art warehousing facilities to ensure safe storage and organized logistics.',
            features: [
                'Climate-controlled storage',
                'Real-time inventory tracking',
                'Cross-docking capabilities',
                'Secure packaging area'
            ]
        }
    ]



    const moqBenefits = [
        'Competitive pricing for bulk orders',
        'Flexible MOQ based on product type',
        'Negotiable terms for regular buyers',
        'Custom packing as per your needs',
        'Consistent supply for repeat orders'
    ]

    const exportProcess = [
        {
            step: '1',
            title: 'Inquiry',
            description: 'Share your product requirements'
        },
        {
            step: '2',
            title: 'Quotation',
            description: 'Receive detailed pricing & terms'
        },
        {
            step: '3',
            title: 'Order',
            description: 'Confirm your order with us'
        },
        {
            step: '4',
            title: 'Production',
            description: 'We manufacture your order'
        },
        {
            step: '5',
            title: 'Shipment',
            description: 'Goods shipped to your location'
        }
    ]

    return (
        <div className="export">
            {/* Hero Section */}
            <section className="export-hero">
                <div className="hero-overlay"></div>
                <div className="container">
                    <p className="hero-label">Global reach</p>
                    <h1>Export & Global Business</h1>
                    <p className="hero-description">
                        From India to the world—Bell Needles exports premium sewing equipment to 27 countries around the world.
                    </p>
                </div>
            </section>

            {/* Export Infrastructure */}
            <section className="section">
                <div className="container">
                    <div className="section-header text-center">
                        <p className="section-label">Ready for international orders</p>
                        <h2>Export-Ready Infrastructure</h2>
                        <p className="section-description">
                            Everything we do is geared towards making global trade seamless and reliable.
                        </p>
                    </div>
                    <div className="infrastructure-grid">
                        {infrastructure.map((item, index) => (
                            <div key={index} className="infrastructure-card">
                                <div className="infrastructure-icon">{item.icon}</div>
                                <h3>{item.title}</h3>
                                <p className="infrastructure-desc">{item.description}</p>
                                <ul className="infrastructure-features">
                                    {item.features.map((feature, idx) => (
                                        <li key={idx}>
                                            <CheckIcon />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Regions We Serve (Flag Carousel) */}
            <section className="section bg-gray">
                <div className="container-fluid"> {/* Use container-fluid for full width if desired, or container for boxed */}
                    <div className="section-header text-center">
                        <p className="section-label">Countries we serve</p>
                        <h2>Countries we serve</h2>
                        <p className="section-description">
                            We export to over 27 countries across all major continents, bridging borders with quality.
                        </p>
                    </div>

                    <div className="flag-carousel">
                        <div className="flag-track">
                            {/* Original Set */}
                            {[
                                'India.jpeg', 'united states.jpeg', 'uk.jpeg', 'uae.jpeg', 'saudi arabia.jpeg',
                                'canada.jpeg', 'germany.jpeg', 'france.jpeg', 'italy.jpeg', 'spain.jpeg',
                                'netherlands.jpeg', 'brazil.jpeg', 'mexico.jpeg', 'argentina.jpeg', 'chile.jpeg',
                                'south africa.jpeg', 'kenya.jpeg', 'nigeria.jpeg', 'Ghana.jpeg', 'tanzania.jpeg',
                                'uganda.jpeg', 'china.jpeg', 'thailand.jpeg', 'indonesia.jpeg', 'Bangladesh.jpeg',
                                'Srilanka.jpeg', 'pakistan.jpeg', 'kuwait.jpeg', 'qatar.jpeg', 'bahrain.jpeg', 'oman.jpeg'
                            ].map((flag, index) => (
                                <div key={`original-${index}`} className="flag-item">
                                    <img src={`/assets/flags/${flag}`} alt={flag.split('.')[0]} loading="lazy" />
                                </div>
                            ))}

                            {/* Duplicate Set for Infinite Loop */}
                            {[
                                'India.jpeg', 'united states.jpeg', 'uk.jpeg', 'uae.jpeg', 'saudi arabia.jpeg',
                                'canada.jpeg', 'germany.jpeg', 'france.jpeg', 'italy.jpeg', 'spain.jpeg',
                                'netherlands.jpeg', 'brazil.jpeg', 'mexico.jpeg', 'argentina.jpeg', 'chile.jpeg',
                                'south africa.jpeg', 'kenya.jpeg', 'nigeria.jpeg', 'Ghana.jpeg', 'tanzania.jpeg',
                                'uganda.jpeg', 'china.jpeg', 'thailand.jpeg', 'indonesia.jpeg', 'Bangladesh.jpeg',
                                'Srilanka.jpeg', 'pakistan.jpeg', 'kuwait.jpeg', 'qatar.jpeg', 'bahrain.jpeg', 'oman.jpeg'
                            ].map((flag, index) => (
                                <div key={`duplicate-${index}`} className="flag-item">
                                    <img src={`/assets/flags/${flag}`} alt={flag.split('.')[0]} loading="lazy" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* MOQ & Export Process */}
            <section className="section">
                <div className="container">
                    <div className="moq-export-layout">
                        {/* MOQ Section */}
                        <div className="moq-section">
                            <p className="section-label">Flexible MOQs</p>
                            <h2>MOQ-Based Bulk Supply</h2>
                            <p className="moq-description">
                                We offer flexible MOQ (Minimum Order Quantity) based on product type and destination. Our team will work with you to find the best solution for your needs.
                            </p>
                            <ul className="moq-list">
                                {moqBenefits.map((benefit, index) => (
                                    <li key={index}>
                                        <CheckIcon />
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Export Process */}
                        <div className="process-section">
                            <p className="section-label">Our export process</p>
                            <h2>Export Process</h2>
                            <div className="process-steps">
                                {exportProcess.map((item, index) => (
                                    <div key={index} className="process-step">
                                        <div className="step-number">{item.step}</div>
                                        <div className="step-content">
                                            <h4>{item.title}</h4>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content text-center">
                        <h2 className="text-white">Ready to Place an Export Order?</h2>
                        <p className="cta-description">
                            Get in touch with our export team to discuss your requirements.
                        </p>
                        <div className="cta-actions">
                            <Button variant="white">Contact Export Team</Button>
                            <Button variant="outline">Request Quote →</Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Export
