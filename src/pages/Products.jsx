import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Button from '../components/Button'
import { CheckIcon, ArrowRightIcon } from '../components/Icons'
import { dataService } from '../services/dataService'
import './Products.css'

const Products = () => {
    const navigate = useNavigate()
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const data = await dataService.getProducts()
                setProducts(data)
            } catch (error) {
                console.error("Failed to load products", error)
            } finally {
                setLoading(false)
            }
        }
        loadProducts()
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

    if (loading) {
        return <div className="p-8 text-center">Loading products...</div>
    }

    return (
        <div className="products">
            {/* Hero Section */}
            <section className="products-hero">
                <div className="hero-overlay"></div>
                <div className="container">
                    <p className="hero-label">Browse our range</p>
                    <h1>Premium Sewing & Tailoring Products</h1>
                    <p className="hero-description">
                        Comprehensive range of high-quality products for professionals worldwide
                    </p>
                </div>
            </section>

            {/* Products List */}
            <section className="section">
                <div className="container">
                    <div className="products-list">
                        {products.map((product, index) => {
                            const videoPath = getProductVideo(product);

                            return (
                                <div key={index} className={`product-detail ${index % 2 === 1 ? 'reverse' : ''}`}>
                                    <div className="product-detail-image">
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
                                            <div className="product-img-placeholder" style={{ width: '100%', height: '300px', background: '#f5f5f5' }}></div>
                                        )}
                                    </div>
                                    <div className="product-detail-content">
                                        <h2>{product.title}</h2>
                                        <p className="product-detail-description">{product.description}</p>
                                        <div className="product-features">
                                            <h4>Key Features:</h4>
                                            <ul>
                                                {product.features.map((feature, idx) => (
                                                    <li key={idx}><CheckIcon /> {feature}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <Button
                                            variant="primary"
                                            icon={<ArrowRightIcon />}
                                            onClick={() => {
                                                if (product.id === 'hand-sewing-needles' || product.id === 'sewing-machine-needles' || product.id === 'tailoring-scissors' || product.id === 'sewing-accessories' || product.id === 'safety-pins' || product.id === 'crochet-hooks') {
                                                    navigate(`/products/category/${product.id}`)
                                                } else {
                                                    navigate(`/products/${product.id}`)
                                                }
                                            }}
                                        >
                                            Enquire Now
                                        </Button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content text-center">
                        <h2 className="text-white">Need a Detailed Product Catalogue?</h2>
                        <p className="cta-description">
                            Download our comprehensive product catalogue or get in touch for custom requirements.
                        </p>
                        <div className="cta-actions">
                            <Button variant="white">Request Catalogue</Button>
                            <Button variant="outline">Contact Sales</Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Products
