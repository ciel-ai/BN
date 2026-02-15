import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import SEO from '../components/SEO'
import { QualityIcon, CustomerIcon, InnovationIcon, SustainabilityIcon, FactoryIcon, GlobeIcon, BadgeIcon, EyeIcon, TargetIcon } from '../components/Icons'
import './About.css'

const About = () => {
    const navigate = useNavigate()
    const coreValues = [
        {
            icon: <QualityIcon />,
            title: 'Quality Excellence',
            description: 'Unwavering commitment to superior product standards'
        },
        {
            icon: <CustomerIcon />,
            title: 'Customer Centricity',
            description: 'Building lasting partnerships through exceptional service'
        },
        {
            icon: <InnovationIcon />,
            title: 'Innovation',
            description: 'Continuous improvement in manufacturing processes'
        },
        {
            icon: <SustainabilityIcon />,
            title: 'Sustainability',
            description: 'Responsible manufacturing for a better tomorrow'
        },
    ]

    const milestones = [
        { year: '1980', event: 'Company founded with a vision for quality' },
        { year: '2005', event: 'Expanded to international markets' },
        { year: '2010', event: 'Achieved ISO certification' },
        { year: '2015', event: 'Reached 27 countries milestone' },
        { year: '2020', event: 'Launched new product lines' },
        { year: '2025', event: 'Celebrating 25+ years of excellence' },
    ]

    const capabilities = [
        {
            icon: <FactoryIcon />,
            title: 'In-House Manufacturing',
            description: 'State-of-the-art production facilities'
        },
        {
            icon: <GlobeIcon />,
            title: 'Global Distribution',
            description: 'Efficient logistics to 27 countries'
        },
        {
            icon: <BadgeIcon />,
            title: 'Quality Control',
            description: 'Rigorous testing at every stage'
        },
    ]

    const timelineRef = useRef([]);

    // Scroll Animation for Thread
    const [scrollProgress, setScrollProgress] = useState(0);
    const timelineContainerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!timelineContainerRef.current) return;
            const { top, height } = timelineContainerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Start drawing when the timeline top hits the middle of the screen
            const startOffset = windowHeight * 0.5;
            // The thread should fill as we scroll down
            const dist = windowHeight - top - startOffset;

            let percentage = (dist / height) * 100;
            // Add a little buffer so it completes
            percentage = Math.max(0, Math.min(100, percentage));

            setScrollProgress(percentage);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Intersection Observer for Timeline Animations
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        timelineRef.current.forEach(item => {
            if (item) observer.observe(item);
        });

        return () => {
            timelineRef.current.forEach(item => {
                if (item) observer.unobserve(item);
            });
        };
    }, []);

    return (
        <div className="about">
            <SEO
                title="About Us - 40+ Years of Manufacturing Excellence"
                description="Learn about Bell Needles' 40-year legacy in manufacturing premium sewing needles, scissors, and tailoring accessories. Serving 27 countries worldwide."
                keywords="Bell Needles history, sewing manufacturer, textile industry, quality needles"
                url="/about"
            />

            {/* Hero Section */}
            <section className="page-hero">
                <div className="hero-overlay"></div>
                <div className="container">
                    <p className="hero-label">Est. 1980</p>
                    <h1>40+ Years of Manufacturing Excellence</h1>
                    <p className="hero-description">
                        Building trust through quality, innovation, and reliability since 1980
                    </p>
                </div>
            </section>

            {/* Legacy Section */}
            <section className="section">
                <div className="container">
                    <div className="legacy-grid">
                        <div className="legacy-content">
                            <p className="section-label">Our story</p>
                            <h2>Bell Needles – A Legacy of Quality</h2>
                            <p>
                                For over 40 years, Bell Needles has been at the forefront of manufacturing premium sewing and tailoring products. What started as a small operation has grown into a trusted name serving professionals across 27 countries.
                            </p>
                            <p>
                                Our commitment to quality, innovation, and customer satisfaction has made us the preferred choice for distributors, manufacturers, and retailers worldwide.
                            </p>
                        </div>
                        <div className="legacy-image">
                            <img src="/assets/images/bellneedlless.png" alt="Bell Needles Factory Floor" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="section bg-gray">
                <div className="container">
                    <div className="vision-mission-grid">
                        <div className="vm-card">
                            <div className="vm-icon"><EyeIcon /></div>
                            <h3>Our Vision</h3>
                            <p>
                                To be the global leader in sewing and tailoring solutions, recognized for uncompromising quality, innovation, and customer partnership.
                            </p>
                        </div>
                        <div className="vm-card">
                            <div className="vm-icon"><TargetIcon /></div>
                            <h3>Our Mission</h3>
                            <p>
                                To deliver premium quality products that empower professionals worldwide, while maintaining sustainable practices and fostering long-term partnerships.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="section">
                <div className="container">
                    <div className="section-header text-center">
                        <p className="section-label">What matters to us</p>
                        <h2>Our Core Values</h2>
                    </div>
                    <div className="values-grid">
                        {coreValues.map((value, index) => (
                            <div key={index} className="value-card">
                                <div className="value-icon">{value.icon}</div>
                                <h3>{value.title}</h3>
                                <p>{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Key Milestones */}
            <section className="section bg-gray">
                <div className="container">
                    <div className="section-header text-center">
                        <p className="section-label">40+ years of growth</p>
                        <h2>Key Milestones</h2>
                    </div>
                    <div className="timeline" ref={timelineContainerRef}>
                        <div className="timeline-thread" style={{ height: `${scrollProgress}%` }}></div>
                        {milestones.map((milestone, index) => (
                            <div
                                key={index}
                                className="timeline-item"
                                ref={el => timelineRef.current[index] = el}
                            >
                                <div className="timeline-marker"></div>
                                <div className="timeline-content">
                                    <div className="timeline-year">{milestone.year}</div>
                                    <p>{milestone.event}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Manufacturing Capabilities */}
            <section className="section">
                <div className="container">
                    <div className="section-header text-center">
                        <p className="section-label">How we deliver</p>
                        <h2>Manufacturing & Export Capabilities</h2>
                    </div>
                    <div className="capabilities-grid">
                        {capabilities.map((capability, index) => (
                            <div key={index} className="capability-card">
                                <div className="capability-icon">{capability.icon}</div>
                                <h3>{capability.title}</h3>
                                <p>{capability.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content text-center">
                        <h2 className="text-white">Ready to Partner with Bell Needles?</h2>
                        <p className="cta-description">
                            Join our network of satisfied partners and experience the Bell Needles difference.
                        </p>
                        <div className="cta-actions">
                            <Button variant="white" onClick={() => navigate('/contact')}>Contact Us</Button>
                            <Button variant="outline" onClick={() => navigate('/distributors')}>Become a Distributor</Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
