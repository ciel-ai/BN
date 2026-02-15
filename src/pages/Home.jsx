import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Button from '../components/Button'
import SEO from '../components/SEO'
import { CheckIcon, TailorIcon, BuildingIcon, PackageIcon, GlobeIcon, ArrowRightIcon, HandshakeIcon, StarIcon, TargetIcon, BadgeIcon, TrendingIcon, TruckIcon, ClockIcon, FactoryIcon } from '../components/Icons'
import { dataService } from '../services/dataService'
import './Home.css'
import InfiniteCarousel from '../components/InfiniteCarousel'
import CountUpAnimation from '../components/CountUpAnimation'
import TypewriterEffect from '../components/TypewriterEffect'
import HeroCarousel from '../components/HeroCarousel'
import NeedleShowcase from '../components/NeedleShowcase'
import TiltCard from '../components/TiltCard'

const Home = () => {
    const navigate = useNavigate()
    const [heroContent, setHeroContent] = useState(null)
    const [products, setProducts] = useState([])

    useEffect(() => {
        const loadData = async () => {
            const hero = await dataService.getSiteContent('hero')
            const prodList = await dataService.getProducts()
            if (hero && hero.title) setHeroContent(hero)
            if (prodList) setProducts(prodList.slice(0, 6)) // Show top 6
        }
        loadData()
    }, [])

    // Helper function to get video path for a product
    const getProductVideo = (product) => {
        if (!product || !product.title) return null;

        const title = product.title.toLowerCase();

        if (title.includes('hand sewing') && !title.includes('machine')) {
            return '/assets/videos/Bell Hand Sewing Needles Video.mp4';
        } else if (title.includes('machine') || title.includes('sewing machine')) {
            return '/assets/videos/Bell machine needles.mp4';
        } else if (title.includes('scissor') || title.includes('tailor')) {
            return '/assets/videos/Bell Scissors video.mp4';
        } else if (title.includes('safety pins') || title.includes('aromi') || title.includes('panda')) {
            return '/assets/videos/aromi pin video.mov';
        }

        return null;
    };

    const stats = [
        { value: <CountUpAnimation end={40} suffix="+" />, label: 'Years of Excellence' },
        { value: <CountUpAnimation end={27} />, label: 'Countries Served' },
        { value: 'Multiple', label: 'Categories' },
        { value: <CountUpAnimation end={100} suffix="M+" />, label: 'Units Produced' },
    ]

    const benefits = [
        {
            icon: <HandshakeIcon />,
            title: 'Trusted by Global Brands',
            description: 'Partnering with leading manufacturers worldwide'
        },
        {
            icon: <StarIcon />,
            title: 'Broad Grade Products',
            description: 'Premium quality that meets international standards'
        },
        {
            icon: <TargetIcon />,
            title: 'Precision Made Products',
            description: 'Manufactured with cutting-edge technology'
        },
        {
            icon: <BadgeIcon />,
            title: 'Flexible Pricing Options',
            description: 'Competitive pricing for bulk orders'
        },
        {
            icon: <TrendingIcon />,
            title: 'Competitive Wholesale Pricing',
            description: 'Best rates for distributors and retailers'
        },
        {
            icon: <TruckIcon />,
            title: 'Reliable Global Supply',
            description: 'Consistent delivery across continents'
        },
    ]



    const whoWeServe = [
        { icon: <TailorIcon />, title: 'Tailors', description: 'Professional tailoring solutions' },
        { icon: <BuildingIcon />, title: 'Garment Firms', description: 'Industrial manufacturing' },
        { icon: <PackageIcon />, title: 'Exporters', description: 'Global distribution partners' },
        { icon: <GlobeIcon />, title: 'Importers', description: 'International trade' },
    ]

    return (
        <div className="home">
            <SEO
                title="Premium Sewing & Tailoring Solutions for Global Professionals"
                description="Manufacturing excellence for over 40 years. Premium quality sewing needles, scissors, and tailoring accessories for professionals worldwide. Serving 27 countries."
                keywords="sewing needles, tailoring scissors, garment accessories, industrial needles, hand sewing needles, Bell Needles"
                url="/"
            />

            {/* Hero Section */}
            <section className="hero">
                <HeroCarousel />
                <div className="container hero-content">
                    <div className="hero-text">
                        <h1 className="hero-title">
                            <TypewriterEffect text="Precision Engineering for the Textile Industry" />
                        </h1>
                        <p className="hero-subtitle">
                            {heroContent?.subtitle || 'Manufacturing excellence for over 40 years, delivering premium quality sewing and tailoring products to professionals worldwide.'}
                        </p>
                        <div className="hero-actions">
                            <Button variant="white" onClick={() => navigate(heroContent?.ctaLink || '/products')}>
                                {heroContent?.ctaText || 'Enquire Now'}
                            </Button>
                            <Button variant="outline" onClick={() => navigate('/contact')}>Request Wholesale Enquiry</Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="stats-bar">
                <div className="container">
                    <div className="stats-grid">
                        {stats.map((stat, index) => (
                            <div key={index} className="stat-item">
                                <div className="stat-value">{stat.value}</div>
                                <div className="stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Infinite Carousel */}
            <InfiniteCarousel />

            {/* Why Bell Needles */}
            <section className="section">
                <div className="container">
                    <div className="section-header text-center">
                        <p className="section-label">Why work with us</p>
                        <h2>Why Bell Needles?</h2>
                        <p className="section-description">
                            Discover the advantages that make Bell Needles the preferred supplier for distributors and manufacturers worldwide.
                        </p>
                    </div>
                    <div className="benefits-grid">
                        {benefits.map((benefit, index) => (
                            <TiltCard key={index} className="benefit-card">
                                <div className="benefit-icon">{benefit.icon}</div>
                                <h3 className="benefit-title">{benefit.title}</h3>
                                <p className="benefit-description">{benefit.description}</p>
                            </TiltCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3D Needle Showcase */}
            <NeedleShowcase />

            {/* Product Categories */}
            <section className="section bg-gray">
                <div className="container">
                    <div className="section-header text-center">
                        <p className="section-label">What we manufacture</p>
                        <h2>Product Categories</h2>
                        <p className="section-description">
                            Explore our comprehensive range of premium sewing and tailoring products.
                        </p>
                    </div>
                    <div className="products-grid">
                        {products.map((product, index) => {
                            const videoPath = getProductVideo(product);

                            return (
                                <div key={index} className="product-card">
                                    <div className="product-image">
                                        {videoPath ? (
                                            <video
                                                src={videoPath}
                                                autoPlay
                                                loop
                                                muted
                                                playsInline
                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                            />
                                        ) : product.image ? (
                                            <img src={product.image} alt={product.title} />
                                        ) : (
                                            <div className="product-img-placeholder" style={{ width: '100%', height: '100%', background: '#f5f5f5' }}></div>
                                        )}
                                    </div>
                                    <div className="product-info">
                                        <h3 className="product-title">{product.title}</h3>
                                        <p className="product-description">{product.description}</p>
                                        <Button variant="outline-primary" icon={<ArrowRightIcon />} onClick={() => navigate('/products')}>Explore</Button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Serving Partners */}
            <section className="section">
                <div className="container">
                    <div className="serving-partners">
                        <div className="partners-content">
                            <p className="section-label">Since 1980</p>
                            <h2>Serving Partners Across the Globe</h2>
                            <p className="partners-description">
                                With over 40 years of manufacturing excellence, we've built strong partnerships with distributors, retailers, and manufacturers in more than 27 countries.
                            </p>
                            <ul className="partners-list">
                                <li><ClockIcon /> Over 40 years of manufacturing excellence</li>
                                <li><GlobeIcon /> Serving 27 countries worldwide</li>
                                <li><PackageIcon /> Multiple product categories</li>
                                <li><FactoryIcon /> 100M+ units produced annually</li>
                            </ul>
                            <Button variant="primary" onClick={() => navigate('/products')}>Explore</Button>
                        </div>
                        <div className="partners-image">
                            <img src="/assets/images/bellneedlless.png" alt="Bell Needles Factory Floor" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Who We Serve */}
            <section className="section bg-gray">
                <div className="container">
                    <div className="section-header text-center">
                        <p className="section-label">Who we serve</p>
                        <h2>Who We Serve</h2>
                    </div>
                    <div className="serve-grid">
                        {whoWeServe.map((item, index) => (
                            <div key={index} className="serve-card">
                                <div className="serve-icon">{item.icon}</div>
                                <h3 className="serve-title">{item.title}</h3>
                                <p className="serve-description">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content text-center">
                        <h2 className="text-white">Looking for a Reliable Long-Term Supplier?</h2>
                        <p className="cta-description">
                            Let's discuss how we can support your business with premium products and reliable service.
                        </p>
                        <div className="cta-actions">
                            <Button variant="white" onClick={() => navigate('/contact')}>Contact Us</Button>
                            <Button variant="outline" onClick={() => navigate('/distributors')}>Apply as Distributor</Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
